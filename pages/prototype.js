import React from "react";

const PrototypePage = () => {
    return (
        <React.Fragment>
            <header className="header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <ul className="header__nav d-flex justify-content-center">
                                <li className="header__nav-item cap__text selected">Home</li>
                                <li className="header__nav-item cap__text">Skills & Experience</li>
                                <li className="header__nav-item cap__text">Contact</li>
                            </ul>
                        </div>
                        <div className="col-12">
                            <ul className="header__socials d-flex justify-content-center">
                                <li className="header__socials-item cap__text">Linked</li>
                                <li className="header__socials-item cap__text">Telegram</li>
                                <li className="header__socials-item cap__text">GitHub</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>

            <div className="container-fluid">
                <section className="home d-flex flex-column justify-content-center align-items-center">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h3 className="cap__title">Hi,</h3>
                            <h3 className="cap__title">I am Emil,</h3>
                            <h3 className="cap__title">A software developer</h3>
                            <h3 className="cap__text">Software Developer / Cloud Expert</h3>
                        </div>
                    </div>
                    <div className="slide-down d-flex justify-content-center">
                        <div className="cap__text">DOWN</div>
                    </div>
                </section>

                <section className="skills d-flex flex-column justify-content-center align-items-center">
                    <div className="row justify-content-center">
                        <div className="col-6 text-center">
                            <h3 className="cap__title">Skills & Experience</h3>
                            <h3 className="cap__text">
                                I’m a Software Developer located in Kazakhstan. I have a serious passion for solving the problems in high load systems and an intuitive innovative interfaces, dynamic user experiences.

                                Well-organised person, problem solver, independent employee with high attention to detail.

                                Interested in the entire Web Software spectrum and working on ambitious projects.

                                Visit my LinkedIn profile for more details or just contact me.
                            </h3>
                        </div>
                    </div>
                    <div className="slide-down d-flex justify-content-center">
                        <div className="cap__text">DOWN</div>
                    </div>
                </section>
            </div>
        </React.Fragment>
    )
}

export default PrototypePage;
