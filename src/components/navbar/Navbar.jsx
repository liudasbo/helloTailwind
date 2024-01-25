import logo from "../../assets/logo.svg";
import { IoMenu } from "react-icons/io5";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import React, { useEffect } from "react";
import MobileNav from "./MobileNav";

function Navbar() {
  useEffect(() => {
    // Registering the 'begin' event and logging it to the console when triggered.
    Events.scrollEvent.register("begin", (to, element) => {
      console.log("begin", to, element);
    });

    // Registering the 'end' event and logging it to the console when triggered.
    Events.scrollEvent.register("end", (to, element) => {
      console.log("end", to, element);
    });

    // Updating scrollSpy when the component mounts.
    scrollSpy.update();

    // Returning a cleanup function to remove the registered events when the component unmounts.
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  // Defining functions to perform different types of scrolling.
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const scrollToBottom = () => {
    scroll.scrollToBottom();
  };

  const scrollTo = () => {
    scroll.scrollTo(100); // Scrolling to 100px from the top of the page.
  };

  const scrollMore = () => {
    scroll.scrollMore(100); // Scrolling an additional 100px from the current scroll position.
  };

  // Function to handle the activation of a link.
  const handleSetActive = (to) => {
    // console.log(to);
  };

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

  const closeMobileNav = () => {
    if (window.innerWidth > 639) {
      setIsMobileNavOpen(false);
    }
  };

  window.addEventListener("resize", closeMobileNav);

  return (
    <>
      <div className="bg-background w-full sticky top-0">
        <MobileNav style={{ display: isMobileNavOpen ? "flex" : "none" }} />
        <nav className="flex items-center h-20 text-text px-6 py-4 sm:px-12 lg:px-24 transition ease-out duration-500">
          <img
            src={logo}
            alt="WestVPN logo"
            className="h-10 cursor-pointer sm:mr-auto md:mr-6 lg:mr-16"
          />

          <ul className="hidden sm:flex sm:gap-5 md:gap-2 lg:gap-6 text-gray-700">
            <li>
              <Link
                className="nav-item"
                activeClass="active-nav-item"
                to="About"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onSetActive={handleSetActive}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="nav-item"
                activeClass="active-nav-item"
                to="Feature"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onSetActive={handleSetActive}
              >
                Feature
              </Link>
            </li>
            <li>
              <Link
                className="nav-item"
                activeClass="active-nav-item"
                to="Pricing"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onSetActive={handleSetActive}
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                className="nav-item"
                activeClass="active-nav-item"
                to="Testimonial"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onSetActive={handleSetActive}
              >
                Testimonial
              </Link>
            </li>
          </ul>

          <div className="hidden items-center gap-3 ml-auto md:flex">
            <a href="" className="font-medium hover:text-accent">
              Sign In
            </a>
            <button className="secondary-button">Sign Up</button>
          </div>
          <IoMenu
            className="sm:hidden icon-button ml-auto"
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
          />
        </nav>
      </div>
    </>
  );
}

export default Navbar;
