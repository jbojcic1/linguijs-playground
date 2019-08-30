import React, { useEffect, useState } from 'react';
import './App.css';
import { date, t, Trans } from '@lingui/macro';
import { i18n } from './i18n';

type User = { first_name: string };

const today = new Date();
const msg = i18n._(t`Today is ${date(today)}`);

const App: React.FC = () => {
  const shouldShow = true;
  const [person1, setPerson1] = useState<User>({ first_name: 'Bob' });
  const [person2, setPerson2] = useState<User | undefined>(undefined);
  const [profile, setProfile] = useState<{ given_name: string } | undefined>(undefined);

  useEffect(() => {
    setTimeout(() => {
      setPerson2({ first_name: 'Tom' });
      setProfile({ given_name: 'Joe' });
    }, 3000);
  }, []);

  return (
    <div>
      <div>{msg}</div>
      <div><Trans>Good morning, {person1.first_name}</Trans></div>
      <div><Trans>Good night, { !!person2 ? person2.first_name : '' }</Trans></div>
      { shouldShow && (
        <div>
          <Trans>Hello, {!!profile ? profile.given_name : ''}</Trans>
        </div>
      )}
    </div>
  );
};

export default App;
