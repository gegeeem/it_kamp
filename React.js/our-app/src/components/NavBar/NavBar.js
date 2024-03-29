import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="text-white">
      <div className="flex justify-between pr-10 gap-4 p-5 bg-blue-900">
        <NavLink to={"/"}>
          <h1 className="font-bold text-4xl">Online Shop</h1>
        </NavLink>
        {/* <div className="flex justify-end gap-6 font-bold pr-4 text-2xl">
          <NavLink to={"/products"}>
            <h2>Products</h2>
          </NavLink>
          <NavLink to={"/about"}>
            <h2> About us</h2>
          </NavLink>
          <NavLink to={"/cart"}>
            <h2>Go to cart</h2>
          </NavLink>
        </div> */}
      </div>
    </div>
  );
};

export default NavBar;
