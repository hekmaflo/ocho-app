import React, { useState } from "react";

const UserLogin = () => {
  const [formValues, setFormValues] = useState({
    enteredEmail: "",
    enteredPassword: "",
  });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  return (
    <form>
      <div>
        <div>
          <label>Email:</label>
          <input type="text" onChange={handleChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" />
        </div>
      </div>
      <div>
        <button type="submit">Log In</button>
      </div>
    </form>
  );
};
export default UserLogin;
