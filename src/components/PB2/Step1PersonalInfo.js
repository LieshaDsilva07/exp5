import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Step1PersonalInfo = ({ nextStep, handleChange, formData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone) nextStep();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="text" name="phone" value={formData.phone} onChange={handleChange} required />
      </Form.Group>

      <Button type="submit" variant="primary">Next</Button>
    </Form>
  );
};

export default Step1PersonalInfo;
