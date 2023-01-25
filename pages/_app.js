// import "@Public/scss/style.scss";

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// // // // // // // // // // // / / / / / / / / / / / / / / / / / / / / / 

import { withRouter } from "next/router";
import Head from "next/head";
import Router from "next/router";
import AppMain from "@/App";
import "@Public/scss/style.scss";

import { wrapper } from "../src/store";
// import { useState } from "react";
// import { useDispatch } from "react-redux";

import { AnimateSharedLayout } from "framer-motion";

const MyApp = ({ Component, pageProps, router, store }) => {
  // const dispatch = useDispatch();
  // const [isLoadingPage, setIsLoadingPage] = useState(false);

  Router.onRouteChangeStart = (url) => {
    // dispatch(themeSetIsBlur(true));
    // setIsLoadingPage(true);
  };

  Router.onRouteChangeComplete = (url) => {
    // dispatch(themeSetIsBlur(false));
    // setIsLoadingPage(false);
  };

  Router.onRouteChangeError = (err, url) => {
    // dispatch(themeSetIsBlur(false));
    // setIsLoadingPage(false);
  };

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
      {/* {isLoadingPage && <PagePreloader />} */}
      <AppMain router={router}>
        {/* <AnimateSharedLayout> */}
        <Component {...pageProps} lang={router.query.lang} store={store} />
        {/* </AnimateSharedLayout> */}
      </AppMain>
    </>
  );
};

MyApp.getInitialProps = async ({ Component, ctx, store, dispatch }) => {
  let pageProps = {};

  return { pageProps };
};

export default wrapper.withRedux(withRouter(MyApp));

