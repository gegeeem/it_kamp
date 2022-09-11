import logo from "./logo.svg";
import "./App.css";
import ListOfArticles from "./components/ListOfArticles/ListOfArticles";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import { Navbar } from "@mantine/core";
import HomePage from "./components/HomePage/HomePage";
import MainNavbar from "./Navbar/MainNavbar";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      {/* <NavLink label="Home" to="/">
        Home
      </NavLink>
      <NavLink label="tesla" to="/tesla">
        Tesla
      </NavLink>
      <NavLink label="TechCrunch" to="/techcrunch">
        Techcrunch
      </NavLink> */}
      {/* <NavLink href="/" label="Home" to="/"></NavLink>
      <NavLink href="/about" label="About"></NavLink> */}
      {/* <MainNavbar/> */}

      {/* <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<h2>About</h2>} />
        <Route path="Login" element={<h2>Login</h2>} />
      </Routes> */}
      <ListOfArticles />
    </div>
  );
}

export default App;
