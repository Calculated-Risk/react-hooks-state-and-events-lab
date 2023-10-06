import React from "react";

export default function Header({clickEvent}){
    return (
        <header>
            <h2>Shopster</h2>
            <button onClick={clickEvent} >Dark Mode</button>
        </header>
    )
}