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

            <ul>
              <li>How it works:</li>
              <li>
                1. Enter your starting address, followed by your destination.
              </li>
              <li>2. Search for a podcast by name or by genre.</li>
              <li>
                3. Let us work some magic and populate the perfect, juiciest,
                most time coordinated podcast just for you and your commute!
              </li>
            </ul>
            <button
              className="startButton"
              onClick={() => props.scrollToSearch(".formBackground")}
            >
              Let's get started!
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
