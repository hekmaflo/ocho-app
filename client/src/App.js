import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import List from "./components/List";
import Nav from "./components/Nav";
function App() {
  return (
    <div className="App">
      <Nav />
      {/* <Home />
      <List />
      <List />
      <List /> */}
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </header>
      <main></main>
    </div>
  );
}

export default App;
