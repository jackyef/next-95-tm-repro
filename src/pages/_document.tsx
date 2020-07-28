import * as React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import criticalCss from '../styles/critical';
import { MetaTags } from '../components/Layout/MetaTags';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* 🔴 You can add scripts or meta tags here if you need to 🔴 */}
          {/* 🔴 If you need to add snippet for tracking scripts, you can do it here as well 🔴 */}
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="initial-scale=1, minimum-scale=1, maximum-scale=5, user-scalable=yes, width=device-width"
          />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <MetaTags />

          <style>{criticalCss}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
