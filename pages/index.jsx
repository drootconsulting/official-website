import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import Layout from "../src/layout/Layout";
import { home1SliderProps } from "../src/sliderProps";
import dynamic from "next/dynamic";
import Partners from "../src/components/Partners";
import Footer from "../src/layout/Footer";
import { data } from "../src/data";
import { useEffect, useState, useRef, useMemo, useCallback } from "react";
import HomePortfolio from "./home-portfolio";
//import { useIsInViewport } from "./cutsomHook";
import ScrollToTop from "react-scroll-to-top";
import { scroll } from "../util";
//import { useInViewport } from 'react-in-viewport';
// import Splitting from "splitting";
const PortfolioIsotope = dynamic(
  () => import("../src/components/PortfolioIsotope"),
  {
    ssr: false,
  }
);
const Index = () => {

  const isInViewport = useRef(false)
  const componentRef = useRef(null);
  const test = useRef(null)


  useEffect(() => {

    const el = document.getElementById("home");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isInViewport.current = true
        } else {
          isInViewport.current = false
        }
      });
    });

    observer.observe(el);


    var lastScrollTop = 0;
    window.addEventListener("scroll", function () {
      var st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        if (window.pageYOffset > 100) test.current = false;

      } else if (st < lastScrollTop) {
        isInViewport.current && !test.current && scrollToTop()
      }
      lastScrollTop = st <= 0 ? 0 : st;
    }, false);

  }, []);



  function scrollToTop() {
    test.current = true;
    window.scrollTo({ top: 0, behavior: 'smooth' });

  }


  return (
    <Layout>
      <div className="wrapper" id="swipper">
        {/* Section Description */}
        <Swiper {...home1SliderProps} onReachEnd={e => {
          document.getElementById('home').scrollIntoView({ behavior: 'smooth', inline: 'start' })
        }} className="section hero-main-slider" autoplay={{
          reverseDirection: false,
          stopOnLastSlide: false
        }} >
          {
            data.map((item) => (
              <SwiperSlide className="swiper-slide" data-color="dark" key={item.id}
              >
                {/* image */}

                {item.videoLink ?
                  <div className="slide" style={{margin: "auto", display: 'flex', width: '100%', height: '100%', backgroundColor: '#000', justifyContent: 'center', alignItems: 'center'}}>

                    <video muted loop autoPlay src={item.videoLink} style={{width:'100%'}}/>
                  </div>
                  :
                  <div
                    className="slide background-image"
                    style={{backgroundImage: `url(${item.backgroundImage})`, backgroundSize:"100% ",backgroundRepeat:"no-repeat",backgroundPosition:"center", backgroundColor:"#353535" }}
                  />
                }
                {/* slide titles */}
                {
                  item.id !== 3 && (
                    <div className="slide-titles">
                      <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          {/* title */}
                          <div className="titles dark" style={{ color: "white" }}>
                            <div className="label scrolla-element-anim-1">{item.label}</div>
                            <div className="title">
                              <span
                                className="title-inner splitting-text-anim-2"
                                data-splitting=""
                              >
                                {item.title}
                              </span>
                            </div>
                            <div className="subtitle scrolla-element-anim-1">
                              {item.content}
                            </div>
                          </div>
                          <div className="more-bts">
                            <Link legacyBehavior href={item.projectLink}>
                              <a
                                data-splitting=""
                                className="btn more-btn scrolla-element-anim-1"
                              >
                                see details
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                  )
                }

              </SwiperSlide>
            ))}

          {/* pagination */}
          <div
            className="swiper-pagination scrolla-element-anim-1 scroll-animate swiper-pagination-bullets swiper-pagination-horizontal animate__active animate__animated"
            data-animate="active"
          />
          {/* navigation */}
          <div className="swiper-buttons">
            <div className="swiper-button-prev" />
            <div className="swiper-button-next" />
          </div>
        </Swiper>
      </div>
      {/* Home page*/}
      <div id="home" ref={componentRef} onClick={e => console.log(e)}>
        <div className="section section-inner started-heading" onScroll={e => console.log(e)}>
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 align-center col-lg-12">
                <div className="m-titles large">
                  <div
                    className="m-title scrolla-element-anim-1 scroll-animate floating"
                    data-animate="active"
                  >
                    Elevating Experiences
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div
                  className="description-text scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <p>
                    At Droot, we believe in the power of design, technology, and innovation to transform the way people<br /> interact with the world.

                    We’re a team of creative thinkers, developers, and strategists  with a<br /> passion for helping businesses create
                    engaging experiences that delight their customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <PortfolioIsotope />
      {/* Section Partners */}
      <Partners />
      {/* Footer */}
      <Footer />
      {/* Section Hero Main Slider */}

    </Layout>
  );
};
export default Index;




