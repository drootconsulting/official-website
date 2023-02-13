import Isotope from "isotope-layout";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
import Image from 'next/image'
const PortfolioIsotope = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  const [showLoading, setShowLoading] = useState(false);
  let timer1 = setTimeout(() => setShowLoading(true), 1000);
  useEffect(() => {
    isotope.current = new Isotope(".works-items", {
      itemSelector: ".works-col",
      //    layoutMode: "fitRows",
      percentPosition: true,
      masonry: {
        columnWidth: ".works-col",
      },
      animationOptions: {
        duration: 750,
        easing: "linear",
        queue: false,
      },
    });
  }, [showLoading]);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };

  return (
    <Fragment>
      {/* Section Works */}
      <div className="section section-inner m-works">
        <div className="container">
          {/* filter */}
          
          <div className="filter-links">
          <Link legacyBehavior href="/work-single">
            <a onClick={handleFilterKeyChange("*")} data-filter="*">
             PROJECTS
            </a>
            </Link>
            {/* <a
              onClick={handleFilterKeyChange("sorting-print")}
              data-filter="sorting-print"
            >
              Software Development
            </a>
            <a
              onClick={handleFilterKeyChange("sorting-photography")}
              data-filter="sorting-photography"
            >
             Design
            </a>
            <a
              onClick={handleFilterKeyChange("sorting-branding")}
              data-filter="sorting-branding"
            >
              Strategies
            </a> */}
            {/* <a
              onClick={handleFilterKeyChange("sorting-art")}
              data-filter="sorting-art"
            >
              Art
            </a> */}
          </div>
          {/* works items */}
          <div className="works-items row column-2-offset">
            <div className="works-col col-xs-12 col-sm-6 col-md-6 col-lg-6 sorting-photography">
              <div className="works-item">
                <Link legacyBehavior href="/work-single">
                  <a>
                    <span className="image">
                      <span className="img">
                        <img
                          src="/assets/images/downtown-1.jpg"
                          alt="Downtown"
                          fill
                        />
                      </span>
                    </span>
                    <span className="desc">
                      <span
                        className="category splitting-text-anim-4 scroll-animate"
                        data-splitting="chars"
                        data-animate="active"
                      >
                        Application Development
                      </span>
                      <span
                        className="name splitting-text-anim-4 scroll-animate"
                        data-splitting="words"
                        data-animate="active"
                      >
                        The Downtown Club
                      </span>
                    </span>
                  </a>
                </Link>
              </div>
            </div>
            <div className="works-col col-xs-12 col-sm-6 col-md-6 col-lg-6 sorting-art">
              <div className="works-item">
                <Link legacyBehavior href="/work-single">
                  <a>
                    <span className="image">
                      <span className="img">
                        <img
                          src="/assets/images/bhaskar-jyoti.jpg"
                          alt="Bhaskar Jyoti"
                          fill
                        />
                      </span>
                    </span>
                    <span className="desc">
                      <span
                        className="category splitting-text-anim-4 scroll-animate"
                        data-splitting="chars"
                        data-animate="active"
                      >
                        Brand Design
                      </span>
                      <span
                        className="name splitting-text-anim-4 scroll-animate"
                        data-splitting="words"
                        data-animate="active"
                      >
                        Bhaskar Jyoti
                      </span>
                    </span>
                  </a>
                </Link>
              </div>
            </div>
            <div className="works-col col-xs-12 col-sm-6 col-md-6 col-lg-6 sorting-branding">
              <div
                className="works-item scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <Link legacyBehavior href="/work-single">
                  <a>
                    <span className="image">
                      <span className="img">
                        <img
                          src="/assets/images/nirmals-3.jpg"
                          alt="Nirmals"
                          fill
                        />
                      </span>
                    </span>
                    <span className="desc">
                      <span
                        className="category splitting-text-anim-4 scroll-animate"
                        data-splitting="chars"
                        data-animate="active"
                      >
                        Branding
                      </span>
                      <span
                        className="name splitting-text-anim-4 scroll-animate"
                        data-splitting="words"
                        data-animate="active"
                      >
                        Melanin Goddess
                      </span>
                    </span>
                  </a>
                </Link>
              </div>
            </div>
            {/* <div className="works-col col-xs-12 col-sm-6 col-md-6 col-lg-6 sorting-branding">
              <div
                className="works-item scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <Link legacyBehavior href="/work-single">
                  <a>
                    <span className="image">
                      <span className="img">
                        <img
                          src="assets/images/slnko-4.jpg"
                          alt="Slnko"
                        />
                      </span>
                    </span>
                    <span className="desc">
                      <span
                        className="category splitting-text-anim-4 scroll-animate"
                        data-splitting="chars"
                        data-animate="active"
                      >
                        Branding
                      </span>
                      <span
                        className="name splitting-text-anim-4 scroll-animate"
                        data-splitting="words"
                        data-animate="active"
                      >
                        Blue denim
                      </span>
                    </span>
                  </a>
                </Link>
              </div>
            </div> */}
            <div className="works-col col-xs-12 col-sm-6 col-md-6 col-lg-6 sorting-art">
              <div
                className="works-item scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <Link legacyBehavior href="/work-single">
                  <a>
                    <span className="image">
                      <span className="img">
                        <img
                          src="/assets/images/bigD-2.jpg"
                          alt="BigD"
                          fill
                        />
                      </span>
                    </span>
                    <span className="desc">
                      <span
                        className="category splitting-text-anim-4 scroll-animate"
                        data-splitting="chars"
                        data-animate="active"
                      >
                        Art
                      </span>
                      <span
                        className="name splitting-text-anim-4 scroll-animate"
                        data-splitting="words"
                        data-animate="active"
                      >
                        Negative space
                      </span>
                    </span>
                  </a>
                </Link>
              </div>
            </div>
            <div className="works-col col-xs-12 col-sm-6 col-md-6 col-lg-6 sorting-branding">
              <div
                className="works-item scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <Link legacyBehavior href="/work-single">
                  <a>
                    <span className="image">
                      <span className="img">
                        <img
                          src="/assets/images/slnko-4.jpg"
                          alt="Slnko"
                          fill
                        />
                      </span>
                    </span>
                    <span className="desc">
                      <span
                        className="category splitting-text-anim-4 scroll-animate"
                        data-splitting="chars"
                        data-animate="active"
                      >
                        Branding
                      </span>
                      <span
                        className="name splitting-text-anim-4 scroll-animate"
                        data-splitting="words"
                        data-animate="active"
                      >
                        Blue denim
                      </span>
                    </span>
                  </a>
                </Link>
              </div>
            </div>
            {/* <div className="works-col col-xs-12 col-sm-6 col-md-6 col-lg-6 sorting-print">
              <div
                className="works-item scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <Link legacyBehavior href="/work-single">
                  <a>
                    <span className="image">
                      <span className="img">
                        <img
                          src="assets/images/work-n3-900x900.jpg"
                          alt="Ferris Wheel"
                        />
                      </span>
                    </span>
                    <span className="desc">
                      <span
                        className="category splitting-text-anim-4 scroll-animate"
                        data-splitting="chars"
                        data-animate="active"
                      >
                        Print
                      </span>
                      <span
                        className="name splitting-text-anim-4 scroll-animate"
                        data-splitting="words"
                        data-animate="active"
                      >
                        Ferris Wheel
                      </span>
                    </span>
                  </a>
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default PortfolioIsotope;
