import Layout from "../src/layout/Layout";
import dynamic from "next/dynamic";
import Partners from "../src/components/Partners";
import Footer from "../src/layout/Footer";
import Scomp from '../src/components/SwiperComponent';
const PortfolioIsotope = dynamic(
  () => import("../src/components/PortfolioIsotope"),
  {
    ssr: false,
  }
);
const SwiperComp = dynamic(() => import('../src/components/SwiperComponent'), {
  // loading: () => 'Loading...',
  ssr: false,
})
const Index = () => {

  return (

    <Layout>
      {/* scrollIntoIntroView={scrollIntoIntroView} */} 
    <Scomp />
      {/* Home page*/}
      {/* ref={componentRef} */}
      <div id="home"  >
        <div className="section section-inner started-heading" >
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 align-center col-lg-12">
                <div className="m-titles large">
                  <div
                    className="m-title scrolla-element-anim-1 scroll-animate floating"
                    data-animate="active"
                  >
                    Building Authentic Experiences
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div
                  className="description-text scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <p align="justify">
                    At Droot, we believe in the power of design, technology, and innovation to transform the way people interact with the world.
                    We’re a team of creative thinkers, developers, and strategists  with a passion for helping businesses create
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






