import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";

import { motion } from "framer-motion";

import Projects from "@/components/projects";
import Experience from "@/components/experience";

const ExperienceContainer = () => {
    const [isStopAnimation, setIsStopAnimation] = useState(false);

    return (
        <React.Fragment>
            <Head>
                <title>Experience</title>
                <meta name="description" content="I’m interested in freelance opportunities – especially ambitious or large projects. However, if you have other request or question, don’t hesitate to use the form." key="desc" />
                <meta property="og:title" content="My experience" />
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
                className="skills d-flex flex-column justify-content-center align-items-center"
                key={"my_unique_key23"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
            >
                <div className="container">
                    <div className="row justify-content-center">

                        <Projects isStopAnimation={isStopAnimation} setIsStopAnimation={setIsStopAnimation} />

                        <Experience isStopAnimation={isStopAnimation} setIsStopAnimation={setIsStopAnimation} />

                    </div>
                </div>
            </motion.section>
        </React.Fragment>
    )
}

export default ExperienceContainer;
