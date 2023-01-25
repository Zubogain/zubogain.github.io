import React from "react";
import { motion } from "framer-motion";

const HomeContainer = () => {
  return (
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
    // <section className="home d-flex flex-column justify-content-center align-items-center">
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-12 text-center">
    //         <h3 className="cap__title">Hi,</h3>
    //         <h3 className="cap__title">I am Emil,</h3>
    //         <h3 className="cap__title">A software developer</h3>
    //         <h3 className="cap__text">Software Developer / Cloud Expert</h3>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  )
}

export default HomeContainer;
