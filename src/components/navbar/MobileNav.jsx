import { useEffect } from "react";
import { Link, Events, scrollSpy } from "react-scroll";

export default function MobileNav({
  isMobileNavOpen,
  setIsMobileNavOpen,
  navItems,
}) {
  useEffect(() => {
    const mobileNav = document.getElementById("mobileNav");
    if (isMobileNavOpen) {
      mobileNav.classList.remove("translate-x-full");
      mobileNav.classList.add("translate-x-0");
    } else {
      mobileNav.classList.remove("translate-x-0");
      mobileNav.classList.add("translate-x-full");
    }
  }, [isMobileNavOpen]);

  useEffect(() => {
    // Updating scrollSpy when the component mounts.
    scrollSpy.update();

    // Returning a cleanup function to remove the registered events when the component unmounts.
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  return (
    <div
      id="mobileNav"
      className="fixed z-10 bg-background w-full ease-in-out duration-500 top-20 right-0 translate-x-full"
    >
      <div className="h-screen flex flex-col">
        <ul className="mx-6 my-2 flex flex-col gap-2">
          {navItems.map((item) => (
            <li key={item} className="flex">
              <Link
                onClick={() => setIsMobileNavOpen(false)}
                className="nav-item--mobile"
                activeClass="active-nav-item--mobile"
                to={item}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
        <button
          onClick={() => setIsMobileNavOpen(false)}
          className="mt-auto mb-32 secondary-button mx-auto"
        >
          Sign In
        </button>
      </div>
    </div>
  );
}
