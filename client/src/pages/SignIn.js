import React, { useState } from "react";
import UserLogin from "../components/UserLogin";
import UserRegister from "../components/UserRegister";
import ball from "../components/assets/ball.png";
const SignIn = (props) => {
  const [isRegistered, setIsRegistered] = useState(true);

  const handleToggle = () => {
    setIsRegistered(!isRegistered);
  };
  return (
    <div className="sign-in-container">
      <div className="sign-in-container-left">
        <h1>Welcome to Ocho!</h1>
        <div>
          <img src={ball} className="ball-logo" alt="list" />
        </div>
        <div className="about-us">
          <h3>
            Stop scolling like a baboon and make social media more intentional.
            We don't care about your 85+ photos from your vacation trip. Just
            your top 8.Showcase your life through Movies, Music, Books,
            Concerts, Colors, Art, Hangouts...anything you find meaningful
            through your top 8. Sign up to start posting and sharing.
          </h3>
        </div>
      </div>
      <div className="sign-in-container-right">
        {isRegistered ? (
          <>
            <h1>Sign In</h1>
            <UserLogin setUser={props.setUser} />
            <button className="List-input-button" onClick={handleToggle}>
              Register
            </button>
          </>
        ) : (
          <>
            <h1>Register</h1>
            <UserRegister />
            <button className="List-input-button" onClick={handleToggle}>
              Login
            </button>
          </>
        )}
      </div>
    </div>
  );
};
export default SignIn;
