import { Fragment, useEffect } from "react";
import ImageView from "../components/ImageView";
import { activeAnimation, initCursor } from "../utils";
import Header from "./Header";
import { useRouter } from "next/router";
const Layout = ({ children }) => {
  useEffect(() => {
    initCursor();
    activeAnimation();
    window.addEventListener("scroll", activeAnimation);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.Splitting = require("splitting");
    }
    Splitting();
  });

  useEffect(() => {
    let { jarallax, jarallaxVideo } = require("jarallax");
    jarallaxVideo();
    jarallax(document.querySelectorAll(".js-parallax"), {
      speed: 0.65,
      type: "scroll",
    });
  }, []);
  const router = useRouter();
  return (
    <Fragment>
      <ImageView />
      <div className="container-page" style={{backgroundColor:router.pathname === '/bhaskar-jyoti-work' ? '#2f2f2f' : '#000'}}>
        {/* Header */}
         <Header/>
        {children}
      </div>
      <div className="cursor"></div>
    </Fragment>
  );
};
export default Layout;
