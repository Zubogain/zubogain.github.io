import React, { useEffect, useRef } from "react";

import { motion, useAnimation } from "framer-motion";

import staticContent from "@/staticContent";

import ScrollContainer from 'react-indiana-drag-scroll'
import Image from "next/image";

const Projects = ({ isStopAnimation, setIsStopAnimation }) => {
    const ref = useRef();

    const animation = useAnimation();

    useEffect(() => {
        animation.set({ x: 0 });

        animation.start({
            x: [0, -80, 0],
            transition: {
                delay: 0.75,
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
            <div className="col-12 text-center">
                <h3 className="cap__title">My projects</h3>
            </div>

            <div className="col-12 mt-15 card__container">
                <div className="card__l-sh"></div>

                <ScrollContainer
                    className="d-flex"
                    ref={ref}
                    horizontal={true}
                    style={{
                        marginLeft: "-15px",
                        marginRight: "-15px"
                    }}
                    onStartScroll={stopAnimation}
                    onClick={stopAnimation}
                >

                    <motion.div
                        className="d-flex w-100"
                        animate={animation}
                    >
                        {staticContent.projects.map((item, index) => {
                            return (
                                <div
                                    key={item.title + item.subtitle + item.date + item.text + index}
                                    className="col-12 col-md-6 col-lg-4"
                                >
                                    <a href={item.url} target="_blank">
                                        <div className="card text-center d-flex align-items-center justify-content-center">
                                            <div
                                                className="card__header d-flex justify-content-center"
                                                style={{
                                                    flexShrink: 0
                                                }}
                                            >
                                                <Image
                                                    priority
                                                    src={item.image}
                                                    height={75}
                                                    width={75}
                                                    alt={item.title}
                                                />
                                            </div>
                                            <div className="card__content text-left"
                                                style={{
                                                    overflow: "hidden"
                                                }}
                                            >
                                                <h3 className="card__title" style={{ marginLeft: "3px" }}>{item.title}</h3>
                                                {item.text.map((text, index) => (
                                                    <p key={text + index} className={`card__subtitle card__subtitle-${index + 1}`} title={text}>{text}</p>
                                                ))}
                                            </div>
                                        </div>
                                    </a>
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

export default Projects;