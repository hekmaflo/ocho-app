import "./App.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Explore from "./pages/Explore";
import SignIn from "./pages/SignIn";
import List from "./components/List";
import Nav from "./components/Nav";
import ItemCreation from "./pages/ItemCreation";
import ImageUpload from "./pages/ImageUpload";
import ListEdit from "./pages/ListEdit";
import AboutUser from "./pages/AboutUser";

function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="App">
      <Nav user={user} />
      {/* <Home />
      <List />
      <List />
      <List /> */}
      <header className="App-header">
        <Routes>
          <Route path="/" element={<SignIn setUser={setUser} />} />
          <Route path="/home/:id" element={<Home />} />
          <Route path="/aboutuser/:id" element={<AboutUser />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/item/:id" element={<ItemCreation />} />
          <Route path="/upload/:id" element={<ImageUpload />} />
          <Route path="/list/:id" element={<ListEdit />} />
        </Routes>
      </header>
      <main></main>
    </div>
  );
}

export default App;
