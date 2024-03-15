/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import { useSwipeable } from 'react-swipeable'

import Down from '@Components/Down'
import Footer from '@Components/Footer'
import Header from '@Components/Header'

import staticContent from '@Src/staticContent'
import { QueryWithLocale } from '@Interfaces/query'
import { useThemeDetector } from '@Src/hooks'
import ModalCookies from '@Components/Modal/Cookies'
import ScrollArrow from '@Components/ScrollArrow'

const Layout = ({ children }: { children: any }) => {
  const routes = [
    '/[locale]',
    '/[locale]/skills',
    '/[locale]/experience',
    '/[locale]/contact',
  ]

  const [nextRoute, setNextRoute] = useState('')
  const [prevRoute, setPrevRoute] = useState('')

  const router = useRouter()
  const query = router.query as QueryWithLocale

  const isDarkTheme = useThemeDetector()

  useEffect(() => {
    if (query.locale) {
      const routeIndex = routes.indexOf(router.route)
      const nextRouteIndex = routeIndex + 1

      if (routeIndex !== -1 && nextRouteIndex < routes.length) {
        setNextRoute(routes[nextRouteIndex].replace('[locale]', query.locale))
      } else {
        setNextRoute(router.route.replace('[locale]', query.locale))
      }

      // find prev route

      const prevRouteIndex = routeIndex - 1

      if (routeIndex !== -1 && prevRouteIndex !== -1) {
        setPrevRoute(routes[prevRouteIndex].replace('[locale]', query.locale))
      } else {
        setPrevRoute(router.route.replace('[locale]', query.locale))
      }
    }
  }, [router.route, query.locale])

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    isDarkTheme && document.getElementById('root')?.classList.add('dark-theme')
  }, [isDarkTheme])

  return (
    <>
      <NextSeo openGraph={staticContent.basicOpenGraph} />
      <main className="wrapper">
        <Header />
        {children}
        <Footer />
        <ModalCookies />
        <ScrollArrow />
      </main>
    </>
  )
}

export default Layout
