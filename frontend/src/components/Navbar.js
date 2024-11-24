import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background: #333;
  color: #fff;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
`;

const Navbar = () => (
  <Nav>
    <div>
      <Link to="/">Home</Link>
      <Link to="/order">Order Kit</Link>
      <Link to="/results">View Results</Link>
    </div>
  </Nav>
);

export default Navbar;