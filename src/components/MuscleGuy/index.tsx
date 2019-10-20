import React from 'react';
import muscleImage from './muscle.png';

const MuscleGuy: React.FC = () => {
  return (
    <header>
      <img src={muscleImage} alt="Body Builder" />
    </header>
  );
};

export default MuscleGuy;
