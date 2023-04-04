import React, { useState } from "react";
import UserLogin from "../components/UserLogin";
import UserRegister from "../components/UserRegister";
import ball from "../components/assets/ball.png";
import video from "../components/assets/welcome.mov";
import background from "../components/assets/city.jpeg";
const SignIn = (props) => {
  const [isRegistered, setIsRegistered] = useState(true);

  const handleToggle = () => {
    setIsRegistered(!isRegistered);
  };
  return (
    <div className="sign-in-container">
      <div className="sign-in-container-left">
        <video className="video" autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video>
        <div>
          <img src={ball} className="ball-logo" alt="list" />
        </div>
        <div className="about-us">
          <h3>Stop scolling, make social media more intentional.</h3>
        </div>
      </div>
      <div className="sign-in-container-right">
        {isRegistered ? (
          <div className="choice">
            <UserLogin setUser={props.setUser} />
            <button className="List-input-button-three" onClick={handleToggle}>
              Register
            </button>
          </div>
        ) : (
          <div>
            <UserRegister />
            <button className="List-input-button-three" onClick={handleToggle}>
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default SignIn;
