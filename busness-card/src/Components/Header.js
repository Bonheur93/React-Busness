import React from "react";
import bon from "./Images/bon.jpg";

function Header(){
    return(
        <header>
            <nav>
                <img className="bon" src={bon} alt="" />
            </nav>
        </header>
    )
}
export default Header