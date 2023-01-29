import { withRouter } from "next/router";
import Head from "next/head";

import { appWithTranslation } from 'next-i18next';

import AppMain from "@/App";
import "@Public/scss/style.scss";
import 'swiper/css';

import { wrapper } from "../src/store";
import { AnimatePresence } from "framer-motion";

const MyApp = ({ Component, pageProps, router, store }) => {

  return (
    <>
      <Head>
        <meta name="google-site-verification" content="Zu6yw4P7jufNaVdIAGj9Dqg58TmKKvWgMWHzlE-RNM8" />
        <meta httpEquiv="Content-type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>

        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js" defer></script>

        <script src="https://npmcdn.com/parse@4.0.0/dist/parse.js" defer></script>

        <script src="/static/js/emailer.js" defer></script>
      </Head>
      <AppMain router={router}>
        <AnimatePresence
          initial={false}
          mode="wait"
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Component {...pageProps} lang={router.query.lang} store={store} />
        </AnimatePresence>
      </AppMain>
    </>
  );
};

export default appWithTranslation(withRouter(MyApp));

