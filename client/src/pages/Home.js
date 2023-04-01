import React from "react";
import { useParams } from "react-router-dom";
const Home = () => {
  const { id } = useParams();
  return (
    <>
      <h1>Home</h1>
      <div>
        <h1>Welcome to the home page!</h1>
        <p>Your user id is: {id}</p>
      </div>
    </>
  );
};

export default Home;
