import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className={"navbar"}>
      <NavLink to="/" exact>Home</NavLink>
      &nbsp;<NavLink to="/movies" exact>Movies</NavLink>
      &nbsp; <NavLink to="/directors" exact>Directors</NavLink>
      &nbsp;<NavLink to="/actors" exact>Actors</NavLink>
    </div>
  );
};

export default NavBar;
