import React from 'react';
import styled from 'styled-components';
import timerBackgroundImage from './timerBackground.png';

interface TimerProps {
  seconds: number;
}

const Timer: React.FC<TimerProps> = ({ seconds }) => {
  const secondsToText = (sec: number) => {
    const date = new Date(0);
    date.setSeconds(sec);
    return date.toISOString().substr(14, 5);
  };

  return (
    <TimerBackground>
      <TimerText>{secondsToText(seconds)}</TimerText>
    </TimerBackground>
  );
};

const TimerBackground = styled.div`
  background-image: url(${timerBackgroundImage});
  height: 157px;
  margin: 0 auto;
  padding-top: 55px;
  width: 400px;
`;

const TimerText = styled.span`
  color: white;
  display: block;
  font-weight: bold;
  font-size: 100px;
  margin-right: 40px;
  text-align: right;
`;

export default Timer;
