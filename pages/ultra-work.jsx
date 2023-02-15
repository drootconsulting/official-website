import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import Footer from "../src/layout/Footer";
import Layout from "../src/layout/Layout";
import { mGalleryCarousel } from "../src/sliderProps";
import Image from 'next/image';
import u1 from '../public/assets/images/u1.webp';
import u2 from '../public/assets/images/ub2.webp';
import u3 from '../public/assets/images/u3.webp';
import u4 from '../public/assets/images/u4.webp';
const WorkSingle = () => {
  return (
    <Layout>
      <div className="wrapper">
        {/* Section Started Heading */}
        <div className="section section-inner started-heading">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                {/* titles */}
                <div className="h-titles">
                  <div
                    className="h-subtitle red splitting-text-anim-1 scroll-animate"
                    data-splitting="chars"
                    data-animate="active">
                    Rebranding and Web Development
                  </div>
                  <div
                    className="h-title splitting-text-anim-2 scroll-animate"
                    data-splitting="chars"
                    data-animate="active"
                  >
                    Ultra
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Section Image Large */}
        <div
          className="section section-inner m-image-large scrolla-element-anim-1 scroll-animate"
          data-animate="active"
        >
          <div>
            {/* <div
              className="img js-parallax"
              style={{ backgroundImage: "url(assets/images/downtownDesc1.webp)" }}
            /> */}
            <video className="img js-parallax"
              src="assets/videos/ultraVideo.mp4"
              alt="u1" muted loop autoPlay style={{width:"100%",height:'100%'}}/>
          </div>
        </div>
        {/* Section Details */}
        <div className="section section-inner m-details">
          <div className="container">
            <div className="details-box">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                  <div className="details-label">
                    <strong>Client</strong> Ultrarate
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                  <div className="details-label">
                    <strong>Category</strong> Rebranding and Web Development
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                  <div className="details-label">
                    <strong>Year</strong> 2021
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                  <div className="details-label">
                    <strong>Website</strong>  <a href="https://ultraservices.in/" target="_blank">ultraservices.in</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Section Description */}
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
                  Ultrarate is a leading solar energy company in India, dedicated to providing innovative and smart energy management solutions to power various industries, residences, computer labs, and agriculture. As the company continues to grow and expand its services, they saw the need for a new brand identity that would better represent their brand and communicate their values to their customers.
                  </p>
                  <p align="justify">
                  Our team was tasked with the complete rebranding of Ultrarate, including a new logo design, website design, and development, as well as the creation of brand collaterals such as business cards and brochures. The goal of the project was to create a brand that was modern, professional, and reflected Ultrarate's commitment to delivering high-quality solar energy solutions to their customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Section Gallery */}
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
                        <Image
                          src={u2}
                          alt="ultra"
                          style={{width:"100%", height:"100%"}}
                        />
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
                        <Image
                          src={u3}
                          alt="ultra"
                          style={{width:"100%", height:"100%"}}
                        />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Section Description */}
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
                  The rebranding and web development project for Ultrarate was a complete success, delivering a new brand identity that better represents the company's values and capabilities. The new website and brand materials have helped Ultrarate to communicate their message more effectively and to build stronger relationships with their customers. Our team is proud to have been a part of Ultrarate's continued growth and success, and we look forward to working with them in the future.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Section Gallery Carousel */}
        {/* Section Navigation */}
      </div>
      <Footer />
    </Layout>
  );
};
export default WorkSingle;
