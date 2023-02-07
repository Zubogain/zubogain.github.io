import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import { useSwipeable } from "react-swipeable";

import Down from "./components/Down";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Particles from "./components/Particles";

import staticContent from "./staticContent";
import { QueryWithLocale } from "interfaces/query";

const Layout = ({ children }: { children: any }) => {
  const routes = ["/[locale]", "/[locale]/skills", "/[locale]/experience", "/[locale]/contact"];

  const [nextRoute, setNextRoute] = useState("");
  const [prevRoute, setPrevRoute] = useState("");

  const router = useRouter();
  const query = router.query as QueryWithLocale

  useEffect(() => {
    if (query.locale) {
      const routeIndex = routes.indexOf(router.route);
      const nextRouteIndex = routeIndex + 1;

      if (routeIndex != -1 && nextRouteIndex < routes.length) {
        setNextRoute(routes[nextRouteIndex].replace("[locale]", query.locale));
      } else {
        setNextRoute(router.route.replace("[locale]", query.locale));
      }

      // find prev route

      const prevRouteIndex = routeIndex - 1;

      if (routeIndex != -1 && prevRouteIndex != -1) {
        setPrevRoute(routes[prevRouteIndex].replace("[locale]", query.locale));
      } else {
        setPrevRoute(router.route.replace("[locale]", query.locale));
      }
    }

  }, [router.route, query.locale]);

  const handlers = useSwipeable({
    onSwipedUp: (eventData) => {
      const el = document.getElementById("__next");
      if (el) {
        const isBottom = (el.scrollTop + el.offsetHeight) >= el.scrollHeight - 1; // - 10

        console.log("isBottom:", el.scrollHeight, el.scrollTop + el.offsetHeight)

        if (isBottom) {
          router.push(nextRoute);
        }
      }
    },
    onSwipedDown: (eventData) => {
      const el = document.getElementById("__next");
      if (el) {
        const isTop = el.scrollTop;

        console.log("isTop:", el.scrollTop)

        if (isTop <= 0) {
          router.push(prevRoute);
        }
      }
    },
    delta: 110,                            // min distance(px) before a swipe starts. *See Notes*
    preventScrollOnSwipe: false,           // prevents scroll during swipe (*See Details*)
    trackTouch: true,                      // track touch input
    trackMouse: true,                      // track mouse input
    rotationAngle: 0,                      // set a rotation angle
    swipeDuration: 250,                    // allowable duration of a swipe (ms). *See Notes*
    touchEventOptions: { passive: true },  // options for touch listeners (*See Details*)
  });

  const [showFooter, setShowFooter] = useState(false);
  const [showAngle, setShowAngle] = useState(true);

  useEffect(() => {
    if (router.route == "/[locale]/contact" || router.route == "/[locale]/404") {
      showAngle && setShowAngle(false);
      !showFooter && setShowFooter(true);
    } else {
      !showAngle && setShowAngle(true);
      showFooter && setShowFooter(false);
    }
  }, [router.route]);

  return (
    <React.Fragment>
      <NextSeo
        openGraph={staticContent.basicOpenGraph}
      />
      <main id="mega-main" className="main noselect" {...handlers}>
        <Header />
        {children}
        {
          showAngle && <Down />}
        {
          showFooter && <Footer />}
      </main>
      < Particles />
    </React.Fragment>
  );
};

export default Layout;