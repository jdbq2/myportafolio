import React from "react";
import { Link } from "react-router-dom";
import Menu from "../../Menu/Menu";
import "./header.scss";
const Header = ({ theme, themeState }) => {
  return (
    <div className="header">
      <button className="header__theme" onClick={theme}>
        {themeState === "ligthMode" ? "🌞" : "🌙"}
      </button>
      <Menu />
    </div>
  );
};

export default Header;
