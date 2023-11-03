import React, { useState } from "react";
import "../style/Profillo.css";


function Profillo() {

  return (
    <div className="Parent">
      <main>
        <div>
          <div className="hlef-cycle"></div>
          <img
            src="https://www.ocregister.com/wp-content/uploads/migration/kpj/kpj1j7-20clint.jpg?w=535"
            alt="profillo"
            width="200px"
            className="img-left"
          />
        </div>
        <div className="words-size">
          <h1>
            <i className="fa-solid fa-minus"></i> I'M OMAR YASSEN. <br />
            <span id="WEB">WEB DESIGNER</span>
          </h1>
          <p>
            I'm a Egypt based web designer &  full-stack developer focused on{" "}
            <br />
            crafting clean & user‑friendly experiences, I am passionate about{" "}
            <br />
            building excellent software that improves the lives of those around
            me.
          </p>
          <button type="button">
            More About Me{" "}
            <span>
              <i className="fa-solid fa-arrow-right"></i>
            </span>{" "}
          </button>
        </div>
        
        <div className="To-theme">
          <ul>
            <li>
              <i className="fa-solid fa-house"></i>
            </li>
            <li>
              <i className="fa-solid fa-user"></i>
            </li>
            <li>
              <i className="fa-solid fa-briefcase"></i>
            </li>
            <li>
              <i className="fa-solid fa-envelope"></i>
            </li>
            <li>
              <i className="fa-solid fa-comments"></i>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default Profillo;
