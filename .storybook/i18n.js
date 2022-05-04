import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { IntlProvider } from 'use-intl';
// import { IntlProvider } from 'react-intl';

i18n.use(IntlProvider).init({
  fallbackLng: 'en',
  debug: true
});

export default i18n