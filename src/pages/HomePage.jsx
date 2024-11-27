import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data/data.json';

const HomePage = () => {
  const { article } = data;

  return (
    <div>
      <h1>Store</h1>
      <Link to="/product" state={{ product: article }}>
        Go to Product Page
      </Link>
    </div>
  );
};

export default HomePage;
