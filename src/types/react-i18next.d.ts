import { resources } from '../i18n/config';

// react-i18next versions lower than 11.11.0
declare module 'react-i18next' {
  type DefaultResources = typeof resources['ru'];
  interface Resources extends DefaultResources {}
}
