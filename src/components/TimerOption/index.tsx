import React from 'react';
import styled from 'styled-components';
import meatImage from './meat.png';

interface TimerOptionProps {
  optionValue: number;
  setSeconds: React.Dispatch<React.SetStateAction<number>>;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const TimerOption: React.FC<TimerOptionProps> = ({
  optionValue,
  setSeconds,
  setIsActive,
}) => {
  const handleOnClick = () => {
    setSeconds(optionValue * 60);
    setIsActive(true);
  };

  return (
    <OptionButton onClick={handleOnClick}>
      <OptionText>{optionValue}</OptionText>
    </OptionButton>
  );
};

const OptionButton = styled.button`
  background-image: url(${meatImage});
  border: none;
  width: 200px;
  height: 103px;
`;

const OptionText = styled.span`
  color: white;
  display: block;
  font-weight: bold;
  font-size: 50px;
  margin: 0 auto;
`;

export default TimerOption;
