import { Link, useLocation } from "react-router-dom";
import HomePage from "../components/HomePage/HomePage";
import { NavLink } from "@mantine/core";

export default function MainNavbar() {
  const location = useLocation("/");
  return (
    <>
      <NavLink
        label="Home"
        component={<HomePage />}
        to="/"
        active={location.pathname === "/"}
      />
      <NavLink
        label="About"
        component={Link}
        to="/about"
        active={location.pathname === "/about"}
      />
    </>
  );
}
