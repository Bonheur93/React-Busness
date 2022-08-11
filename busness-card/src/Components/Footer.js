import React from "react";
import Twitter from "./Images/Twitter.png";
import Facebook from "./Images/Facebook.png";
import Instagrem from "./Images/Instagram.png";
import Github from "./Images/GitHub.png";

function Footer() {
    return (
        <div className="footer">
            <div className="icons">
                <img className="twitter" src={Twitter} alt="" />
                <img className="facebook" src={Facebook} alt="" />
                <img className="instagram" src={Instagrem} alt="" />
                <img className="github" src={Github} alt="" />

            </div>

        </div>
    )
}
export default Footer 