import React, { useState, useEffect } from "react";
import axios from "axios";
import UserRegister from "../components/UserRegister";
import List from "../components/List";
import { useParams } from "react-router-dom";
import background from "../components/assets/city.jpeg";
const Profile = () => {
  const { id } = useParams();
  const [user, setUser] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(`/api/users/${id}`);
        setUser(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getUser();
  }, [id]);
  return (
    <div className="profile">
      <div
        className="about-user-container"
        style={{ backgroundImage: `url(${background})` }}
      >
        <h1 className="white-bg">@{user.username}</h1>
        <img className="user-photo-container" src={user.image} alt="moco" />
        <h3 className="white-bg">{user.description}</h3>
      </div>
      <List userId={id} />
    </div>
  );
};

export default Profile;
