import enCatalog from './locales/en/messages';
import hrCatalog from './locales/hr/messages';
import { setupI18n } from '@lingui/core';

export const language = 'hr';

const catalogs = {
    en: enCatalog,
    hr: hrCatalog
};

export const i18n = setupI18n({ language, catalogs });
