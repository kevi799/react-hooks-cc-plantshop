import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, onToggleInStock, onDeletePlant }) {
  return (
    <ul className="cards">
      {plants.length > 0 ? (
        plants.map((plant) => (
          <PlantCard
            key={plant.id}
            id={plant.id}
            name={plant.name}
            image={plant.image}
            price={plant.price}
            inStock={plant.inStock}
            onToggleInStock={onToggleInStock}
            onDeletePlant={onDeletePlant}
          />
        ))
      ) : (
        <p>No plants available.</p>
      )}
    </ul>
  );
}

export default PlantList;
