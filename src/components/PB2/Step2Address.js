import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Step2Address = ({ nextStep, prevStep, handleChange, formData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.address && formData.city && formData.zip) nextStep();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" name="address" value={formData.address} onChange={handleChange} required />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" name="city" value={formData.city} onChange={handleChange} required />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Zip Code</Form.Label>
        <Form.Control type="text" name="zip" value={formData.zip} onChange={handleChange} required />
      </Form.Group>

      <Button variant="secondary" onClick={prevStep} className="me-2">Back</Button>
      <Button type="submit" variant="primary">Next</Button>
    </Form>
  );
};

export default Step2Address;
