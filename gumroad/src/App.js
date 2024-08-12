import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Actions from './pages/Actions';
import Email from './pages/Email';
import Discount from './pages/Discount';
import Workflow from './pages/Workflow';

function App() {
  return (
    <Router>
      <div className="App bg-grey">
      <Layout >
        <Routes>
          <Route path="/" element={<Actions />} />
          <Route path="/email" element={<Email />} />
          <Route path="/discount" element={<Discount />} />
          <Route path="/workflow" element={<Workflow />} />
        </Routes>
      </Layout>
      </div>
    </Router>
  );
}

export default App;
