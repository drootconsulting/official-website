import Layout from "../../../src/layout/Layout";
import Link from "next/link";
import brandingPic from '../../../public/assets/images/branding.svg';
import strategyPic from '../../../public/assets/images/strategy.svg';
import digitalPic from '../../../public/assets/images/digital.svg';
import Image from "next/image";

const ServicesSection = () => {
  return (
      <div className="section section-inner m-services">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 align-left col-lg-12">
              <div className="m-titles">
                <h2
                  className="m-title scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  Our Services
                </h2>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="services-items row">
                <div className="services-col col-xs-12 col-sm-6 col-md-6 col-lg-4">
                  <div
                    className="services-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div>
                      <Image
                        src={strategyPic}
                        alt="strategy"
                        width="80"
                        height="80"
                      />
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
                    data-animate="active"
                  >
                    <div>
                      <Image
                        src={brandingPic}
                        alt="design"
                        width="80"
                        height="80"
                      />
                    </div>

                    <div className="name">Branding & Design</div>
                    <div className="text">
                      Act or occupation of writing text for the purpose of
                      advertising or other forms of marketing.
                    </div>
                  </div>
                </div>
                <div className="services-col col-xs-12 col-sm-6 col-md-6 col-lg-4">
                  <div
                    className="services-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div>
                      <Image
                        src={digitalPic}
                        alt="digital development"
                        width="80"
                        height="80"
                      />
                    </div>
                    <div className="name">Digital Development</div>
                    <div className="text">
                      Focused on creating, publishing, and distributing content
                      for a targeted audience online.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="view-more-section">
            <Link legacyBehavior href="/services">
              <button className="view-more-btn">View More</button>
            </Link>
          </div>
        </div>
      </div>
  );
};
export default ServicesSection;
