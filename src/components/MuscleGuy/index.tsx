import React from 'react';
import muscleImage from './muscle.png';

interface MuscleGuyProps {
  isInverted?: boolean;
}

const MuscleGuy: React.FC<MuscleGuyProps> = ({ isInverted }) => {
  return (
    <img
      src={muscleImage}
      alt="Body Builder"
      style={isInverted ? { transform: 'scale(-1, 1)' } : {}}
      width={400}
      height={612}
    />
  );
};

export default MuscleGuy;
