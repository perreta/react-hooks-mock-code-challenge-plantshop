import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, onPlantFormSubmit }) {

  const [ search, setSearch ] = useState("")

  const plantsToDisplay = plants.filter((plant) => {
    if (plant.name.toLowerCase().includes(search.toLowerCase())){
      return true
    } else {
      return false
    }
  })

  return (
    <main>
      <NewPlantForm plants={plants} onPlantFormSubmit={onPlantFormSubmit}/>
      <Search search={search} onSearch={setSearch}/>
      <PlantList plants={plantsToDisplay} />
    </main>
  );
}

export default PlantPage;
