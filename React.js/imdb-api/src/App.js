import { Route, Routes, NavLink, Link, useLocation } from "react-router-dom";
import CardMovie from "./components/CardMovie/CardMovie";
import logo from "./logo.svg";
import { DoubleNavbar, NavbarNested } from "./NavBar-mantine/NavBarMantine";
import FullCast from "./Pages/FullCast/FullCast";
import HomePage from "./Pages/HomePage/HomePage";
import SingleMovieInfo from "./Pages/SingleMovieInfo/SingleMovieInfo";

import { Navbar, Text, Avatar, Dropdown, Input } from "@nextui-org/react";
import { AcmeLogo } from "./components/NavBar/AcmeLogo.js";
import { SearchIcon } from "./components/NavBar/SearchIcon.js";
import { useState } from "react";
import Series from "./Pages/Series/Series";

function App() {
  const [activeLink, setActiveLink] = useState("movies");
  const location = useLocation();
  return (
    <div className="App">
      <Navbar
        isBordered
        variant="sticky"
        style={{
          boxSizing: "border-box",
          justifyContent: "center",
          paddingLeft: "50px",
        }}
      >
        <AcmeLogo />
        <Navbar.Brand css={{ mr: "$15" }}>
          {/* <Text b color="inherit" css={{ mr: "$11", 'backgroundColor':'' }} hideIn="xs">
            IMDB
          </Text> */}
          <Navbar.Content
            css={{ mr: "auto", ml: "auto" }}
            hideIn="xs"
            variant="highlight"
            style={{ width: "100%", fontSize: "20px" }}
          >
            <Navbar.Link isActive={location.pathname === "/" && true} href="/">
              Movies
            </Navbar.Link>
            <Navbar.Link
              isActive={location.pathname === "/series" && true}
              href="/series"
            >
              Series
            </Navbar.Link>
          </Navbar.Content>
        </Navbar.Brand>
        {/* <Navbar.Content
          css={{
            "@xsMax": {
              w: "100%",
              jc: "space-between",
            },
          }}
        >
          <Navbar.Item
            css={{
              "@xsMax": {
                w: "100%",
                jc: "center",
              },
            }}
          >
            <Input
              clearable
              contentLeft={
                <SearchIcon fill="var(--nextui-colors-accents6)" size={16} />
              }
              contentLeftStyling={false}
              css={{
                w: "100%",
                "@xsMax": {
                  mw: "300px",
                },
                "& .nextui-input-content--left": {
                  h: "100%",
                  ml: "$4",
                  dflex: "center",
                },
              }}
              placeholder="Search..."
            />
          </Navbar.Item>
        </Navbar.Content> */}
      </Navbar>
      {/* <div className="Navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/fullcast">FullCast</NavLink>
      </div> */}
      <Routes>
        <Route path="/" element={<FullCast />} />

        <Route path="/:id" element={<SingleMovieInfo />} />
        <Route path="/series" element={<Series />} />
        <Route path="/series/:id" element={<SingleMovieInfo />} />
      </Routes>
    </div>
  );
}

export default App;
