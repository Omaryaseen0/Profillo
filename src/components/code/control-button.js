import React from "react";
import { useState } from "react";
import "../style/control-button.css";

let Y = 0;

function ControlButton() {
    let [sunny, setSunny] = useState(["white", "#111"]);
    let [Color, setColor] = useState(["#111", "white"]);
    let [ground, setGround] = useState(["#eee", "#2b2a2a"]);
    let [groundCG, setGroundCG] = useState(["#2b2a2a", "#eee"]);

    let [content, setContent] = useState([
        '<i class="fa-solid fa-sun"></i>',
        '<i class="fa-regular fa-moon"></i>',
    ]);
    return (
        <div>
            <div
                className="night"
                onClick={(e) => {
                    // -----------------------------------
                    document.body.style.background = sunny[Y];
                    document.body.style.transition = ".4s";
                    e.target.innerHTML = content[Y];
                    document.getElementById("WEB").style.color = Color[Y];
                    document.querySelector("p").style.color = Color[Y];
                    document.querySelector("button").style.color = Color[Y];
                    Y++;
                    if (Y === 2) Y = 0
                }}
            >
                <i className="fa-regular fa-moon"></i>
            </div>
            <div className="buttonsChangs">
                <div className="Home-BT">

                </div>
            </div>
        </div>
    );
}

export default ControlButton;
