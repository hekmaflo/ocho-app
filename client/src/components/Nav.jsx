import React from "react";
import { NavLink } from "react-router-dom";
import globe from "./assets/globe.png";
import house from "./assets/house.png";
import user from "./assets/user.png";
import bullet from "./assets/bullet-list.png";
const Nav = () => {
  return (
    <>
      <div className="Nav-bar">
        <NavLink to="/home">
          <img src={house} className="Nav-logo" alt="house" />
        </NavLink>
        <NavLink to="/profile">
          <img src={user} className="Nav-logo" alt="user" />
        </NavLink>
        <NavLink to="explore">
          <img src={globe} className="Nav-logo" alt="globe" />
        </NavLink>

        <img src={bullet} className="Nav-logo" alt="list" />
      </div>
    </>
  );
};

export default Nav;
