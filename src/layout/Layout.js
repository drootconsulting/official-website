import { Fragment, useEffect } from "react";
import ImageView from "../components/ImageView";
import { activeAnimation, initCursor } from "../utils";
import Header from "./Header";
import { useRouter } from "next/router";
import ReactGA from 'react-ga';

const Layout = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    ReactGA.pageview(router.pathname);
    initCursor();
    activeAnimation();
    window.addEventListener("scroll", activeAnimation);
    let { jarallax, jarallaxVideo } = require("jarallax");
    jarallaxVideo();
    jarallax(document.querySelectorAll(".js-parallax"), {
      speed: 0.65,
      type: "scroll",
    });
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.Splitting = require("splitting");
    }
    Splitting();
  });

  return (
    <Fragment>
      <ImageView />
      <div className="container-page" style={{backgroundColor:router.pathname === '/bhaskar-jyoti-work' ? '#2f2f2f' : '#040407'}}>
        {/* Header */}
         <Header/>
        {children}
      </div>
      <div className="cursor"></div>
    </Fragment>
  );
};
export default Layout;
