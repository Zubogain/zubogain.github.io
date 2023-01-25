import React from "react";

import { motion } from "framer-motion";

const SkillsContainer = () => {
  return (
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
            <h3 className="cap__title">Contact me</h3>
            <h3 className="cap__text">
              I’m interested in freelance opportunities – especially ambitious or large projects. However, if you have other request or question, don’t hesitate to use the form.
            </h3>
          </div>

          <div className="col-12 col-lg-12">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-6 col-xl-6">
                <div className="row d-flex justify-content-center align-items-center h-100">

                  <div className="col-12 mb-auto">
                    <div className="row">
                      <div className="col-6 mt-30">
                        <input className="form__input" placeholder="Name" />
                      </div>
                      <div className="col-6 mt-30">
                        <input className="form__input" placeholder="Email" />
                      </div>
                      <div className="col-12 mt-30">
                        <input className="form__input" placeholder="Subject" />
                      </div>

                      <div className="col-12 mt-30">
                        <textarea
                          className="form__input form__textarea"
                          placeholder="Message"
                        />
                      </div>

                      <div className="col-12 mt-30">
                        <button
                          className="form__btn ml-auto mr-auto"
                          placeholder="Message"
                        >
                          Send Message!
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
  )
}

export default SkillsContainer;
