import React from 'react';
import Results from '../components/Results';

const ResultsPage = () => {
  const userId = 1; // Replace with dynamic user ID
  return (
    <div>
      <h1>Your Results</h1>
      <Results userId={userId} />
    </div>
  );
};

export default ResultsPage;