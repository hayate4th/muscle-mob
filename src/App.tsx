import React from 'react';
import styled from 'styled-components';
import MuscleGuy from './components/MuscleGuy';
import OptionSelector from './components/OptionSelector';

const App: React.FC = () => {
  return (
    <FlexWrapper>
      <MuscleGuy isInverted />
      <OptionSelector />
      <MuscleGuy />
    </FlexWrapper>
  );
};

const FlexWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  width: 1000px;
`;

export default App;
