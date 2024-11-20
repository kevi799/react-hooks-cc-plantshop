import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, onAddPlant, onUpdatePlant, setSearchWord }) {
  return (
    <main>
      <NewPlantForm onAddPlant={onAddPlant} />
      <Search onSearchChange={setSearchWord} />
      <PlantList plants={plants} onUpdatePlant={onUpdatePlant} />
    </main>
  );
}

export default PlantPage;
