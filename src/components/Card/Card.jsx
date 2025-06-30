import React from "react";
import "./Card.css";
export default function Card({title, image}){
    return(
        <div id="card">
            <h1>{title}</h1>
            <div className="cardhover">
                <img src={image} alt=""/>
            </div> 
        </div>
    )
}