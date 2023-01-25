import { connect } from "react-redux";
// import imgGolden from "@Img/works/golden.jpg?url";
// import imgMogo from "@Img/works/mogo.jpg?url";
import Head from "next/head";

import { motion, AnimatePresence } from "framer-motion";

const chunkArray = (arr, perChunk = 2) => {
  var inputArray = arr;

  var result = inputArray.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / perChunk);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []; // start a new chunk
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
  }, []);

  return result;
};

const WorksContainer = ({ animationRouteVariant }) => {
  const testData = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 2, 2, 3, 4, 5, 3, 0, 1, 2, 3, 4, 5, 6, 7,
    8, 9, 0, 2, 2, 3, 4, 5, 3, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 2, 2, 3, 4, 5,
    3,
  ];

  const variants = {
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.3,
      },
    }),
    hidden: { opacity: 0 },
  };

  const chunkedArray = chunkArray(testData, 4);

  // hidden: { opacity: 0, x: -200, y: 0 },
  //     enter: { opacity: 1, x: 0, y: 0 },
  //     exit: { opacity: 0, x: 0, y: -100 },

  return (
    <>
      <Head>
        <title>My works</title>
      </Head>
      <motion.section className="works-container w-100 h-100">
        <div className="grid">
          {/* <div className="item">
          <div className="works__item">
            <img src={imgGolden} width="100%" height="100%" />
          </div>
        </div>
        <div className="item">
          <div className="works__item">
            <img src={imgMogo} width="100%" height="100%" />
          </div>
        </div> */}
          {chunkedArray.map((arr, i) =>
            arr.map((item, i) => (
              <motion.div
                key={i}
                className="item"
                custom={i}
                initial="hidden"
                animate="visible"
                variants={variants}
              >
                <div className="works__item">
                  {/* <img src={imgGolden} width="100%" height="100%" /> */}
                </div>
              </motion.div>
            ))
          )}
        </div>
      </motion.section>
    </>
  );
};

const mapStateToProps = ({ theme: { animationRouteVariant } }) => {
  return { animationRouteVariant };
};

export default connect(mapStateToProps)(WorksContainer);
