import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: auto;
`;

const Section = styled.section`
  display: flex;
  justify-content: space-around;
  margin: 2rem 0;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: fadeIn 1s ease-in-out;
`;

const getColor = (score) => {
  if (score >= 50) {
    const redIntensity = Math.min(255, (score - 50) * 5.1);
    return `rgba(255, ${255 - redIntensity}, ${255 - redIntensity}, 0.1)`;
  } else {
    const greenIntensity = Math.min(255, score * 5.1);
    return `rgba(${255 - greenIntensity}, 255, ${255 - greenIntensity}, 0.1)`;
  }
};

const getBorderColor = (score) => {
  if (score >= 50) {
    const redIntensity = Math.min(255, (score - 50) * 5.1);
    return `rgba(255, ${255 - redIntensity}, ${255 - redIntensity}, 1)`;
  } else {
    const greenIntensity = Math.min(255, score * 5.1);
    return `rgba(${255 - greenIntensity}, 255, ${255 - greenIntensity}, 1)`;
  }
};

const RiskFactor = styled.div`
  flex: 1;
  margin: 0 1rem;
  padding: 2rem;
  border-radius: 8px;
  background: ${({ score }) => getColor(score)};
  border: 2px solid ${({ score }) => getBorderColor(score)};
  transition: background 0.3s ease-in-out, border 0.3s ease-in-out;
  text-align: center;
`;

const RiskTitle = styled.h2`
  margin-bottom: 1rem;
`;

const RiskScore = styled.p`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const RiskDescription = styled.p`
  line-height: 1.6;
`;

const ResultsPage = ({ setScores }) => {
  const [results, setResults] = useState(null);

  useEffect(() => {
    const fetchResults = async () => {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/results/1`); // Replace with dynamic user ID
      setResults(response.data);
      setScores(response.data);
    };
    fetchResults();
  }, [setScores]);

  return (
    <Container>
      <h1>Your Health Risk Factors</h1>
      {results ? (
        <Section>
          <RiskFactor score={results.neurodegenerative_score}>
            <RiskTitle>Neurodegenerative Diseases</RiskTitle>
            <RiskScore>{results.neurodegenerative_score}%</RiskScore>
            <RiskDescription>
              A higher score indicates a higher risk of neurodegenerative diseases. It's important to maintain a healthy lifestyle and consult with healthcare professionals for personalized advice.
            </RiskDescription>
          </RiskFactor>
          <RiskFactor score={results.diabetes_score}>
            <RiskTitle>Diabetes</RiskTitle>
            <RiskScore>{results.diabetes_score}%</RiskScore>
            <RiskDescription>
              A higher score indicates a higher risk of diabetes. Monitoring your diet, staying active, and regular check-ups can help manage and reduce your risk.
            </RiskDescription>
          </RiskFactor>
          <RiskFactor score={results.obesity_score}>
            <RiskTitle>Obesity</RiskTitle>
            <RiskScore>{results.obesity_score}%</RiskScore>
            <RiskDescription>
              A higher score indicates a higher risk of obesity. Maintaining a balanced diet and regular physical activity are key to managing your weight and overall health.
            </RiskDescription>
          </RiskFactor>
        </Section>
      ) : (
        <p>Loading...</p>
      )}
    </Container>
  );
};

export default ResultsPage;