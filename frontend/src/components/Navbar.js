import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaUserCircle } from 'react-icons/fa';

const Nav = styled.nav`
  background: #333;
  color: #fff;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
`;

const UserSection = styled.div`
  display: flex;
  align-items: center;
`;

const UserName = styled.span`
  font-weight: bold;
  margin-left: 0.5rem;
`;

const LogoutButton = styled.button`
  margin-left: 1rem;
  padding: 0.5rem 1rem;
  background: #009688;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #00796b;
  }
`;

const Navbar = ({ user, handleLogout }) => (
  <Nav>
    <NavLinks>
      <Link to="/">Home</Link>
      <Link to="/order">Order Kit</Link>
      <Link to="/results">View Results</Link>
      <Link to="/chatbot">µmy Chat</Link>
    </NavLinks>
    {user && (
      <UserSection>
        <FaUserCircle size={24} />
        <UserName>Welcome, {user.name || user.email}</UserName>
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      </UserSection>
    )}
  </Nav>
);

export default Navbar;