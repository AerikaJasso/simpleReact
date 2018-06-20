import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <ul>
      <NavLink to="/" activeClassName="is-active" exact={true}>
        <li>Dashboard</li>
      </NavLink>
      <NavLink to="/create" activeClassName="is-active">
        <li>Create Expense</li>
      </NavLink>
      
    </ul>
  </header>
);

export default Header;