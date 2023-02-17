import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import Footer from "../src/layout/Footer";
import Layout from "../src/layout/Layout";
import { mGalleryCarousel } from "../src/sliderProps";
import Image from 'next/image';
import downtownCard1 from '../public/assets/images/downtownCard1.png';
import downtownCycle from '../public/assets/images/downtownCycle.webp';
import downtownDesc from '../public/assets/images/downtownDesc1.webp';
import downtownDesc2 from '../public/assets/images/downtownDesc2.webp';
import downtownCards2 from '../public/assets/images/downtownCards2.webp';

const WorkSingle = () => {
  return (
    <Layout>
      <div className="wrapper">
        <div className="section section-inner started-heading">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="h-titles">
                  <div
                    className="h-subtitle red splitting-text-anim-1 scroll-animate"
                    data-splitting="chars"
                    data-animate="active">
                      Branding & Graphic Designs
                  </div>
                  <div
                    className="h-title splitting-text-anim-2 scroll-animate"
                    data-splitting="chars"
                    data-animate="active"
                  >
                    Nirmals Furnishings
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="section section-inner m-image-large scrolla-element-anim-1 scroll-animate"
          data-animate="active"
        >
          <div className="image">
            <Image className="img js-parallax"
              src={downtownCard1}
              alt="downtownCards"
            />
          </div>
        </div>
        <div className="section section-inner m-details">
          <div className="container">
            <div className="details-box">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                  <div className="details-label">
                    <strong>Client</strong> iNirmal Furnishings
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                  <div className="details-label">
                    <strong>Category</strong> Branding & Graphic Designs
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                  <div className="details-label">
                    <strong>Year</strong> 2022
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                  <div className="details-label">
                    <strong>Website</strong> <a href="https://nirmals.com/" target="_blank">nirmals.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section section-inner m-description">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 align-left col-lg-12">
                <div className="m-titles">
                  <div
                    className="m-title scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    Introduction
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div
                  className="description-text scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <p align="justify">
                  Downtown is a mobile application that connects independent brands with consumers, providing a unique and personalized shopping experience. Our team has been working on this project for over a year, leveraging cutting-edge technology to deliver a seamless and user-friendly platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section section-inner m-gallery">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div className="works-item">
                  <div
                    className="image scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="img">
                      <a
                        href="/"
                        className="has-popup-image"
                      >
                        <Image
                          src={downtownCycle}
                          alt="downtown cycle"
                          style={{width:"100%", height:"auto"}}
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div className="works-item">
                  <div
                    className="image scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="img">
                      <a
                        href="/"
                        className="has-popup-image"
                      >
                        <Image
                          src={downtownCards2}
                          alt="downtownCards2"
                          style={{width:"100%", height:"auto"}}
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section section-inner m-description">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 align-left col-lg-12">
                <div className="m-titles">
                  <div
                    className="m-title scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    Result
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div
                  className="description-text scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <p align="justify">
                  Our efforts have paid off, and the result is a high-quality mobile application that provides a discovery-led 
                  marketplace for independent brands in India. Downtown offers a reliable and stable platform for brands to 
                  showcase their products and connect with consumers, and app intuitive user interface makes it easy for 
                  consumers to discover and purchase products they love.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};
export default WorkSingle;
