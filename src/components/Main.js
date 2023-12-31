import React from "react";
import Card from "./Card";
import data from "../data"

export default function Main() {
    
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                item={item} />
        )
    })
    
    return(
        <div className="cards-all">
            {cards}
        </div>
    )
}