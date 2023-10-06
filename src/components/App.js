import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import {useState} from "react";
import Header from "./Header";



function App() {
  const[isDarkMode, setDark] = useState(false)

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature

  const appClass = isDarkMode ? "App dark" : "App light"

  function handleClick(){
    setDark((isDarkMode) => !isDarkMode)
  }


  return (
    <div className={appClass}>
      <Header clickEvent={handleClick} />
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;

