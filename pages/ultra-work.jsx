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
                    Photography
                  </div>
                  <div
                    className="h-title splitting-text-anim-2 scroll-animate"
                    data-splitting="chars"
                    data-animate="active"
                  >
                    Astronaut
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
          <div className="image">
            {/* <div
              className="img js-parallax"
              style={{ backgroundImage: "url(assets/images/downtownDesc1.webp)" }}
            /> */}
            <Image className="img js-parallax"
              src={u1}
              alt="u1"
            />
          </div>
        </div>
        {/* Section Details */}
        <div className="section section-inner m-details">
          <div className="container">
            <div className="details-box">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                  <div className="details-label">
                    <strong>Client</strong> Envato
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                  <div className="details-label">
                    <strong>Category</strong> Photography
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                  <div className="details-label">
                    <strong>Year</strong> 2020
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                  <div className="details-label">
                    <strong>Website</strong> bslthemes.com
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
                  <p>
                    It is not enough that we build products that function, that
                    are understandable and usable, we also need to build
                    products that bring joy and excitement, pleasure and fun,
                    and, yes, beauty to people’s lives. Creativity is to
                    discover a question that has never been asked. If one brings
                    up an idiosyncratic question, the answer he gives will
                    necessarily be unique as well.
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
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <div className="works-item">
                  <div
                    className="image scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="img">
                      <a
                        href="assets/images/started-n12-920x1080.jpg"
                        className="has-popup-image"
                      >
                        <Image
                          src={u2}
                          alt="ultra"
                          style={{width:"100%", height:"100%"}}
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <div className="works-item">
                  <div
                    className="image scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="img">
                      <a
                        href="assets/images/started-n15-920x1080.jpg"
                        className="has-popup-image"
                      >
                        <Image
                          src={u3}
                          alt="ultra"
                          style={{width:"100%", height:"100%"}}
                        />
                      </a>
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
                  <p>
                    It is not enough that we build products that function, that
                    are understandable and usable, we also need to build
                    products that bring joy and excitement, pleasure and fun,
                    and, yes, beauty to people’s lives. Creativity is to
                    discover a question that has never been asked. If one brings
                    up an idiosyncratic question, the answer he gives will
                    necessarily be unique as well.
                  </p>
                  <p>
                    Creativity is to discover a question that has never been
                    asked. If one brings up an idiosyncratic question, the
                    answer he gives will necessarily be unique as well.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Section Gallery Carousel */}

        <div className="section section-inner m-gallery">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <div className="works-item">
                  <div
                    className="image scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="img">
                      <a
                        href="assets/images/started-n12-920x1080.jpg"
                        className="has-popup-image"
                      >
                        <Image
                          src={u4}
                          alt="ultra"
                          style={{width:"100%", height:"100%"}}
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <div className="works-item">
                  <div
                    className="image scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="img">
                      <a
                        href="assets/images/started-n15-920x1080.jpg"
                        className="has-popup-image"
                      >
                        {/* <video muted loop autoPlay src="assets/videos/ultraVideo.mp4"/> */}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div
          className="section section-inner m-gallery-carousel scrolla-element-anim-1 scroll-animate"
          data-animate="active"
        >
          <div className="container">
            <Swiper {...mGalleryCarousel} className="swiper-container">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <img src="assets/images/started-n2_4.jpg" alt="Image #1" />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <img src="assets/images/started-n20.jpg" alt="Image #2" />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <img src="assets/images/started-n14.jpg" alt="Image #3" />
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div> */}
        {/* Section Navigation */}
        <div className="section section-inner m-page-navigation">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="h-titles h-navs">
                  <Link legacyBehavior href="/work-single">
                    <a>
                      <span
                        className="nav-arrow scrolla-element-anim-1 scroll-animate"
                        data-animate="active"
                      >
                        Next Project
                      </span>
                      <span
                        className="h-title splitting-text-anim-2 scroll-animate"
                        data-splitting="chars"
                        data-animate="active"
                      >
                        Astronaut
                      </span>
                    </a>
                  </Link>
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
