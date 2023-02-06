import React from "react";
import Head from "next/head";

import { useTranslation } from 'next-i18next';

import { motion } from "framer-motion";
import { NextSeo } from "next-seo";

const SkillsContainer = () => {
  const { t } = useTranslation(["skills"]);

  return (
    <React.Fragment>
      <Head>
        <title>{t("skills:title")}</title>
      </Head>
      <NextSeo
        openGraph={{
          type: 'website',
          title: t("skills:og.title"),
          description: t("skills:og.description"),
        }}
      />
      <motion.section
        className="skills d-flex flex-column justify-content-center align-items-center mb-30"
        key={"my_unique_key12"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <h3 className="cap__title">{t("skills:title")}</h3>
              <h3 className="cap__text">
                {t("skills:text")}
              </h3>
            </div>
          </div>
        </div>
      </motion.section>
    </React.Fragment>
  )
}

export default SkillsContainer;