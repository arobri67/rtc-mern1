import React from "react";
import "./Header.css";

const Header = ({ api }) => {
  return (
    <header>
      <div className="logo-container">
        <img src="/galaxy.svg" alt="Galaxy Logo" />
        <h1>
          COSMIC <span>HUB</span>
        </h1>
      </div>
      <h2>{api}</h2>
      <hr />
    </header>
  );
};

export default Header;
