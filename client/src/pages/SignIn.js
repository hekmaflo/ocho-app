import React, { useState } from "react";
import UserLogin from "../components/UserLogin";
import UserRegister from "../components/UserRegister";
const SignIn = () => {
  const [isRegistered, setIsRegistered] = useState(true);

  const handleToggle = () => {
    setIsRegistered(!isRegistered);
  };
  return (
    <>
      {isRegistered ? (
        <>
          <h1>Sign In</h1>
          <UserLogin />
          <button onClick={handleToggle}>Register</button>
        </>
      ) : (
        <>
          <h1>Register</h1>
          <UserRegister />
          <button onClick={handleToggle}>Login</button>
        </>
      )}
    </>
  );
};
export default SignIn;
