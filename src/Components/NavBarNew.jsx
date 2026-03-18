import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import menuIcon from "../../public/menu.png";
import closeIcon from "../../public/close.png";


gsap.registerPlugin(ScrollTrigger);

const navLinks = ["OUR WORK", "ABOUT US", "OUR TEAM", "BLOG"];

const NavBarNew = () => {

  const menuRef = useRef(null);
  const navBarRef = useRef(null);

  useGSAP(() => {
    gsap.set(menuRef.current, { y: "-100vh" });
    gsap.set(".nav-link", { y: 60, opacity: 0 });
    gsap.set(".nav-cta", { opacity: 0, y: 20 });

    // Hide the navbar top bar when Projects section enters the viewport
    ScrollTrigger.create({
      trigger: ".projects-section",
      start: "top top", 
      onEnter: () => gsap.to(navBarRef.current, { opacity: 0, duration: 0.3, pointerEvents: "none" }),
      onLeaveBack: () => gsap.to(navBarRef.current, { opacity: 1, duration: 0.3, pointerEvents: "auto" }),
    });
  });

  const openMenu = () => {
    document.body.style.overflow = "hidden";

    const tl = gsap.timeline();
    tl.to(menuRef.current, { y: "0", duration: 0.6, ease: "power3.out" })
      .to(".nav-link", {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.08,
        ease: "power3.out",
      }, "-=0.2")
      .to(".nav-cta", { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }, "-=0.2");
  };

  const closeMenu = () => {
    const tl = gsap.timeline();
    tl.to(".nav-link", { y: 40, opacity: 0, duration: 0.3, stagger: 0.05, ease: "power2.in" })
      .to(".nav-cta", { opacity: 0, y: 10, duration: 0.2 }, "<")
      .to(menuRef.current, {
        y: "-100vh",
        duration: 0.5,
        ease: "power3.in",
        onComplete: () => {
          document.body.style.overflow = "";
        },
      });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-100 w-screen">
      <div ref={navBarRef} className="px-6 md:px-24 mx-auto py-6 md:py-15 flex items-center justify-between relative">
        <img src="" alt="Rewise" className="h-10 md:h-12 w-auto logo" />

        <div className="cursor-pointer" onClick={openMenu}>
          <img className="w-10 h-10" src={menuIcon} alt="open menu" />
        </div>
      </div>

      {/* Full screen menu overlay */}
      <div
        ref={menuRef}
        className="fixed top-0 left-0 w-screen h-screen bg-[#007BFF] nav-menu px-6 md:px-15 py-6 md:py-15 flex flex-col justify-between"
      >
        {/* Top bar */}
        <div className="flex items-center justify-between">
          <img src="" alt="Rewise" className="h-10 md:h-12 w-auto" />
          <div className="cursor-pointer" onClick={closeMenu}>
            <img src={closeIcon} className="w-10 h-10" alt="close menu" />
          </div>
        </div>

        {/* Nav links */}
        <ul className="flex flex-col gap-2 md:gap-4 mt-8 md:mt-12 md:ml-50">
          {navLinks.map((link) => (
            <li
              key={link}
              className="nav-link text-4xl sm:text-5xl md:text-7xl font-bold overflow-hidden cursor-pointer leading-tight text-gray-100"
            >
              {link}
            </li>
          ))}
        </ul>

        {/* Bottom CTA */}
        <div className="nav-cta flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-auto pt-6 md:pt-10 border-t border-black/20">
          <p className="text-sm font-medium">Ready to level up?</p>
          <button className="bg-black text-white px-6 py-3 rounded-full text-sm font-semibold w-full sm:w-auto text-center">
            Let&apos;s talk!
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBarNew;
