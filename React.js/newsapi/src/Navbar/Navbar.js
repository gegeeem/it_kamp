import { Link, useLocation } from "react-router-dom";

export default function Demo() {
  const location = useLocation();
  return (
    <>
      <NavLink
        label="Home"
        component={Link}
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
