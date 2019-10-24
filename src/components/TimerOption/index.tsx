import React from 'react';
import styled from 'styled-components';
import meatImage from './meat.png';

interface TimerOptionProps {
  optionValue: number;
}

const TimerOption: React.FC<TimerOptionProps> = ({ optionValue }) => {
  return (
    <OptionButton>
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
