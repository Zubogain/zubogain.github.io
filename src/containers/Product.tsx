import React from 'react'
import Head from 'next/head'
import { NextSeo } from 'next-seo'

import { useTranslation } from 'next-i18next'

import { motion } from 'framer-motion'
import Breadcrumbs from '@Components/Breadcrumbs'
import ProductSection from '@Components/Sections/ProductSection'
import SimilarTechniqueSection from '@Components/Sections/SimilarTechnique'
import TelegramBotSnippet from '@Components/Snippet/TelegramBot'

const ProductContainer = () => {
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
      <div className="wrapper">
        <main>
          <Breadcrumbs />

          <ProductSection />
          <SimilarTechniqueSection />
          <TelegramBotSnippet />
        </main>
      </div>
    </>
  )
}

export default ProductContainer
