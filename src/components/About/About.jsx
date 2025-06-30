import Card from "../Card/Card"
import "./About.css"
import mern from "../../assets/mern.png";
import python from "../../assets/java.png";
import dsa from "../../assets/dsa.png";

export default function About(){
    return (
        <div id="about"> 
            <div className="leftabout">
                <div className="circle-line">
                    <div className="circle">

                    </div>
                    <div className="line">

                    </div>
                    <div className="circle">

                    </div>
                    <div className="line">

                    </div>
                    <div className="circle">

                    </div>
                </div>
                <div className="info">
                    <div className="personal">
                        <h1>Personal Info</h1>
                        <ul>
                            <li>
                                <span>NAME</span> : HARSH YADAV
                            </li>
                            <li>
                                <span>AGE</span> : 21 YEARS
                            </li>
                            <li>
                                <span>GENDER</span> : MALE
                            </li>
                            <li>
                                <span>LANGUAGE KNOWN</span> : HINDI, ENGLISH
                            </li>
                        </ul>
                    </div>

                    <div className="education">
                        <h1>EDUCATION</h1>
                        <ul>
                            <li>
                                <span>DEGREE</span> : BTECH
                            </li>
                            <li>
                                <span>BRANCH</span> : COMPUTER SCIENCE & ENDINEERING
                            </li>
                            <li>
                                <span>CGPA</span> : 8.8
                            </li>
                        </ul>
                    </div>
                    <div className="skills">
                        <h1>Skills</h1>
                        <ul>
                            <li>
                                MERN STACK WEB DEVELOPER
                            </li>
                            <li>
                                PYTHON, C, JAVA, JAVASCRIPT
                            </li>
                            <li>
                                DSA
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="rightabout">
                <Card title={"MERN STACK WEB DEVELOPER"} image={mern}/>
                <Card title={"JAVA"} image={python}/>
                <Card title={"DSA"} image={dsa}/>
            </div>
        </div>
    )
}