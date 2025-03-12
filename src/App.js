import React, { useState } from 'react';
import ContactForm from './components/PB1/ContactForm';
import MultiStepForm from './components/PB2/MultiStepForm';
import Dashboard from './components/PB3/Dashboard';
import { Button } from 'react-bootstrap';

function App() {
  const [showForm, setShowForm] = useState('contact'); 

  return (
    <div className="App container mt-4">
      <div className="mb-3">
        <Button variant="primary" onClick={() => setShowForm('contact')} className="me-2">Contact Form</Button>
        <Button variant="secondary" onClick={() => setShowForm('multi-step')} className="me-2">Multi-Step Form</Button>
        <Button variant="success" onClick={() => setShowForm('dashboard')}>Dashboard</Button>
      </div>

      {showForm === 'contact' && <ContactForm />}
      {showForm === 'multi-step' && <MultiStepForm />}
      {showForm === 'dashboard' && <Dashboard />}
    </div>
  );
}

export default App;
