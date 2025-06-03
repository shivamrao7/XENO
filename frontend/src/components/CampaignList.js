import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CampaignList() {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    async function fetchCampaigns() {
      const res = await axios.get('http://localhost:5000/api/campaigns');
      setCampaigns(res.data);
    }
    fetchCampaigns();
  }, []);

  return (
    <div>
      <h2>Past Campaigns</h2>
      <ul>
        {campaigns.map(c => (
          <li key={c._id}>
            <strong>{c.name}</strong> — Audience: {c.audienceSize}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CampaignList;
