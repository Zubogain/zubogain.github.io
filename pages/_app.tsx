import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'

import { withRouter } from 'next/router'
import Head from 'next/head'

import { appWithTranslation } from 'next-i18next'

import AppMain from '@Src/App'
import '@Public/scss/style.scss'

import { store } from '@Src/store'

import '@Public/static/js/bundle'

const MyApp = ({ Component, pageProps, router }: AppProps) => (
  <>
    <Head>
      <meta httpEquiv="Content-type" content="text/html;charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <Provider store={store}>
      <AppMain>
        <Component {...pageProps} lang={router.query.lang} />
      </AppMain>
    </Provider>
  </>
)

export default withRouter(appWithTranslation(MyApp))
