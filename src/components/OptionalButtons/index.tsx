import React from 'react';
import styled from 'styled-components';
import pauseImage from './pause.png';
import resumeImage from './resume.png';
import resetImage from './reset.png';
import presentImage from './present.png';

interface OptionalButtonsProps {
  setSeconds: React.Dispatch<React.SetStateAction<number>>;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  isPaused: boolean;
  setIsPaused: React.Dispatch<React.SetStateAction<boolean>>;
  isPraising: boolean;
  setIsPraising: React.Dispatch<React.SetStateAction<boolean>>;
}

const OptionalButtons: React.FC<OptionalButtonsProps> = ({
  setSeconds,
  setIsActive,
  isPaused,
  setIsPaused,
  isPraising,
  setIsPraising,
}) => {
  const handlePauseAndResume = () => {
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    setIsActive(false);
    setIsPaused(false);
    setSeconds(0);
  };

  const handlePraise = () => {
    setIsPraising(true);
  };

  return (
    <ButtonList>
      {!isPaused ? (
        <PauseButton onClick={handlePauseAndResume} />
      ) : (
        <ResumeButton onClick={handlePauseAndResume} />
      )}
      <ResetButton onClick={handleReset} />
      {!isPraising && <PraiseButton onClick={handlePraise} />}
    </ButtonList>
  );
};

const ButtonList = styled.div`
  width: 200px;
  z-index: 1000;
`;

const PauseButton = styled.button`
  background-image: url(${pauseImage});
  border: none;
  height: 200px;
  width: 200px;
`;

const ResumeButton = styled.button`
  background-image: url(${resumeImage});
  border: none;
  height: 200px;
  width: 200px;
`;

const ResetButton = styled.button`
  background-image: url(${resetImage});
  border: none;
  height: 200px;
  width: 200px;
`;

const PraiseButton = styled.button`
  background-image: url(${presentImage});
  border: none;
  height: 200px
  width: 200px;
`;

export default OptionalButtons;
