import React from 'react';
import Head from 'next/head';
import App from 'next/app';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    /**
     * If you need to add something that is needed in all pages (Providers, etc)
     * you can put it here
     */
    return (
      <>
        <Head>
          <title>Example Site</title>
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
