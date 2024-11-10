import React from "react";

function PlantCard({
  id,
  name,
  image,
  price,
  inStock,
  onToggleInStock,
  onDeletePlant,
}) {
  return (
    <li className="card">
      <h2>{name}</h2>
      {image && (
        <img
          src={image}
          alt={name}
          style={{ width: "200px", height: "auto" }}
        />
      )}
      <p>Price: ${price}</p>
      <button onClick={() => onToggleInStock(id)}>
        {inStock ? "In Stock" : "Out of Stock"}
      </button>
      <button onClick={() => onDeletePlant(id)}>Delete</button>
    </li>
  );
}

export default PlantCard;
