import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { I18nProvider } from '@lingui/react';
import enCatalog from './locales/en/messages';
import hrCatalog from './locales/hr/messages';
import { setupI18n } from '@lingui/core';

const language = 'hr';
const catalogs = {
    en: enCatalog,
    hr: hrCatalog
};

export const i18n = setupI18n({ language, catalogs });

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
