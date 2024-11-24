import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const SignUpContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #e0f7fa;
`;

const SignUpForm = styled.form`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const Input = styled.input`
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 0.5rem;
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

const SignUp = ({ setUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/signup`, { name, email, password });
      alert('SignUp successful');
      setUser({ name, email });
    } catch (error) {
      alert('SignUp failed');
    }
  };

  return (
    <SignUpContainer>
      <SignUpForm onSubmit={handleSubmit}>
        <h2>SignUp</h2>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <Button type="submit">SignUp</Button>
      </SignUpForm>
    </SignUpContainer>
  );
};

export default SignUp;