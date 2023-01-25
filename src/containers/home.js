import React from "react";
import Head from "next/head";

import { motion } from "framer-motion";

const HomeContainer = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Home</title>
        <meta name="description" content="Hi, I'm Emil, a software developer and cloud expert" key="desc" />
        <meta property="og:title" content="Home" />
        <meta
          property="og:description"
          content="Hi, I'm Emil, a software developer and cloud expert"
        />
        <meta
          property="og:image"
          content="https://zubogain.github.io/static/og-image.png"
        />
      </Head>
      <motion.section
        className="home d-flex flex-column justify-content-center align-items-center"
        key={"my_unique_key1"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h3 className="cap__title">Hi,</h3>
              <h3 className="cap__title">I am Emil,</h3>
              <h3 className="cap__title">A software developer</h3>
              <h3 className="cap__text">Software Developer / Cloud Expert</h3>
            </div>
          </div>
        </div>
      </motion.section>
    </React.Fragment>
  )
}

export default HomeContainer;
