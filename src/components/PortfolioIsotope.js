import Isotope from "isotope-layout";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
import Image from 'next/image';
import downtownPic from '../../public/assets/images/downtown-.webp';
import bhaskarPic from '../../public/assets/images/bhaskar--jyoti.webp';
import ultra from '../../public/assets/images/ultra.webp';
import slnkoPic from '../../public/assets/images/slnko-.webp';
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
          {/* works items */}
          <div className="works-items row column-2-offset">
            <div className="works-col col-xs-12 col-sm-6 col-md-6 col-lg-6 sorting-photography">
              <div className="works-item">
                <Link legacyBehavior href="/projects/downtown-club">
                  <a>
                    <span className="image">
                      <span className="img">
                        <Image
                          src={downtownPic}
                          alt="Downtown Club"
                          style={{ height: '100%', width: '100%' }}
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
                        Downtown Club
                      </span>
                    </span>
                  </a>
                </Link>
              </div>
            </div>
            <div className="works-col col-xs-12 col-sm-6 col-md-6 col-lg-6 sorting-art">
              <div className="works-item">
                <Link legacyBehavior href="/projects/bhaskar-jyoti">
                  <a>
                    <span className="image">
                      <span className="img">
                        <Image
                          src={bhaskarPic}
                          alt="Bhaskar Jyoti"
                          style={{ height: '100%', width: '100%' }}
                        />
                      </span>
                    </span>
                    <span className="desc">
                      <span
                        className="category splitting-text-anim-4 scroll-animate"
                        data-splitting="chars"
                        data-animate="active"
                      >
                        Design & Technology
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
            
            <div className="works-col col-xs-12 col-sm-6 col-md-6 col-lg-6 sorting-art">
              <div
                className="works-item scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <Link legacyBehavior href="/projects/ultra">
                  <a>
                    <span className="image">
                      <span className="img">
                        <Image
                          src={ultra}
                          alt="ultra"
                          style={{ height: '100%', width: '100%' }}
                        />
                      </span>
                    </span>
                    <span className="desc">
                      <span
                        className="category splitting-text-anim-4 scroll-animate"
                        data-splitting="chars"
                        data-animate="active"
                      >
                        Rebranding and Web Development
                      </span>
                      <span
                        className="name splitting-text-anim-4 scroll-animate"
                        data-splitting="words"
                        data-animate="active"
                      >
                        Ultra
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
                <Link legacyBehavior href="/projects/slnko-energy">
                  <a>
                    <span className="image">
                      <span className="img">
                        <Image
                          src={slnkoPic}
                          alt="slnko"
                          style={{ height: '100%', width: '100%' }}
                        />
                      </span>
                    </span>
                    <span className="desc">
                      <span
                        className="category splitting-text-anim-4 scroll-animate"
                        data-splitting="chars"
                        data-animate="active"
                      >
                        Design & Technology
                      </span>
                      <span
                        className="name splitting-text-anim-4 scroll-animate"
                        data-splitting="words"
                        data-animate="active"
                      >
                        Slnko
                      </span>
                    </span>
                  </a>
                </Link>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default PortfolioIsotope;
