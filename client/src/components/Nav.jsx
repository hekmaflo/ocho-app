import React from "react";
import { NavLink } from "react-router-dom";
import globe from "./assets/globe.png";
import house from "./assets/house.png";
import usericon from "./assets/user.png";
import bullet from "./assets/bullet-list.png";
import logout from "./assets/logout.png";
const Nav = ({ user }) => {
  return (
    <>
      <div className="Nav-bar">
        <NavLink to={user ? `/home/${user._id}` : "/"}>
          <img src={house} className="Nav-logo" alt="house" />
        </NavLink>
        {/* <NavLink to="/profile"> */}
        <NavLink to={user ? `/profile/${user._id}` : "/"}>
          <img src={usericon} className="Nav-logo" alt="user" />
        </NavLink>
        <NavLink to="explore">
          <img src={globe} className="Nav-logo" alt="globe" />
        </NavLink>
        <NavLink to={user ? `/aboutuser/${user._id}` : "/"}>
          <img src={bullet} className="Nav-logo" alt="list" />
        </NavLink>
        {user && (
          <NavLink to={"/"} style={{ marginLeft: "auto" }}>
            <img src={logout} className="Nav-logo" alt="list" />
          </NavLink>
        )}
      </div>
    </>
  );
};

export default Nav;
