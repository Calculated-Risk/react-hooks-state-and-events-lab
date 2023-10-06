import React from "react";
import Item from "./Item";
import { useState } from "react";
import Filter from "./Filter";


function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory]=useState("All")


  function handleChange(e){
  setSelectedCategory(e.target.value)
  }

  const itemsToDisplay = items.filter((item) => {
  if (selectedCategory === "All"){
    return true
    }else {
    return item.category === selectedCategory
    }
  })

 

  return (
    <div className="ShoppingList">
      <Filter onCategoryChange={handleChange}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
