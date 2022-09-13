import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-red-600">
      <div>
        <nav>
          <NavLink to="/" exact>
            Alex
          </NavLink>
          <NavLink to="/post" exact>
            Blog Posts
          </NavLink>
          <NavLink to="/project" exact>
            Project
          </NavLink>
          <NavLink to="/about" exact>
            About me
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
