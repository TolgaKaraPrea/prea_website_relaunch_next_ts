import { create } from '@storybook/theming';
import * as NextImage from 'next/image';
import { addParameters, addDecorator} from '@storybook/react';
import { withI18n } from "storybook-addon-i18n";
import { NextIntlProvider } from 'next-intl';
import logoDark from './prea-logo-grey.svg';
// import messages from '../locales/en/en.json'
// import enLocaleData from "react-intl/locale-data/en";
// import esLocaleData from "react-intl/locale-data/es";


// import i18n from './i18n';

// addDecorator(storyFn => (
//   <NextIntlProvider i18n={i18n}>{storyFn()}</NextIntlProvider>
// ));


export const locales = ["en", "de"];

export const messages = locales.reduce((acc, locale) => {
  return {
    ...acc,
    [locale]: require(`../locales/${locale}/${locale}.json`),
  };
}, {});

const getMessages = (locale) => messages[locale];

// setIntlConfig({
//   // locales,
//   defaultLocale: "en",
//   // getMessages,
// });

// addParameters({
//   i18n: {
//     provider: NextIntlProvider,
//     providerProps: {
//       messages
//     },
//     supportedLocales: ["en", "de"],
//     providerLocaleKey: "locale",
//     defaultLocale: 'en',


//   }
// });

addDecorator(withI18n);
// addLocaleData(enLocaleData);
// addLocaleData(esLocaleData);

const lightTheme = create({
  base: 'light',
  appBg: '#fff',
  appContentBg: '#fff',
  brandTitle: 'PREA Storybook',
  colorPrimary: 'hotpink',
  colorSecondary: 'deepskyblue',
  // brandImage: logoDark,

  // Typography
  fontBase: '"Inter", sans-serif',
  fontCode: 'monospace'

  // brandUrl: '',
});

const darkTheme = create({
  base: 'dark',
  appBg: '#3f3f3f',
  appContentBg: '#000',
  brandTitle: 'PREA Storybook',
  colorPrimary: 'hotpink',
  colorSecondary: 'deepskyblue',
  // brandImage: logoDark,
  // Typography
  fontBase: '"Inter", sans-serif',
  fontCode: 'monospace'
  // brandUrl: '',
});

const testTheme = create({
  base: 'red',
  appBg: '#red',
  appContentBg: '#red',
  brandTitle: 'PREA Storybook red',
  colorPrimary: 'hotpink',
  colorSecondary: 'deepskyblue',
  // brandImage: logoDark,
  // Typography
  fontBase: '"Inter", sans-serif',
  fontCode: 'monospace'
  // brandUrl: '',
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  darkMode: {
    dark: darkTheme,
    light: lightTheme,
    test: testTheme,
    stylePreview: true
  }
};

import '../src/utils/styles/global';

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: props => (
    <OriginalNextImage
      {...props}
      unoptimized
      blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAbEAADAAMBAQAAAAAAAAAAAAABAgMABAURUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECEf/aAAwDAQACEQMRAD8Anz9voy1dCI2mectSE5ioFCqia+KCwJ8HzGMZPqJb1oPEf//Z"
    />
  )
});
