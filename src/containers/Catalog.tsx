import React from 'react'
import Head from 'next/head'
import { NextSeo } from 'next-seo'

import { useTranslation } from 'next-i18next'

import { motion } from 'framer-motion'
import Breadcrumbs from '@Components/Breadcrumbs'
import CategoriesSection from '@Components/Sections/Categories'
import CatalogSection from '@Components/Sections/Catalog'
import AddTecnhique from '@Components/Sections/AddTechnique'
import TelegramBotSnippet from '@Components/Snippet/TelegramBot'

const CatalogContainer = () => {
  const { t } = useTranslation(['home'])

  return (
    <>
      <Head>
        <title>{t('home:page-title')}</title>
      </Head>
      <NextSeo
        openGraph={{
          type: 'website',
          title: t('home:og.title'),
          description: t('home:og.description'),
        }}
      />
      {/* <motion.section
        className="home d-flex flex-column justify-content-center align-items-center"
        key="my_unique_key1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h3 className="cap__title">{t('home:title')}</h3>
            </div>
          </div>
        </div>
      </motion.section> */}

      <main>
        <Breadcrumbs />
        <CategoriesSection />

        <CatalogSection />

        <AddTecnhique />

        <TelegramBotSnippet />
      </main>
    </>
  )
}

export default CatalogContainer
