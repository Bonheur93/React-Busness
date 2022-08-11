import React from "react";
import Pic from "./Images/Pic.png";

function Header(){
    return(
        <header>
            <nav>
                <img className="pic" src={Pic} alt="" />
            </nav>
        </header>
    )
}
export default Header