{/*
      <SwiperSlide className="swiper-slide" data-color="dark">
            {/* image *
            <div
              className="slide"
              style={{
                backgroundImage: "url(assets/images/started-n26-1920x1080.jpg)",
              }}
            />
            {/* slide titles 
            <div className="slide-titles">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  {/* title *
                  <div className="titles dark">
                    <div className="label scrolla-element-anim-1">branding</div>
                    <div className="title">
                      <span
                        className="title-inner splitting-text-anim-2"
                        data-splitting=""
                      >
                        Mela <br />
                        God
                      </span>
                    </div>
                    <div className="subtitle scrolla-element-anim-1">
                      Creativity is to discover a question that has never been
                      asked. If one brings up an idiosyncratic question, the
                      answer he gives will necessarily be unique as well.
                    </div>
                  </div>
                  <div className="more-bts">
                    <Link legacyBehavior href="/work-single">
                      <a
                        data-splitting=""
                        className="btn more-btn scrolla-element-anim-1"
                      >
                        see details
                        
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide" data-color="white">
            {/* image *
            <div
              className="slide"
              style={{
                backgroundImage: "url(assets/images/started-n15-1920x1080.jpg)",
              }}
            />
            {/* slide titles *
            <div className="slide-titles">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  {/* title *
                  <div className="titles">
                    <div className="label scrolla-element-anim-1">branding</div>
                    <div className="title">
                      <span
                        className="title-inner splitting-text-anim-2"
                        data-splitting=""
                      >
                        Blue denim
                      </span>
                    </div>
                    <div className="subtitle scrolla-element-anim-1">
                      Creativity is to discover a question that has never been
                      asked. If one brings up an idiosyncratic question, the
                      answer he gives will necessarily be unique as well.
                    </div>
                  </div>
                  <div className="more-bts">
                    <Link legacyBehavior href="/work-single">
                      <a
                        data-splitting=""
                        className="btn more-btn scrolla-element-anim-1"
                      >
                        see details
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide" data-color="white">
            {/* image *
            <div
              className="slide"
              style={{
                backgroundImage:
                  "url(assets/images/started-n2_4-1920x1080.jpg)",
              }}
            />
            {/* slide titles *
            <div className="slide-titles">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  {/* title *
                  <div className="titles">
                    <div className="label scrolla-element-anim-1">art</div>
                    <div className="title">
                      <span
                        className="title-inner splitting-text-anim-2"
                        data-splitting=""
                      >
                        The Dance
                      </span>
                    </div>
                    <div className="subtitle scrolla-element-anim-1">
                      Creativity is to discover a question that has never been
                      asked. If one brings up an idiosyncratic question, the
                      answer he gives will necessarily be unique as well.
                    </div>
                  </div>
                  <div className="more-bts">
                    <Link legacyBehavior href="/work-single">
                      <a
                        data-splitting=""
                        className="btn more-btn scrolla-element-anim-1"
                      >
                        see details
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide" data-color="white">
            {/* image *
            <div
              className="slide"
              style={{
                backgroundImage:
                  "url(assets/images/started-n14_1-1000x1080.jpg)",
              }}
            />
            {/* slide titles*
            <div className="slide-titles">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  {/* title *
                  <div className="titles">
                    <div className="label scrolla-element-anim-1">art</div>
                    <div className="title">
                      <span
                        className="title-inner splitting-text-anim-2"
                        data-splitting=""
                      >
                        Negative Space
                      </span>
                    </div>
                    <div className="subtitle scrolla-element-anim-1">
                      Creativity is to discover a question that has never been
                      asked. If one brings up an idiosyncratic question, the
                      answer he gives will necessarily be unique as well.
                    </div>
                  </div>
                  <div className="more-bts">
                    <Link legacyBehavior href="/work-single">
                      <a
                        data-splitting=""
                        className="btn more-btn scrolla-element-anim-1"
                      >
                        see details
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
  
        */}

