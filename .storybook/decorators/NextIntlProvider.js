import React from 'react';
import { IntlProvider } from 'react-intl';
import { NextIntlProvider } from 'next-intl';
import { locales, messages } from '../preview';

const intlConfig = {
  language: 'en-us',
  languages: locales,
  messages: messages,
  originalPath: '/',
  redirect: true,
  routed: true
};

const NextProvider = storyFn => (
  <IntlProvider locale={intlConfig.language} messages={messages}>
    {storyFn()}
  </IntlProvider>
);

export default NextProvider;
