import { withRouter } from "next/router";
import Head from "next/head";
import AppMain from "@/App";
import "@Public/scss/style.scss";
import 'swiper/css';

import { wrapper } from "../src/store";

const MyApp = ({ Component, pageProps, router, store }) => {

  return (
    <>
      <Head>
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
      </Head>
      <AppMain router={router}>
        <Component {...pageProps} lang={router.query.lang} store={store} />
      </AppMain>
    </>
  );
};

export default wrapper.withRedux(withRouter(MyApp));

