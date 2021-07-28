import React, { useState } from "react";

function PlantCard({ name = "nice plant!", image = "https://via.placeholder.com/400", price }) {
  
  const [ stock, setStock ] = useState(true)

  function handleStock () {
    setStock(stock => !stock)
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {stock ? <button className="primary" onClick={handleStock}>In Stock</button> : <button onClick={handleStock}>Out of Stock</button>}
    </li>
  );
}

export default PlantCard;
