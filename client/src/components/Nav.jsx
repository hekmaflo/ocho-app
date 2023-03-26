import React from "react";
import globe from "./assets/globe.png";
import house from "./assets/house.png";
import user from "./assets/user.png";
import bullet from "./assets/bullet-list.png";
const Nav = () => {
  return (
    <>
      <div className="Nav-bar">
        <img src={house} className="Nav-logo" alt="house" />
        <img src={user} className="Nav-logo" alt="user" />
        <img src={globe} className="Nav-logo" alt="globe" />
        <img src={bullet} className="Nav-logo" alt="list" />
      </div>
    </>
  );
};

export default Nav;
