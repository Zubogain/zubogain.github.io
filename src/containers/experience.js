import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";

// import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from "react-bootstrap";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const ExperienceContainer = () => {

    return (
        <motion.section
            className="skills d-flex flex-column justify-content-center align-items-center"
            key={"my_unique_key23"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            <div className="container">
                <div className="row justify-content-center">

                    <div className="col-12 text-center">
                        <h3 className="cap__title">My experience & projects</h3>
                    </div>

                    <div className="col-12">
                        <Swiper
                            loop={true}
                            autoplay={true}
                            spaceBetween={30}
                            slidesPerView="auto"
                            grabCursor={true}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1
                                },
                                576: {
                                    slidesPerView: 1
                                },
                                768: {
                                    slidesPerView: 2
                                },
                                992: {
                                    slidesPerView: 3
                                },
                                1200: {
                                    slidesPerView: 3
                                },
                            }}
                        >
                            <SwiperSlide className="swiper-slide">
                                <div className="card text-center">
                                    <div className="card__header d-flex justify-content-center">
                                        <h3 className="card__title">Freelance</h3>
                                        <p className="card__date">2016-2019</p>
                                    </div>
                                    <p className="card__subtitle">Fullstack</p>
                                    <p className="card__text">I have evolved from a regular HTML coder to a fullstack developer.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card text-center">
                                    <div className="card__header d-flex justify-content-center">
                                        <h3 className="card__title">PingOcean</h3>
                                        <p className="card__date">2019-2020</p>
                                    </div>
                                    <p className="card__subtitle">Frontend</p>
                                    <p className="card__text">The company develops software solutions in the field of telephony.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card text-center">
                                    <div className="card__header d-flex justify-content-center">
                                        <h3 className="card__title">Edvola</h3>
                                        <p className="card__date">2020-2021</p>
                                    </div>
                                    <p className="card__subtitle">Chief technology officer</p>
                                    <p className="card__text">The company develops software solutions in the field of online education.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card text-center">
                                    <div className="card__header d-flex justify-content-center">
                                        <h3 className="card__title">Seiko Lab</h3>
                                        <p className="card__date">2021-2021</p>
                                    </div>
                                    <p className="card__subtitle">Software Engineer</p>
                                    <p className="card__text">The company develops software solutions in the field of Robotic process automation.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card text-center">
                                    <div className="card__header d-flex justify-content-center">
                                        <h3 className="card__title">Freelance</h3>
                                        <p className="card__date">2021-2022</p>
                                    </div>
                                    <p className="card__subtitle">Lead Software Engineer</p>
                                    <p className="card__text">I worked on one project that was similar in functionality to instagram and onlyfans.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card text-center">
                                    <div className="card__header d-flex justify-content-center">
                                        <h3 className="card__title">Dater</h3>
                                        <p className="card__date">2022-2022</p>
                                    </div>
                                    <p className="card__subtitle">Software Engineer</p>
                                    <p className="card__text">Streaming startup - web3 party mobile application.</p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>

                    <div className="col-12">
                        <Swiper
                            className="swiper"
                            loop={true}
                            autoplay={true}
                            spaceBetween={30}
                            slidesPerView="auto"
                            grabCursor={true}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1
                                },
                                576: {
                                    slidesPerView: 1
                                },
                                768: {
                                    slidesPerView: 2
                                },
                                992: {
                                    slidesPerView: 3
                                },
                                1200: {
                                    slidesPerView: 3
                                },
                            }}
                        >
                            <SwiperSlide className="swiper-slide">
                                <div className="card text-center">
                                    <div className="card__header d-flex justify-content-center">
                                        <h3 className="card__title">Freelance</h3>
                                        <p className="card__date">2016-2019</p>
                                    </div>
                                    <p className="card__subtitle">Fullstack</p>
                                    <p className="card__text">I have evolved from a regular HTML coder to a fullstack developer.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card text-center">
                                    <div className="card__header d-flex justify-content-center">
                                        <h3 className="card__title">PingOcean</h3>
                                        <p className="card__date">2019-2020</p>
                                    </div>
                                    <p className="card__subtitle">Frontend</p>
                                    <p className="card__text">The company develops software solutions in the field of telephony.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card text-center">
                                    <div className="card__header d-flex justify-content-center">
                                        <h3 className="card__title">Edvola</h3>
                                        <p className="card__date">2020-2021</p>
                                    </div>
                                    <p className="card__subtitle">Chief technology officer</p>
                                    <p className="card__text">The company develops software solutions in the field of online education.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card text-center">
                                    <div className="card__header d-flex justify-content-center">
                                        <h3 className="card__title">Seiko Lab</h3>
                                        <p className="card__date">2021-2021</p>
                                    </div>
                                    <p className="card__subtitle">Software Engineer</p>
                                    <p className="card__text">The company develops software solutions in the field of Robotic process automation.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card text-center">
                                    <div className="card__header d-flex justify-content-center">
                                        <h3 className="card__title">Freelance</h3>
                                        <p className="card__date">2021-2022</p>
                                    </div>
                                    <p className="card__subtitle">Lead Software Engineer</p>
                                    <p className="card__text">I worked on one project that was similar in functionality to instagram and onlyfans.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card text-center">
                                    <div className="card__header d-flex justify-content-center">
                                        <h3 className="card__title">Dater</h3>
                                        <p className="card__date">2022-2022</p>
                                    </div>
                                    <p className="card__subtitle">Software Engineer</p>
                                    <p className="card__text">Streaming startup - web3 party mobile application.</p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default ExperienceContainer;
