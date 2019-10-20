import React from 'react';
import Header from './components/Header';
import MuscleGuy from './components/MuscleGuy';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <MuscleGuy />
      <MuscleGuy />
    </div>
  );
};

export default App;
