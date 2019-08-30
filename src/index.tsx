import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { i18n, language } from './i18n';
import { I18nProvider } from '@lingui/react';
import App from './App';

ReactDOM.render(
    <I18nProvider i18n={i18n} language={language}>
        <App />
    </I18nProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
