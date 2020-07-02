import React from "react";
import watermelonfavicon from "./assets/watermelonfavicon.png";

const Header = (props) => {
  return (
    <div className="flexContainer">
      <header>
        <div className="wrapper">
          <h1>Podcast Commuter</h1>
          <div className="flexContainer">
            <p>
              <img src={watermelonfavicon} alt="watermelon" />
              Your source for juicy podcasts on the go!
              <img src={watermelonfavicon} alt="watermelon" />
            </p>
          </div>
          <ul>
            <li>How it works:</li>
            <li>
              1. Enter your starting address, followed by your destination.
            </li>
            <li>
              2. Search a podcast by name, or select a cateogory of podcast
              you're in the mood for!
            </li>
            <li>
              3. Let us work some magic and populate the perfect, juiciest, most
              time coordinated podcast just for you and your commute!
            </li>
          </ul>
          <button
            className="startButton"
            onClick={() => props.scrollToSearch(".background1")}
          >
            Let's get started!{" "}
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
