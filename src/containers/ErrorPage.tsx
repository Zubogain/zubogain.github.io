import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import { useTranslation } from 'next-i18next';

const ErrorPageContainer = () => {
  const { t } = useTranslation(['error-page']);

  const router = useRouter();

  return (
    <React.Fragment>
      <Head>
        <title>{t("error-page:title")}</title>
        <NextSeo
          openGraph={{
            type: 'website',
            title: t("error-page:og.title"),
            description: t("error-page:og.description"),
          }}
        />
      </Head>
      <section className="error-page h-100">
        <div className="container h-100">
          <div className="row h-100 pb-5">
            <div className="col-12 mb-5">
              <div className="h-100 d-flex flex-column text-center justify-content-center">
                <h1 className="cap__title">
                  {t("error-page:title")}
                </h1>
                <p className="cap__text">
                  {t("error-page:subtitle")}
                </p>
                <div className="row pb-5 justify-content-center">
                  <div className="col-lg-auto col-sm-8 col-12 mb-5">
                    <button
                      className="error-page__btn"
                      onClick={() => router.back()}
                    >
                      {t("error-page:go-back")}
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
