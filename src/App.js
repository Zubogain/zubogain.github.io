import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";

import { AnimatePresence, motion } from "framer-motion";

import Particles from "react-particles";
import { loadFull } from "tsparticles";

import Down from "./components/down";
import Footer from "./components/footer";
import Header from "./components/header";

const Layout = ({ children }) => {
  const router = useRouter();

  const [showFooter, setShowFooter] = useState(false);
  const [showAngle, setShowAngle] = useState(true);

  useEffect(() => {
    if (router.route == "/contact") {
      showAngle && setShowAngle(false);
      !showFooter && setShowFooter(true);
    } else {
      !showAngle && setShowAngle(true);
      showFooter && setShowFooter(false);
    }
  }, [router.route]);

  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);
  return (
    <React.Fragment>
      <Header />
      <AnimatePresence
        // exitBeforeEnter
        initial={false}
      >
        {children}
      </AnimatePresence>

      {showAngle && <Down />}
      {showFooter && <Footer />}
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 90,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: false,
            },
            modes: {
              push: {
                quantity: 1,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#BEBEBE",
            },
            links: {
              color: "#BEBEBE",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: false,
            },
            move: {
              directions: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 0.7,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 600,
              },
              value: 25,
            },
            opacity: {
              value: 1,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
    </React.Fragment>
  );
};

export default Layout;
