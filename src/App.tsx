import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MuscleGuy from './components/MuscleGuy';
import OptionSelector from './components/OptionSelector';
import Timer from './components/Timer';

const App: React.FC = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: number | undefined;
    if (isActive && seconds > 0) {
      if (seconds > 0) {
        interval = setInterval(() => {
          setSeconds(seconds - 1);
        }, 1000);
      } else {
        clearInterval(interval);
      }
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  useEffect(() => {
    if (seconds <= 0) {
      setIsActive(false);
    }
  }, [seconds]);

  return (
    <>
      <Timer seconds={seconds} />
      <MuscleSelector>
        <MuscleGuy isInverted />
        {!isActive && (
          <OptionSelector setSeconds={setSeconds} setIsActive={setIsActive} />
        )}
        {isActive && <div style={{ width: '200px' }} />}
        <MuscleGuy />
      </MuscleSelector>
    </>
  );
};

const MuscleSelector = styled.div`
  display: flex;
  margin: 0 auto;
  width: 1000px;
`;

export default App;
