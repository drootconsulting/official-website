import Head from "next/head";
import { Fragment, Suspense, useEffect, useState } from "react";
import Preloader from "../src/layout/Preloader";
import "../styles/globals.css";

const App = ({ Component, pageProps }) => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 0);
  }, []);

  useEffect(() => {

    document.body.style.backgroundColor = "black";

  }, []);

  return (
    <Fragment>
      <Head>
        <title>Droot-Elevating Experiences</title>
        <style ></style>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="author" content="beshleyua" />
        {/* Fonts */}

        {/* <link rel="preload" href="assets/css/main.css" as="style"/> */}

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto%3A100%2C100i%2C300%2C300i%2C400%2C400i%2C500%2C500i%2C700%2C700i%2C900%2C900i%7CPlayfair+Display%3A100%2C100i%2C300%2C300i%2C400%2C400i%2C500%2C500i%2C700%2C700i%2C900%2C900i%7CMr+De+Haviland&display=swap"
          type="text/css"
          media="all"
        />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />

        {/* CSS STYLES */}

        <link
          rel="stylesheet"
          href="assets/css/vendors/bootstrap.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="assets/fonts/font-awesome/css/font-awesome.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="assets/css/vendors/magnific-popup.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="assets/css/vendors/splitting.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="assets/css/vendors/swiper.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="assets/css/vendors/animate.css"
          type="text/css"
          media="all"
        />

        <link
          rel="stylesheet"
          href="assets/css/main.css"
          type="text/css"
          media="all"
        />

        {/* <link rel="stylesheet" href="assets/css/main.css"></link> */}

        {/*[if lt IE 9]><![endif]*/}
        {/* Favicon */}
        <link rel="shortcut icon" href="assets/favicon_1.ico" type="image/x-icon" />
        {/* <link rel="icon" href="assets/favicon_1.ico" type="image/x-icon" /> */}
      </Head>

      {loader ? (
        <>
          <Preloader setLoader={setLoader} />
        </>
      ) : (
        <>
          {/* Your page content */}
          <Component {...pageProps} />
        </>
      )}
      {/*     
      {loader && <Preloader />}  */}
    </Fragment>
  );
};
export default App;
