import { StrictMode } from 'react'
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Card from '../components/components1.js';
import Button from '../components/components2.js';
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


const HomePage = () => {
  return (
    <div>
      <h1>Welcome to My Responsive Webpage</h1>
      <Card title="Card 1" content="This is the content of card 1." />
      <Card title="Card 2" content="This is the content of card 2." />
      <Card title="Card 3" content="This is the content of card 3." />
      <Button label="Click Me" onClick={() => alert('Button Clicked!')} />
    </div>
  );
};

export default HomePage;
