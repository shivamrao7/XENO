import React, { useState } from 'react';
import axios from 'axios';

const CampaignForm = () => {
  const [name, setName] = useState('');
  const [rules, setRules] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const parsedRules = rules.split(',').map(rule => rule.trim());

    try {
      await axios.post('http://localhost:5000/api/campaigns', {
        name,
        rules: parsedRules,
      });
      alert('Campaign created successfully!');
      setName('');
      setRules('');
    } catch (error) {
      console.error('Error creating campaign:', error);
      alert('Failed to create campaign.');
    }
  };

  return (
    <div>
      <h2>Create Campaign</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Campaign Name:</label>
          <input value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Rules (comma separated):</label>
          <input value={rules} onChange={(e) => setRules(e.target.value)} required />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CampaignForm;
