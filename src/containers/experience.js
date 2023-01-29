import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";

import { motion } from "framer-motion";

import Projects from "@/components/projects";
import Experience from "@/components/experience";
import { NextSeo } from "next-seo";
import { useTranslation } from 'next-i18next';

const ExperienceContainer = () => {
    const { t } = useTranslation(['experience']);

    const [isStopAnimation, setIsStopAnimation] = useState(false);

    return (
        <React.Fragment>
            <Head>
                <title>{t("experience:title")} & {t("projects:title")}</title>
            </Head>
            <NextSeo
                openGraph={{
                    type: 'website',
                    title: t("experience:og.title"),
                    description: t("experience:og.description"),
                }}
            />
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
