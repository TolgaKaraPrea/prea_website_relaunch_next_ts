import React, { useState } from 'react';
import { Router, useRouter } from 'next/router';
import { NextIntlProvider } from 'next-intl';
import enMessages from '../../locales/en/en.json';
import deMessages from '../../locales/de/de.json';
import { ContextProvider } from 'context/CommonContext';
import data from '../content/aboutus/workat/jobs/jobs.json';
import { useCurrentPage, useDefaultLocale, useFilterJobs } from 'hooks';
import 'react-multi-carousel/lib/styles.css';
import 'antd/dist/antd.css';
import 'pathseg';
import { PREALoader } from 'components/atoms';

export function reportWebVitals(metric) {
  switch (metric.name) {
    case 'FCP':
      // console.log('🏃 FCP ' + JSON.stringify(metric));
      break;
    case 'LCP':
      // console.log('🏃 LCP ' + JSON.stringify(metric));
      break;
    case 'CLS':
      // console.log('🏃 CLS ' + JSON.stringify(metric));
      break;
    case 'FID':
      // console.log('🏃 FID ' + JSON.stringify(metric));
      break;
    case 'TTFB':

      break;
    case 'Next.js-hydration':
      break;
    case 'Next.js-route-change-to-render':
      break;
    case 'Next.js-render':
      break;
  }
}

function MyApp({ Component, pageProps, localMessage }) {
  const { locale } = useRouter();
  useDefaultLocale();
  useCurrentPage();
  useFilterJobs(data);
  const [isLoading, setIsLoading] = useState(false);

  Router.events.on('routeChangeStart', url => setIsLoading(true));
  Router.events.on('routeChangeComplete', () => setIsLoading(false));
  Router.events.on('routeChangeError', () => setIsLoading(false));

  return (
    <ContextProvider>
      <NextIntlProvider locale={locale} messages={localMessage}>
        {isLoading ? <PREALoader position={'centered'} /> : <Component {...pageProps} />}
      </NextIntlProvider>
    </ContextProvider>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  const localMessage = ctx && ctx.locale === 'de' ? deMessages : enMessages;
  return { localMessage };
};
export default MyApp;