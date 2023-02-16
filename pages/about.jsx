import { Swiper, SwiperSlide } from "swiper/react";
// import AboutVideo from "../src/components/AboutVideo";
import Footer from "../src/layout/Footer";
import Layout from "../src/layout/Layout";
import Partners from "../src/components/Partners";
import { jsTestimonials } from "../src/sliderProps";
import Image from "next/image";
import story from "../public/assets/images/story.jpg";
const About = () => {
  
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
                    className="h-title splitting-text-anim-2 scroll-animate"
                    data-splitting="chars"
                    data-animate="active"
                  >
                    Our Story
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Section Image Large */}

        <div
          className="section section-inner m-image-large scrolla-element-anim-1 scroll-animate"
          data-animate="active">
            <div className="container">
            <div className="row">
          <Image src={story} alt="story" style={{height:"auto"}}/>
        </div>
        </div>
        </div>
        <div
          className="section section-inner section-description scrolla-element-anim-1 scroll-animate"
          data-animate="active"
        >
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <h1>
                Transforming UX through Innovation & Technology
                  <br />
                  
                </h1>
              </div>
              <div align="justify">
              we are dedicated to elevating the way people interact with the world through the power of design, technology, and innovation. Our team of creative thinkers, developers, and strategists are passionate about helping businesses create engaging experiences that delight their customers.
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
             
              </div>
            </div>
          </div>
        </div>
        {/* Section Services */}
        <div className="section section-inner m-services">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 align-left col-lg-12">
                {/* titles */}
                <div className="m-titles">
                  <h2
                    className="m-title scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    Our Bag of Tricks
                  </h2>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                {/* services */}
                <div className="services-items row">
                  <div className="services-col col-xs-12 col-sm-6 col-md-6 col-lg-4">
                    <div
                      className="services-item scrolla-element-anim-1 scroll-animate"
                      data-animate="active">
                      <div className="icon">
                        <i aria-hidden="true" className="far fa-object-group" />
                      </div>
                      <div className="name">Strategy</div>
                      <div className="text">
                        Design process relating to the front-end (client side)
                        design of a website including writing.
                      </div>
                    </div>
                  </div>
                  <div className="services-col col-xs-12 col-sm-6 col-md-6 col-lg-4">
                    <div
                      className="services-item scrolla-element-anim-1 scroll-animate"
                      data-animate="active">
                      <div className="icon">
                        <i aria-hidden="true" className="fas fa-copyright" />
                      </div>
                      <div className="name">Design</div>
                      <div className="text">
                        Act or occupation of writing text for the purpose of
                        advertising or other forms of marketing.
                      </div>
                    </div>
                  </div>
                  <div className="services-col col-xs-12 col-sm-6 col-md-6 col-lg-4">
                    <div
                      className="services-item scrolla-element-anim-1 scroll-animate"
                      data-animate="active">
                      <div className="icon">
                        <i aria-hidden="true" className="fas fa-chart-bar" />
                      </div>
                      <div className="name">Software Development</div>
                      <div className="text">
                        Focused on creating, publishing, and distributing
                        content for a targeted audience online.
                      </div>
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
                    Our Pinnacle Pursuits
                  </div>
                  <div align="justify">
                        We believe in the power of collaboration
                        and are always looking for new ways to
                        work together. We invite you to join us in
                        our mission to create beautiful, engaging
                        experiences for our clients and their
                        customers.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section section-inner m-testimonials">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 align-left col-lg-12">
                {/* titles */}
                <div className="m-titles">
                  <h2
                    className="m-title scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    Client says
                  </h2>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                {/* Carousel */}
                <Swiper
                  {...jsTestimonials}
                  className="swiper-container js-testimonials"
                >
                  {/* Testimonials item */}
                  <SwiperSlide className="testimonials-item swiper-slide">
                    <div
                      className="scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="desc">
                        <div className="title">Bibhuti R. Dubey</div>
                        <div className="name">Co-Founder</div>
                        <div className="name">Slnko Energy</div>
                        <div className="text">
                          Creativity and understanding of customer's
                          psychology is what we loved about Droot.
                          Throughout the development whenever we asked
                          for a design change, they patiently listen to us,
                          understood our requirements and came up with a
                          better design than what we expected.
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  {/* Testimonials item */}
                  <SwiperSlide className="testimonials-item swiper-slide">
                    <div
                      className="scrolla-element-anim-1 scroll-animate"
                      data-animate="active">
                      <div className="desc">
                        <div className="title">Monalisha</div>
                        <div className="name">Executive Assistant</div>
                        <div className="name">Elworld Organic</div>
                        <div className="text">
                          It was a great experience to get our website
                          designed from Droot. The services were on time as
                          promised with smoother website experience.
                          Thanks to the entire Droot team.
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  {/* Testimonials item */}
                  <SwiperSlide className="testimonials-item swiper-slide">
                    <div
                      className="scrolla-element-anim-1 scroll-animate"
                      data-animate="active">
                      <div className="desc">
                        <div className="title">Amit Mishra</div>
                        <div className="name">Founder</div>
                        <div className="name">Big D cafe</div>
                        <div className="text">
                          Droot provides us best marketing support for our
                          company. Team is excellent with innovative minds.
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  {/* Testimonials item */}
                  <SwiperSlide className="testimonials-item swiper-slide">
                    <div
                      className="scrolla-element-anim-1 scroll-animate"
                      data-animate="active">

                    </div>
                  </SwiperSlide>
                  {/* Pagination  */}
                  <div className="swiper-pagination" />
                </Swiper>
                {/* /Carousel */}
              </div>
            </div>
          </div>
        </div>
        {/* Section Partners */}
        <Partners description={true}/>
      </div>
      {/* Footer */}
      <Footer />
    </Layout>
  );
};
export default About;
