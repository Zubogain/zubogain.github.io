import Document, { Html, Head, Main, NextScript } from 'next/document'

import i18nextConfig from '@/next-i18next.config'

class AppDocument extends Document {
  constructor(props: any) {
    super(props)

    const { page } = props.__NEXT_DATA__

    this.state = {
      page: page.page,
    }
  }

  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    const currentLocale =
      (this.props.__NEXT_DATA__.query.locale as string) ||
      i18nextConfig.i18n.defaultLocale

    return (
      <Html lang={currentLocale}>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />
        </Head>
        <body id="root">
          <Main />
          <div id="myportal" />
          <NextScript />
          <script src="/static/js/app.min.js?_v=20230826094030"></script>
          <script src="/static/jquery-3.6.3.min.js?_v=20230826094030"></script>
          <script src="/static/moment.js?_v=20230826094030"></script>
          <script src="/static/daterangepicker.js?_v=20230826094030"></script>
          <script src="/static/daterangepicker-script.js?_v=20230826094030"></script>
        </body>
      </Html>
    )
  }
}

export default AppDocument
