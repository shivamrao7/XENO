import React, { useState } from 'react';
import axios from 'axios';
//import axios from 'axios';

function AIAssistant({ onSuggestions }) {
  const [objective, setObjective] = useState('');
  const [loading, setLoading] = useState(false);

  const generateMessages = async () => {
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:5000/api/ai/suggest-messages', {
        objective,
      });
      onSuggestions(res.data.suggestions);
    } catch (error) {
      console.error('AI error:', error);
    }
    setLoading(false);
  };

  return (
    <div>
      <h3>AI Message Suggestions</h3>
      <input
        type="text"
        placeholder="Campaign Objective"
        value={objective}
        onChange={(e) => setObjective(e.target.value)}
      />
      <button onClick={generateMessages} disabled={loading}>
        {loading ? 'Generating...' : 'Get Suggestions'}
      </button>
    </div>
  );
}

export default AIAssistant;
