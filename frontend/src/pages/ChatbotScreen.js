import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: auto;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ChatWindow = styled.div`
  height: 400px;
  overflow-y: auto;
  border: 1px solid #ccc;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const Message = styled.div`
  margin-bottom: 1rem;
  padding: 0.5rem;
  background: ${({ isUser }) => (isUser ? '#e0f7fa' : '#f1f1f1')};
  border-radius: 8px;
  text-align: ${({ isUser }) => (isUser ? 'right' : 'left')};
`;

const Input = styled.input`
  width: calc(100% - 2rem);
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 1rem;
`;

const Button = styled.button`
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

const ChatbotScreen = ({ scores }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (input.trim() === '') return;

    const userMessage = { text: input, isUser: true };
    setMessages([...messages, userMessage]);

    const response = await axios.post(`${process.env.REACT_APP_API_URL}/chatbot`, { scores });
    const botMessage = { text: response.data.response, isUser: false };
    setMessages([...messages, userMessage, botMessage]);

    setInput('');
  };

  return (
    <Container>
      <h1>Chat with µmy</h1>
      <ChatWindow>
        {messages.map((msg, index) => (
          <Message key={index} isUser={msg.isUser}>
            {msg.text}
          </Message>
        ))}
      </ChatWindow>
      <div>
        <Input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <Button onClick={handleSend}>Send</Button>
      </div>
    </Container>
  );
};

export default ChatbotScreen;