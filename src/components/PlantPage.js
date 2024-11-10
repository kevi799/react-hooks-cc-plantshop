import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searching, setSearching] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((plantsData) => setPlants(plantsData))
      .catch((error) => console.error("Error fetching plants:", error));
  }, []);

  function handleAddingPlant(newPlant) {
    setPlants((prevPlants) => [...prevPlants, newPlant]);
  }

  function handleSearchChange(plantName) {
    setSearching(plantName);
  }

  function toggleInStock(id) {
    const updatedPlants = plants.map((plant) => {
      if (plant.id === id) {
        const updatedPlant = { ...plant, inStock: !plant.inStock };

        fetch(`http://localhost:6001/plants/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ inStock: updatedPlant.inStock }),
        })
          .then((response) => response.json())
          .then(() => {
            setPlants((prevPlants) =>
              prevPlants.map((p) =>
                p.id === id ? { ...p, inStock: updatedPlant.inStock } : p
              )
            );
          })
          .catch((error) =>
            console.error("Error updating plant stock:", error)
          );

        return updatedPlant;
      }
      return plant;
    });

    setPlants(updatedPlants);
  }

  function handleDeletePlant(id) {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        const updatedPlants = plants.filter((plant) => plant.id !== id);
        setPlants(updatedPlants);
      })
      .catch((error) => console.error("Error deleting plant:", error));
  }

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searching.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddingPlant} />
      <Search searching={searching} onSearchChange={handleSearchChange} />
      <PlantList
        plants={filteredPlants}
        onToggleInStock={toggleInStock}
        onDeletePlant={handleDeletePlant}
      />
    </main>
  );
}

export default PlantPage;
