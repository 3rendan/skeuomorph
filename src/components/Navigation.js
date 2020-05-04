import React from 'react';
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

export default function Navigation () {
  return (
    <nav className="navbar navbar-dark fixed-bottom">
      <div className="navbar-header navbar-expand-sm">
        <ul className="nav nav-pills">
          <li>
          <NavLink to="/items" activeStyle={{'color': 'lightgray'}}>Items</NavLink>
          </li>
          <li>
            <NavLink to="/new-items" activeStyle={{'color': 'lightgray'}}>New Item</NavLink>
          </li>
          <li>
            <NavLink to="/about" activeStyle={{'color': 'lightgray'}}>About</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
