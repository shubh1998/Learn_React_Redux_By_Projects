import React from 'react'
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
      <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Contact Book
          </Link>
          <div>
            <NavLink style={{"marginRight": 20}} className="btn btn-light" activeClassName="btn btn-dark" to="/"exact={true}>
                Home
            </NavLink>
            <NavLink className="btn btn-light ml-auto mr-auto" activeClassName="btn btn-dark ml-auto" to="/add-contact">
              Create Contact
            </NavLink>
          </div>
        </div>
      </nav>
    );
}

export default Navbar
