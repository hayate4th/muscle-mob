import React from 'react';
import styled from 'styled-components';
import TimerOption from '../TimerOption';

const OptionSelector: React.FC = () => {
  return (
    <OptionList>
      <TimerOption optionValue={1} />
      <TimerOption optionValue={10} />
      <TimerOption optionValue={15} />
      <TimerOption optionValue={30} />
      <TimerOption optionValue={60} />
    </OptionList>
  );
};

const OptionList = styled.div`
  width: 200px;

  & > button {
    margin-bottom: 10px;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

export default OptionSelector;
