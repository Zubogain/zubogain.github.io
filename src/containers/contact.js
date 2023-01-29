import React from "react";
import Head from "next/head";

import { useTranslation } from 'next-i18next';
import { motion } from "framer-motion";
import { NextSeo } from "next-seo";

const ContactContainer = () => {
  const { t } = useTranslation(["contact"]);

  return (
    <React.Fragment>
      <Head>
        <title>{t("contact:title")}</title>
      </Head>
      <NextSeo
        openGraph={{
          type: 'website',
          title: t("contact:og.title"),
          description: t("contact:og.description"),
        }}
      />
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
                      <form
                        id="contact"
                        className="row"
                      >
                        <div className="col-6 mt-30">
                          <input id="name" className="form__input" placeholder={t("contact:form.placeholders.name")} required />
                        </div>
                        <div className="col-6 mt-30">
                          <input id="email" className="form__input" placeholder={t("contact:form.placeholders.email")} required />
                        </div>
                        <div className="col-12 mt-30">
                          <input id="subject" className="form__input" placeholder={t("contact:form.placeholders.subject")} required />
                        </div>

                        <div className="col-12 mt-30">
                          <textarea
                            id="message"
                            className="form__input form__textarea"
                            placeholder={t("contact:form.placeholders.message")}
                            required
                          />
                        </div>

                        <div className="col-12 mt-30">
                          <button
                            type="submit"
                            className="form__btn ml-auto mr-auto"
                            placeholder="Message"
                          >
                            {t("contact:form.buttons.send")}
                          </button>
                        </div>
                      </form>
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
