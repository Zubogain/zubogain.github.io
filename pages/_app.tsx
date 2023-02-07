import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';

import { withRouter } from "next/router";
import Head from "next/head";

import { appWithTranslation } from 'next-i18next';

import AppMain from "../src/App";
import "../public/scss/style.scss";

import { store } from "../src/store";

const MyApp = ({ Component, pageProps, router }: AppProps) => {

  return (
    <>
      <Head>
        <meta name="google-site-verification" content="Zu6yw4P7jufNaVdIAGj9Dqg58TmKKvWgMWHzlE-RNM8" />
        <meta httpEquiv="Content-type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Provider store={store}>
        <AppMain>
          <Component {...pageProps} lang={router.query.lang} />
        </AppMain>
      </Provider>
    </>
  );
};

export default withRouter(appWithTranslation(MyApp));

