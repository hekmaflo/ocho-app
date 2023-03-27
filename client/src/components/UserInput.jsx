import React from "react";

const UserInput = () => {
  return (
    <div>
      <h1>User Input</h1>
      <form>
        <div>
          <div>
            <label>Item</label>
            <input type="text" />
          </div>
          <div>
            <label>Description</label>
            <input type="text" />
          </div>
        </div>
        <button>Sumbit</button>
      </form>
    </div>
  );
};

export default UserInput;
