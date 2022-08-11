import React from "react";
import Mail from "./Images/Mail.png";
import Linkedin from "./Images/linkedin.png";

function Body() {
    return (
        <main className="Main">

            <div className="Div1">
                <h1>Bonheur Authentique</h1>
                <p className="front">Frontend Developper</p>
                <p className="laurent">laurasmith.website</p>

                <div className="buttonContainer">
                    <button className="Mail">
                        <img className="mail" src={Mail} alt="" />
                        <p>mail</p>
                    </button>
                    <button className="Linkedin">
                        <img className="linkedin" src={Linkedin} alt="" />
                        <p className="link">linkedin</p>
                    </button>
                </div>

                <div className="presentation">
                    <p className="about">About</p>
                    <p className="About">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                    <p className="Interests">Interests</p>
                    <p className="interests">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
                </div>

            </div>


        </main>
    )
}
export default Body