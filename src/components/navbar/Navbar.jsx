import logo from "../../assets/logo.svg";
import { IoMenu } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import { Link, Events, scrollSpy } from "react-scroll";
import React, { useEffect } from "react";
import MobileNav from "./MobileNav.jsx";

function Navbar() {
  useEffect(() => {
    // Updating scrollSpy when the component mounts.
    scrollSpy.update();

    // Returning a cleanup function to remove the registered events when the component unmounts.
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const changeNavBg = () => {
    const nav = document.querySelector("nav");

    if (window.scrollY >= 80) {
      nav.classList.add("shadow-xl");
    } else {
      nav.classList.remove("shadow-xl");
    }
  };

  window.addEventListener("scroll", changeNavBg);

  const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(false);

  useEffect(() => {
    if (isMobileNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileNavOpen]);

  const closeMobileNavOnWidth = () => {
    if (window.innerWidth > 639) {
      setIsMobileNavOpen(false);
    }
  };

  window.addEventListener("resize", closeMobileNavOnWidth);

  const navItems = ["About", "Feature", "Pricing", "Testimonial"];

  return (
    <>
      <MobileNav
        isMobileNavOpen={isMobileNavOpen}
        setIsMobileNavOpen={setIsMobileNavOpen}
        navItems={navItems}
      />

      <div className="bg-background w-full sticky top-0 z-30">
        <nav className="flex items-center h-20 text-text px-6 py-4 sm:px-12 lg:px-36 transition ease-out duration-500">
          <img
            src={logo}
            alt="WestVPN logo"
            className="h-10 cursor-pointer sm:mr-auto md:mr-6 lg:mr-12"
          />

          <ul className="hidden sm:flex sm:gap-5 md:gap-2 lg:gap-6 text-gray-700">
            {navItems.map((item) => (
              <li key={item}>
                <Link
                  className="nav-item"
                  activeClass="active-nav-item"
                  to={item}
                  spy={true}
                  smooth={true}
                  offset={10}
                  duration={500}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 ml-auto md:flex">
            <a href="" className="font-medium hover:text-accent">
              Sign In
            </a>
            <button className="secondary-button">Sign Up</button>
          </div>
          {isMobileNavOpen ? (
            <IoIosClose
              className="sm:hidden icon-button ml-auto"
              onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
            />
          ) : (
            <IoMenu
              className="sm:hidden icon-button ml-auto"
              onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
            />
          )}
        </nav>
      </div>
    </>
  );
}

export default Navbar;
