import React, { useEffect, useRef } from "react";

import { useTranslation } from 'next-i18next';

import { motion, useAnimation } from "framer-motion";

import ScrollContainer from 'react-indiana-drag-scroll'

import { ICarouselProps } from "../interfaces/carousel";
import { IExperienceListItem } from "../interfaces/experienceList";

const Experience = ({ isStopAnimation, setIsStopAnimation }: ICarouselProps) => {
    const { t } = useTranslation(["experience"]);

    const experienceList = t('experience:experience.list', { returnObjects: true }) as Array<IExperienceListItem>;

    const animation = useAnimation();

    useEffect(() => {
        animation.set({ x: 0 });

        animation.start({
            x: [0, -80, 0],
            transition: {
                delay: 3,
                duration: 2.5, repeat: Infinity, repeatDelay: 5, ease: "backInOut"
            }
        });
    }, []);

    useEffect(() => { isStopAnimation && stopAnimation() }, [isStopAnimation]);

    const stopAnimation = () => {
        animation.stop();
        animation.set({ x: 0 });
        !isStopAnimation && setIsStopAnimation(true);
    }

    return (
        <React.Fragment>
            <div className="col-12 text-center mt-30">
                <h3 className="cap__title">{t("experience:experience.title")}</h3>
            </div>

            <div className="col-12 mt-15 card__container">
                <div className="card__l-sh"></div>

                <ScrollContainer
                    className="d-flex"
                    horizontal={true}
                    style={{
                        marginLeft: "-15px",
                        marginRight: "-15px"
                    }}
                    onStartScroll={stopAnimation}
                >

                    <motion.div
                        className="d-flex w-100"
                        animate={animation}
                    >
                        {experienceList.map((item, index) => {
                            return (
                                <div
                                    key={item.title + item.subtitle + item.date + item.text + index}
                                    className="col-12 col-md-6 col-lg-4"
                                >
                                    <div className="card text-center">
                                        <div className="card__header d-flex justify-content-center">
                                            <h3 className="card__title">{item.title}</h3>
                                            <p className="card__date">{item.date}</p>
                                        </div>
                                        <p className="card__subtitle">{item.subtitle}</p>
                                        <p className="card__text">{item.text}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </motion.div>

                </ScrollContainer>

                <div className="card__r-sh"></div>

            </div>

        </React.Fragment>
    )
};

export default Experience;
