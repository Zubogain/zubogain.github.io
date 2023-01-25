// import { Html, Head, Main, NextScript } from 'next/document'

// export default function Document() {
//   return (
//     <Html lang="en">
//       <Head />
//       <body>
//         <Main />
//         <NextScript />
//       </body>
//     </Html>
//   )
// }

// // // // // // // // // / // / / // / // / / / / 
import Document, { Html, Head, Main, NextScript } from "next/document";
import { resetServerContext } from "react-beautiful-dnd";

class AppDocument extends Document {
  constructor(props) {
    super(props);

    const { page } = props.__NEXT_DATA__;

    this.state = {
      page: page.page,
    };
  }

  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    resetServerContext();
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body id="root">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AppDocument;
