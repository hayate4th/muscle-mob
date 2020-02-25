import React from 'react';
import styled from 'styled-components';
import TimerOption from '../TimerOption';

interface OptionSelectorProps {
  setSeconds: React.Dispatch<React.SetStateAction<number>>;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const OptionSelector: React.FC<OptionSelectorProps> = ({
  setSeconds,
  setIsActive,
}) => {
  return (
    <OptionList>
      <TimerOption
        optionValue={1}
        setSeconds={setSeconds}
        setIsActive={setIsActive}
      />
      <TimerOption
        optionValue={10}
        setSeconds={setSeconds}
        setIsActive={setIsActive}
      />
      <TimerOption
        optionValue={15}
        setSeconds={setSeconds}
        setIsActive={setIsActive}
      />
      <TimerOption
        optionValue={30}
        setSeconds={setSeconds}
        setIsActive={setIsActive}
      />
      <TimerOption
        optionValue={50}
        setSeconds={setSeconds}
        setIsActive={setIsActive}
      />
    </OptionList>
  );
};

const OptionList = styled.div`
  width: 200px;
  z-index: 1000;

  & > button {
    margin-bottom: 10px;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

export default OptionSelector;
