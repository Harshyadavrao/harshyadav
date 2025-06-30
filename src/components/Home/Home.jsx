import React from "react";
import "./Home.css";
import man from "../../assets/man.png";
import ReactTypingEffect from "react-typing-effect"
export default function Home(){
    return(
        <div id="home">
            <div className="lefthome">
                <div className="Details">
                    <div className="line1">
                        I'M
                    </div>
                    <div className="line2">
                        HARSH YADAV
                    </div>
                    <div className="line3">
                        WEB DEVELOPER, SOFTWARE DEVELOPER
                    </div>
                    <button>
                        HIRE ME
                    </button>
                </div>
            </div>

            <div className="righthome">
                <img src={man} alt=""/>
            </div>
        </div>
    )
}