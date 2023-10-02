import React from "react";
import { useState } from "react";

function Item({ name, category }) {

  const [inCart, addToCart]=useState(false);

  const cartStatus = inCart ? "in-cart" : "" 

  function handleClick() {
    addToCart(!inCart)
  }

  return (
    <li className={cartStatus}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className={"add"}>{inCart ? "Remove From Cart": "Add to Cart"}</button>
    </li>
  );
}

export default Item;
