import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h1>Mini CRM Dashboard</h1>
      <ul>
        <li><Link to="/create">Create Campaign</Link></li>
        <li><Link to="/list">View Campaigns</Link></li>
        <li><Link to="/ai">AI Assistant</Link></li>
      </ul>
    </div>
  );
};

export default Dashboard;
