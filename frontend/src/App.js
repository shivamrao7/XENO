import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import CampaignForm from './components/CampaignForm';
import CampaignList from './components/CampaignList';
import AIAssistant from './components/AIAssistant';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/create" element={<CampaignForm />} />
        <Route path="/list" element={<CampaignList />} />
        <Route path="/ai" element={<AIAssistant />} />
      </Routes>
    </Router>
  );
}

export default App;
