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


const Header = () => {
  const scrollDirection = useScrollDirection();
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(null);
  const openMenuBar=()=>{
    setIsOpen(!isOpen);
  }
  useEffect(() => {
    
    document.querySelector("body").classList.remove("no-scroll");
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    
    // Set the initial window width
    setWindowWidth(window.innerWidth);

    // Add an event listener to update the window width whenever it changes
    window.addEventListener('resize', handleResize);

    // Remove the event listener when the component unmounts
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  console.log(windowWidth);
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
        
          {
            windowWidth<1100 ? ( <div className="menu-btn"><button  className="btnn"  onClick={openMenuBar}>Menu</button> 
            <div className="dropdown_menu dropdown_menu--animated  dropdown_menu-8" style={{display : isOpen ?"block":"none"}}>
              <a href="/">Home</a>
              <a href="/about">Our Story</a>
              <a href="/works-2-column">Works</a>
              <a href="/contacts">Contact </a>
            </div>
            </div>):(
              <div className="menu-btn"><button  className="btnn">Menu</button> 
              <div className="dropdown_menu dropdown_menu--animated  dropdown_menu-8">
                <a href="/">Home</a>
                <a href="/about">Our Story</a>
                <a href="/works-2-column">Works</a>
                <a href="/contacts">Contact</a>
              </div>
              </div>
            )
          }
      </div> 
    </header>
  );
};
export default Header;
