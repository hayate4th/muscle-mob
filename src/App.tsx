import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MuscleGuy from './components/MuscleGuy';
import OptionSelector from './components/OptionSelector';
import Timer from './components/Timer';
import OptionalButtons from './components/OptionalButtons';
import Audience from './components/Audience';

const App: React.FC = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isPraising, setIsPraising] = useState(false);

  useEffect(() => {
    let interval: number | undefined;
    if (!isPaused && isActive && seconds > 0) {
      if (seconds > 0) {
        interval = setInterval(() => {
          setSeconds(seconds - 1);
        }, 1000);
      } else {
        clearInterval(interval);
      }
    }
    return () => clearInterval(interval);
  }, [isPaused, isActive, seconds]);

  // TODO: このやり方あってる？
  useEffect(() => {
    if (seconds <= 0) {
      setIsActive(false);
    }
  }, [seconds]);

  useEffect(() => {
    let interval: number | undefined;
    if (isPraising) {
      interval = setInterval(() => {
        setIsPraising(false);
      }, 1500);
    }
    return () => clearInterval(interval);
  }, [isPraising]);

  return (
    <>
      <TimerWrapper>
        <Timer seconds={seconds} />
      </TimerWrapper>
      <MuscleSelector>
        <MuscleGuy isInverted />
        {!isActive && (
          <OptionSelector setSeconds={setSeconds} setIsActive={setIsActive} />
        )}
        {isActive && (
          <OptionalButtons
            setSeconds={setSeconds}
            setIsActive={setIsActive}
            isPaused={isPaused}
            setIsPaused={setIsPaused}
            isPraising={isPraising}
            setIsPraising={setIsPraising}
          />
        )}
        <MuscleGuy />
      </MuscleSelector>
      {isPraising && <Audience />}
    </>
  );
};

const MuscleSelector = styled.div`
  display: flex;
  margin: 0 auto;
  width: 1000px;
`;

const TimerWrapper = styled.div`
  margin: 0 auto;
  width: 1000px;
`;

export default App;
