
import Footer from "../../src/layout/Footer";
import Layout from "../../src/layout/Layout";
import Image from 'next/image';
import baj2 from '../../public/assets/images/baj2.webp';
import baj33 from '../../public/assets/images/baj33.jpg';
import baj4 from '../../public/assets/images/baj4.webp';

const WorkSingle = () => {
  return (
    <Layout>
      <div className="wrapper" style={{backgroundColor:"#2f2f2f"}}>
        <div className="section section-inner started-heading">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
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
                    Bhaskar Jyoti Solar
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
          <div>
            <Image className="img js-parallax"
              src={baj33}
              alt="baj33"
              style={{height:"100%"}}
            />
          </div>
        </div>
        <div className="section section-inner m-details">
          <div className="container">
            <div className="details-box">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                  <div className="details-label">
                    <strong>Client</strong> Bhaskar Jyoti
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                  <div className="details-label">
                    <strong>Category</strong> Design & Technology
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                  <div className="details-label">
                    <strong>Year</strong> 2021
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                  <div className="details-label">
                    <strong>Website</strong> <a href="https://bhaskarjyoti.com/" target="_blank">bhaskarjyoti</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section section-inner m-gallery">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="works-item">
                  <div
                    className="image scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="img">
                        <Image
                          src={baj2}
                          alt="baj2"
                          style={{width:"100%", height:"auto"}}
                        />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="works-item">
                  <div
                    className="image scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="img">
                        <Image
                          src={baj4}
                          alt="baj4"
                          style={{width:"100%", height:"auto"}}
                        />
                    </div>
                  </div>
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
