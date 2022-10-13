import i18n from 'i18next';
import translation from './ru/translation.json';
import { initReactI18next } from 'react-i18next';

export const resources = {
  ru: {
    translation,
  },
};

i18n.use(initReactI18next).init({
  lng: 'ru',
  debug: process.env.NODE_ENV !== 'production',
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  resources,
});
