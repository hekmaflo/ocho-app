import React from "react";

const UserRegister = () => {
  return (
    <form>
      <div>
        <div>
          <label>First Name:</label>
          <input type="text" />
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" />
        </div>
        <div>
          <label>Email:</label>
          <input type="text" />
        </div>
        <div>
          <label>Password:</label>
          <input type="text" />
        </div>
        <div>
          <label>Retype Password:</label>
          <input type="text" />
        </div>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default UserRegister;
