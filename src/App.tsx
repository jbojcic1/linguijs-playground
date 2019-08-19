import React from 'react';
import './App.css';
import { Trans } from '@lingui/macro';

const App: React.FC = () => {
  const name = 'Bob';
  return (
    <div>
      <div><Trans>Good morning, {name}</Trans></div>
    </div>
  );
};

export default App;
