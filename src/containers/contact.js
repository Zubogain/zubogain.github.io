import React from "react";
import Head from "next/head";

import { useTranslation } from 'next-i18next';
import { motion } from "framer-motion";

const ContactContainer = () => {
  const { t, lang } = useTranslation(["contact"]);

  return (
    <React.Fragment>
      <Head>
        <title>Contact</title>
        <meta name="description" content="I’m interested in freelance opportunities – especially ambitious or large projects. However, if you have other request or question, don’t hesitate to use the form." key="desc" />
        <meta property="og:title" content="Contact me" />
        <meta
          property="og:description"
          content="I’m interested in freelance opportunities – especially ambitious or large projects. However, if you have other request or question, don’t hesitate to use the form."
        />
        <meta
          property="og:image"
          content="https://zubogain.github.io/static/og-image.png"
        />
      </Head>
      <motion.section
        className="contact d-flex flex-column justify-content-center align-items-center"
        key={"my_unique_key432"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-6 text-center">
              <h3 className="cap__title">{t("contact:title")}</h3>
              <h3 className="cap__text">
                {t("contact:subtitle")}
              </h3>
            </div>

            <div className="col-12 col-lg-12">
              <div className="row justify-content-center">
                <div className="col-12 col-lg-6 col-xl-6">
                  <div className="row d-flex justify-content-center align-items-center h-100">

                    <div className="col-12 mb-auto">
                      <div className="row">
                        <div className="col-6 mt-30">
                          <input className="form__input" placeholder={t("contact:form.placeholders.name")} />
                        </div>
                        <div className="col-6 mt-30">
                          <input className="form__input" placeholder={t("contact:form.placeholders.email")} />
                        </div>
                        <div className="col-12 mt-30">
                          <input className="form__input" placeholder={t("contact:form.placeholders.subject")} />
                        </div>

                        <div className="col-12 mt-30">
                          <textarea
                            className="form__input form__textarea"
                            placeholder={t("contact:form.placeholders.message")}
                          />
                        </div>

                        <div className="col-12 mt-30">
                          <button
                            className="form__btn ml-auto mr-auto"
                            placeholder="Message"
                          >
                            {t("contact:form.buttons.send")}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </React.Fragment>
  )
}

export default ContactContainer;
