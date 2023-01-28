import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

const ErrorPageContainer = () => {
  const router = useRouter();

  return (
    <React.Fragment>
      <Head>
        <title>Some mistake</title>
        <meta name="description" content="Something seems to have gone wrong." key="desc" />
        <meta property="og:title" content="Page not found" />
        <meta
          property="og:description"
          content="Something seems to have gone wrong."
        />
        <meta
          property="og:image"
          content="https://zubogain.github.io/static/og-image.png"
        />
      </Head>
      <section className="error-page h-100">
        <div className="container h-100">
          <div className="row h-100 pb-5">
            <div className="col-12 mb-5">
              <div className="h-100 d-flex flex-column text-center justify-content-center">
                <h1 className="cap__title">
                  Page not found
                </h1>
                <p className="cap__text">
                  Something seems to have gone wrong.
                </p>
                <div className="row pb-5 justify-content-center">
                  <div className="col-lg-auto col-sm-8 col-12 mb-5">
                    <button
                      className="error-page__btn"
                      onClick={() => router.back()}
                    >
                      Go back!
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ErrorPageContainer;
