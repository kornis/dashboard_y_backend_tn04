import React from "react";
import Card from "./subcomponents/Card";

function ContentRowMovies() {

    const infoCardList = [
        {
            title: "Movies in Data Base",
            value: 21,
            icon: "fas fa-film fa-2x text-gray-300",
            color: "primary"
        },
        {
            title: "Total awards",
            value: 79,
            icon: "fas fa-award fa-2x text-gray-300",
            color: "success"
        },
        {
            title: "Actors quantity",
            value: 49,
            icon: "fas fa-user fa-2x text-gray-300",
            color: "warning"
        }
    ]
    
    const mapper = function(cardData, index){
    return (
        <Card 
        key={cardData.title + index}
        title={cardData.title}
        value={cardData.value}
        icon={cardData.icon}
        color={cardData.color}
    />
    )
}

    return(
        <div className="row">
            { Array.isArray(infoCardList) && infoCardList.map(mapper) }
        </div>
    )
}

export default ContentRowMovies;