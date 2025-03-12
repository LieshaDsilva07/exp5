import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Step3ReviewSubmit = ({ prevStep, formData }) => {
  const handleSubmit = () => {
    alert('Form submitted successfully!');
  };

  return (
    <div>
      <Card className="mb-3">
        <Card.Body>
          <h4>Review Your Details</h4>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Phone:</strong> {formData.phone}</p>
          <p><strong>Address:</strong> {formData.address}</p>
          <p><strong>City:</strong> {formData.city}</p>
          <p><strong>Zip Code:</strong> {formData.zip}</p>
        </Card.Body>
      </Card>

      <Button variant="secondary" onClick={prevStep} className="me-2">Back</Button>
      <Button variant="success" onClick={handleSubmit}>Submit</Button>
    </div>
  );
};

export default Step3ReviewSubmit;
