import React from "react";
import imgLogo from "../images/Sign.png";
import allFour from "../images/all4_final_done.png";

export const HomePage = () => {
    return (
        <div>
            <img src={imgLogo} alt="Queen Vee Club" height="400px" />
            <img src={allFour} alt="Four Women" height="600px" />
        </div>
    )
}