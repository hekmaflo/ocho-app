import React, { useState } from "react";
import UserLogin from "../components/UserLogin";
import UserRegister from "../components/UserRegister";
const SignIn = (props) => {
  const [isRegistered, setIsRegistered] = useState(true);

  const handleToggle = () => {
    setIsRegistered(!isRegistered);
  };
  return (
    <>
      <h1>Welcome to Ocho!</h1>
      <h3>
        Stop scolling like a baboon and make social media more intentional.
      </h3>
      <h3>
        We don't care about your 85+ photos from your vacation trip. Just your
        top 8.
      </h3>
      <h3>
        Showcase your life through Movies, Music, Books, Concerts, Colors, Art,
        Hangouts...anything you find meaningful through your top 8. Sign up to
        start posting and sharing.
      </h3>
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
    </>
  );
};
export default SignIn;
