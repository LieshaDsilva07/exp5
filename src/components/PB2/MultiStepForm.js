import React, { useState } from 'react';
import ProgressBarComponent from './ProgressBarComponent';
import Step1PersonalInfo from './Step1PersonalInfo';
import Step2Address from './Step2Address';
import Step3ReviewSubmit from './Step3ReviewSubmit';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zip: ''
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="container mt-4">
      <ProgressBarComponent step={step} />
      {step === 1 && <Step1PersonalInfo nextStep={nextStep} handleChange={handleChange} formData={formData} />}
      {step === 2 && <Step2Address nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} formData={formData} />}
      {step === 3 && <Step3ReviewSubmit prevStep={prevStep} formData={formData} />}
    </div>
  );
};

export default MultiStepForm;
