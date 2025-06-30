import React from "react";
import con from "../../assets/contact.png";
import "./Contact.css";
export default function Contact(){
    return(
        <div id="contact">
            <div className="leftcontact">
                <img src={con} alt=""/>
            </div>
            <div className="rightcontact">
                <form action="https://formspree.io/f/xldjwlwq" method="post">
                    <input name="Username" type="text" placeholder="Name"/>
                    <input name="Email" type="email" placeholder="enter email"/>
                    <textarea name="Message" id="textarea" placeholder="message me"></textarea>
                    <input type="submit" id="btn" value="Submitt"/>
                </form>
            </div>
        </div>
    )
}