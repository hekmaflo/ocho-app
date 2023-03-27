import React from "react";

const UserLogin = () => {
  return (
    <form>
      <div>
        <div>
          <label>Email:</label>
          <input type="text" />
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
