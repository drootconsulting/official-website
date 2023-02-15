import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import Footer from "../src/layout/Footer";
import Layout from "../src/layout/Layout";
import { mGalleryCarousel } from "../src/sliderProps";
import Image from 'next/image';
import baj1 from '../public/assets/images/baj1.webp';
import baj2 from '../public/assets/images/baj2.webp';
import baj33 from '../public/assets/images/baj33.jpg';
import baj4 from '../public/assets/images/baj4.webp';
import baj5 from '../public/assets/images/baj5.webp';
import baj6 from '../public/assets/images/baj5.webp';

const WorkSingle = () => {
  return (
    <Layout>
      <div className="wrapper" style={{backgroundColor:"#2f2f2f"}}>
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
                    Bhaskar Jyoti Solar
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
              src={baj33}
              alt="baj33"
              
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
        {/* <div className="section section-inner m-description">
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
        </div> */}
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
                        href="/"
                        className="has-popup-image"
                      >
                        <Image
                          src={baj2}
                          alt="baj2"
                          style={{width:"100%", height:"auto"}}
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
                        href="/"
                        className="has-popup-image"
                      >
                        <Image
                          src={baj4}
                          alt="baj4"
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
        {/* Section Description */}
        {/* <div className="section section-inner m-description">
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
        </div> */}
        {/* Section Gallery Carousel */}
        {/* Section Navigation */}
      </div>
      <Footer />
    </Layout>
  );
};
export default WorkSingle;
