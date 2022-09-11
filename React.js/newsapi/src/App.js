import logo from "./logo.svg";
import "./App.css";
import ListOfArticles from "./components/ListOfArticles/ListOfArticles";
import { Routes, Route, Link } from "react-router-dom";
import { NavLink, Navbar } from "@mantine/core";
import HomePage from "./components/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      {/* <Navbar /> */}
      {/* <NavLink label="Home" to="/">
        Home
      </NavLink>
      <NavLink label="login" to="/about/login">
        Login
      </NavLink>
      <NavLink label="About" to="/about">
        About
      </NavLink> */}
      {/* <NavLink href="/" label="Home" to="/"></NavLink>
      <NavLink href="/about" label="About"></NavLink> */}
      <Navbar ></Navbar>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<h2>About</h2>} />
        <Route path="Login" element={<h2>Login</h2>} />
      </Routes>
    </div>
  );
}

export default App;
