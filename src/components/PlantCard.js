import React, { useState } from "react";

function PlantCard({ plant, onUpdatePlant }) {
  const [isSoldOut, setIsSoldOut] = useState(plant.isSoldOut || false);

  function handleSoldOutClick() {
    setIsSoldOut(!isSoldOut);
    const updatedPlant = { ...plant, isSoldOut: !isSoldOut };
    onUpdatePlant(updatedPlant);
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      <button className="primary" onClick={handleSoldOutClick}>
        {isSoldOut ? "Out of Stock" : "In Stock"}
      </button>
    </li>
  );
}

export default PlantCard;
