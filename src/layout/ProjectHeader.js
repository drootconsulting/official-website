import Link from "next/link";
import { useEffect, useState } from "react";
import Image from 'next/image';
import drootLogoPic from '../../public/assets/images/drootlogoW.png';

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
      let lastScrollY = window.pageYOffset;
      // function to run on scroll
      const updateScrollDirection = () => {
          const scrollY = window.pageYOffset;
          const direction = lastScrollY > 80 ? "down" : "up";
          if (direction !== scrollDirection) {
            setScrollDirection(direction);
          }
          lastScrollY = scrollY > 0 ? scrollY : 0;
      };
      window.addEventListener("scroll", updateScrollDirection); // add event listener
      return () => {
          window.removeEventListener("scroll", updateScrollDirection); // clean up
      }
  }, [scrollDirection]); // run when scroll direction changes

  return scrollDirection;
};


const ProjectHeader = () => {
  const scrollDirection = useScrollDirection();

  useEffect(() => {
    document.querySelector("body").classList.remove("no-scroll");
  }, []);

  return (
    <header className="header " >
      <div className="header__builder">
        {/* logo */}
        <div className="logo-image" style={{display: scrollDirection==="down"?"none":"block"}}>
          <Link legacyBehavior href="/">
            <a>
              <Image src={drootLogoPic} alt="logo" style={{width:"150px" ,height:"50px"}} className="img"/>
            </a>
          </Link>
        </div>
        {/* menu btn */}
        <div className="menu-btn">
          <button  className="btnn">Menu</button> 
            <div className="dropdown_menu dropdown_menu--animated  dropdown_menu-8">
              <a href="/">Home</a>
              <a href="/about">Our Story</a>
              <a href="/works-2-column">Works</a>
              <a href="/contacts">Contact Us</a>
            </div>
        </div>
      </div> 
    </header>
  );
};
export default ProjectHeader;
