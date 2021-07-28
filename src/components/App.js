import React, { useState, useEffect } from "react";
import Header from "./Header";
import NewPlantForm from "./NewPlantForm";
import PlantPage from "./PlantPage";

function App() {

  const [ plants, setPlants ] = useState([])
  

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(resp => resp.json())
    .then(plants => setPlants(plants))
  }, [])

  function onPlantFormSubmit(newPlant){
    setPlants([...plants, newPlant])
  }

  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants} onPlantFormSubmit={onPlantFormSubmit}/>
    </div>
  );
}

export default App;
