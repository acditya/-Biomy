import React from 'react';
import styled from 'styled-components';
import Chatbot from '../components/Chatbot';

const coFounders = [
  { name: 'Aditya Chatterjee', image: 'pictures/aditya.jpg' },
  { name: 'Aya Albrembaly', image: 'pictures/aya.jpg' },
  { name: 'Mariam Hejou', image: 'mariam.jpg' },
  { name: 'Mohammed Alaa', image: 'pictures/alaa.jpg' },
  { name: 'Muath Tuffaha', image: 'pictures/muath.jpg' },
  { name: 'Sami Nakaweh', image: 'pictures/sami.jpg' },
];

const Container = styled.div`
  padding: 2rem;
  animation: fadeIn 1s ease-in-out;
`;

const Section = styled.section`
  margin: 2rem 0;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: slideIn 1s ease-in-out;

  &:nth-child(even) {
    animation: slideInReverse 1s ease-in-out;
  }
`;

const CoFoundersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const FounderCard = styled.div`
  margin: 10px;
  text-align: center;
  animation: fadeIn 1s ease-in-out;
`;

const FounderImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const Home = () => (
  <Container>
    <h1>Welcome to µBiomy</h1>
    <Section>
      <h2>Our Mission</h2>
      <p>At µBiomy, our mission is to revolutionize the way we understand and interact with the µbiome. We aim to provide cutting-edge solutions that enhance health and well-being through µbiome research and technology.</p>
    </Section>
    <Section>
      <h2>About Our Product</h2>
      <p>Our product leverages advanced microbiome analysis to offer personalized health insights and recommendations. By understanding the unique composition of your µbiome, we help you make informed decisions about your diet, lifestyle, and overall health.</p>
    </Section>
    <Section>
      <h2>Meet Our Co-Founders</h2>
      <CoFoundersContainer>
        {coFounders.map((founder, index) => (
          <FounderCard key={index}>
            <FounderImage src={founder.image} alt={founder.name} />
            <h3>{founder.name}</h3>
          </FounderCard>
        ))}
      </CoFoundersContainer>
    </Section>
    {/* <Chatbot /> */}
  </Container>
);

export default Home;