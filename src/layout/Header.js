import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import drootLogoPic from "../../public/assets/images/drootlogoW.png";
import ReactGA from 'react-ga';
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
    window.addEventListener("scroll", updateScrollDirection);
    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, [scrollDirection]);

  return scrollDirection;
}

const Header = () => {
  const scrollDirection = useScrollDirection();
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(null);
  const openMenuBar = () => {
    ReactGA.event(isOpen, "Toggle Menu");
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    document.querySelector("body").classList.remove("no-scroll");
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="header ">
      <div className="header__builder">
        <div
          className="logo-image"
          style={{ display: scrollDirection === "down" ? "none" : "block" }}
        >
          <Link legacyBehavior href="/">
              <Image
                src={drootLogoPic}
                alt="logo"
                style={{ width: "150px", height: "50px" }}
                className="img"
              />
          </Link>
        </div>

        {windowWidth < 1100 ? (
          <div className="menu-btn">
            <button className ="btnn" onClick={openMenuBar}>
              Menu
            </button>
            <div
              className="dropdown_menu dropdown_menu--animated  dropdown_menu-8"
              style={{ display: isOpen ? "block" : "none" }}
            >
              <Link href ="/" onClick={()=>setIsOpen(false)}>Home</Link>
              <Link href="/about" onClick={()=>setIsOpen(false)}>Our Story</Link>
              <Link href="/services" onClick={()=>setIsOpen(false)}>Our Services</Link>
              <Link href="/work" onClick={()=>setIsOpen(false)}>Work</Link>
              <Link href="/contact" onClick={()=>setIsOpen(false)}>Contact </Link>
            </div>
          </div>
        ) : (
          <div className="menu-btn">
            <button className="btnn">Menu</button>
            <div className="dropdown_menu dropdown_menu--animated  dropdown_menu-8">
              <Link href="/">Home</Link>
              <Link href="/about">Our Story</Link>
              <Link href="/services">Our Services</Link>
              <Link href="/work">Work</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;
