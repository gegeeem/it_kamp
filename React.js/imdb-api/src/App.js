import { Route, Routes, NavLink, Link } from "react-router-dom";
import CardMovie from "./components/CardMovie/CardMovie";
import logo from "./logo.svg";
import { DoubleNavbar, NavbarNested } from "./NavBar-mantine/NavBarMantine";
import FullCast from "./Pages/FullCast/FullCast";
import HomePage from "./Pages/HomePage/HomePage";
import SingleMovieInfo from "./Pages/SingleMovieInfo/SingleMovieInfo";

function App() {
  return (
    <div className="App">
      <div className="Navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/fullcast">FullCast</NavLink>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/fullcast" element={<FullCast />} />
        <Route path="/fullcast/:id" element={<SingleMovieInfo />} />
      </Routes>
    </div>
  );
}

export default App;
