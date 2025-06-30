import React from "react";
import Card from "../Card/Card"
import "./Project.css"
import calculator from "../../assets/calculator.png"
import Todo from "../../assets/Todo-list.png"
import system from "../../assets/Appointment-system.png"
export default function Project(){
    return(
        <div id="projects">
            <h1 className="h1">2+ YEARS EXPERIENCED IN PROJECTS</h1>
            <div className="slider">
                <Card title={"BASIC CALSULATOR"} image={calculator}/>
                <Card title={"TODO LIST"} image={Todo}/>
                <Card title={"STUDENT-TEACHER APPOINTMENT SYSTEM"} image={system}/>
                <Card title={"LANE ASSIST SYSTEM"}/>
            </div>
        </div>
    )
}