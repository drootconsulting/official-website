import Layout from "../src/layout/Layout";
import Link from "next/link";
import dynamic from "next/dynamic";
import HeroSwiper from "../src/components/home/HeroSwiper";
import ServicesSection from "../src/components/home/ServicesSection";
import Clients from "../src/components/Clients";
const Projects = dynamic(
  () => import("../src/components/ProjectsCard"),
  {
    ssr: false,
  }
);
const Index = () => {
  return (
    <Layout>
      <HeroSwiper />
      <div id="home">
        <div className="section section-inner started-heading">
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
                  <p align="justify" style={{ color: "#f4f4f7" }}>
                    At Droot, we believe in the power of design, technology, and
                    innovation to transform the way people interact with the
                    world. We're a team of creative thinkers, developers, and
                    strategists with a passion for helping businesses create
                    engaging experiences that delight their customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ServicesSection />
      </div>
      <div className="container">
        <div className="m-titles">
          <h2
            className="m-title scrolla-element-anim-1 scroll-animate"
            data-animate="active"
          >
            Projects
          </h2>
        </div>
      </div>
      <Projects />
      <div className=" view-more-projects" data-animate="active">
        <div className="container">
          <div className="view-more-section">
            <Link legacyBehavior href="/work">
              <button className="view-more-btn">
                View More
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Clients />
    </Layout>
  );
};
export default Index;
