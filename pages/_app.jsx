import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import Preloader from "../src/layout/Preloader";
import "../styles/globals.css";
import ReactGA from 'react-ga';
import '../public/assets/css/vendors/bootstrap.css';
import '../public/assets/css/vendors/magnific-popup.css';
import '../public/assets/css/vendors/splitting.css';
import '../public/assets/fonts/font-awesome/css/font-awesome.css';
import '../public/assets/css/vendors/swiper.css';
import '../public/assets/css/vendors/animate.css';
import  '../public/assets/css/main.css';
const App = ({ Component, pageProps }) => {
  const [loader, setLoader] = useState(true);
  ReactGA.initialize('UA-157989853-1');

  useEffect(() => {
    document.body.style.backgroundColor = "black";
    setTimeout(() => {
      setLoader(false);
    }, 500);
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Droot-Elevating Experiences</title>
        <style ></style>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Fonts */}

        {/* <link rel="preload" href="assets/css/main.css" as="style"/> */}

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          type="text/css"
          media="all"
        />

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
     
    </Fragment>
  );
};
export default App;
