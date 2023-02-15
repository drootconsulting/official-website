import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import Footer from "../src/layout/Footer";
import Layout from "../src/layout/Layout";
import { mGalleryCarousel } from "../src/sliderProps";
import Image from 'next/image';
import slnkoPic1 from '../public/assets/images/vbrochure.jpg';
import slnkoPic2 from '../public/assets/images/vbrochure2.jpg';
import slnkoPic3 from '../public/assets/images/vbrochure3.jpg';
import slnkoPic4 from '../public/assets/images/vbrochure4.jpg';
import slnkoPic5 from '../public/assets/images/vbrochure5.jpg';

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
                    Design & Technology
                  </div>
                  <div
                    className="h-title splitting-text-anim-2 scroll-animate"
                    data-splitting="chars"
                    data-animate="active"
                  >
                    Slnko Energy
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
              src={slnkoPic2}
              alt="slnko desc"
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
                    <strong>Client</strong> Slnko Energy
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                  <div className="details-label">
                    <strong>Category</strong> Design & Technology
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                  <div className="details-label">
                    <strong>Year</strong> 2020
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                  <div className="details-label">
                    <strong>Website</strong> <a href="https://slnkoenergy.com/" target="_blank">slnkoenergy.com</a>
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
                  Our client, Slnko Energy, is a leading provider of project management services for solar energy projects. Their goal is to offer a comprehensive solution for clients looking to implement smart and eco-friendly power solutions. Our team was tasked with managing all aspects of design, branding, and software development for the company, including the development of a visually appealing website and a project management software, "Protrac", to manage construction projects.
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
                          src={slnkoPic4}
                          alt="slnko cycle"
                          style={{width:"100%", height:"auto"}}
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
                          src={slnkoPic3}
                          alt="slnko desc"
                          style={{width:"100%", height:"auto"}}
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
                  The final deliverables for this project included a fully functional website, the "Protrac" project management software, and a comprehensive set of brand collaterals, including business cards and social media creatives. We also provided ongoing support and maintenance services to ensure that the website and software continue to meet the needs of the company and its clients.
                  </p>
                  <p align="justify">
                  Overall, this project was a success, and we are proud to have contributed to Slnko Energy's continued growth and success in the solar energy industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Section Gallery Carousel */}
      </div>
      <Footer />
    </Layout>
  );
};
export default WorkSingle;
