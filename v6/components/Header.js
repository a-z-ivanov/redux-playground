import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

const Header = ({ logout }) => (
  <header>
    <h1>Scrabble</h1>
    <NavLink to="/" exact={true}>Login</NavLink>
    <NavLink to="/board" >Board</NavLink>
    <button onClick={() => logout()}>Logout</button>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);