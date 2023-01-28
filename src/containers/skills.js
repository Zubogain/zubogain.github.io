import React from "react";
import Head from "next/head";

import { useTranslation } from 'next-i18next';

import { motion } from "framer-motion";

const SkillsContainer = () => {
  const { t } = useTranslation(["skills"]);

  return (
    <React.Fragment>
      <Head>
        <title>Skills</title>
        <meta name="description" content="I’m a Software Developer located in Kazakhstan. I have a serious passion for solving the problems in high load systems and an intuitive innovative interfaces, dynamic user experiences. Well-organised person, problem solver, independent employee with high attention to detail. Interested in the entire Web Software spectrum and working on ambitious projects. Visit my LinkedIn profile for more details or just contact me." key="desc" />
        <meta property="og:title" content="My skills" />
        <meta
          property="og:description"
          content="I’m a Software Developer located in Kazakhstan. I have a serious passion for solving the problems in high load systems and an intuitive innovative interfaces, dynamic user experiences. Well-organised person, problem solver, independent employee with high attention to detail. Interested in the entire Web Software spectrum and working on ambitious projects. Visit my LinkedIn profile for more details or just contact me."
        />
        <meta
          property="og:image"
          content="https://zubogain.github.io/static/og-image.png"
        />
      </Head>
      <motion.section
        className="skills d-flex flex-column justify-content-center align-items-center"
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