import React, { useState } from "react";

function NewPlantForm({ onPlantFormSubmit }) {

  const [ newPlant, setNewPlant ] = useState({
    name: "",
    image: "https://via.placeholder.com/400",
    price: ""
  })

  function handleNewPlantName (e) {
    let name = "name"
    setNewPlant({...newPlant, [name]: e.target.value})
  }

  function handleNewPlantImage (e) {
    let image = "image"
    setNewPlant({...newPlant, [image]: e.target.value})
  }

  function handleNewPlantPrice (e) {
    let price = "price"
    setNewPlant({...newPlant, [price]: e.target.value})
  }

  function handleFormSubmit (e) {
    e.preventDefault()
    onPlantFormSubmit(newPlant)
    console.log(newPlant)

  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleFormSubmit}>
        <input type="text" name="name" placeholder="Plant name" onChange={handleNewPlantName} value={newPlant.name}/>
        <input type="text" name="image" placeholder="Image URL" onChange={handleNewPlantImage} />
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={handleNewPlantPrice} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
