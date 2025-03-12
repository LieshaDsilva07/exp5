import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const ProgressBarComponent = ({ step }) => {
  const progress = (step / 3) * 100;

  return (
    <div className="mb-4">
      <ProgressBar now={progress} label={`${progress}%`} />
    </div>
  );
};

export default ProgressBarComponent;
