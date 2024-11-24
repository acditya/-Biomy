import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Results = ({ userId }) => {
  const [results, setResults] = useState(null);

  useEffect(() => {
    const fetchResults = async () => {
      const response = await axios.get(`/results/${userId}`);
      setResults(response.data.results);
    };
    fetchResults();
  }, [userId]);

  return (
    <div>
      {results ? <pre>{results}</pre> : <p>Loading...</p>}
    </div>
  );
};

export default Results;