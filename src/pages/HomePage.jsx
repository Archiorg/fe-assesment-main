import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div>
    <h1>Store</h1>
    <Link to="/product">Go to Product Page</Link>
  </div>
);

export default HomePage;