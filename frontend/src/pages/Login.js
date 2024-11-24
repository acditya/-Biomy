import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #e0f7fa;
`;

const LoginForm = styled.form`
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

const Login = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted');
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/login`, { email, password });
      console.log('Login successful');
      alert('Login successful');
      setUser({ email, name: response.data.name });
    } catch (error) {
      console.log('Login failed');
      alert('This is so sad, can we hit 50 likes?');
    }
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        <h2>Login</h2>
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
        <Button type="submit">Login</Button>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;