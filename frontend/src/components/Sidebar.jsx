import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Profile from "../assets/img/profile-img.png";
import "../assets/css/style.css";

const Sidebar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);

  // Detect screen resize and update state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Menu icon for mobile view */}
      {isMobile && (
        <div className="mobile-menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </div>
      )}

      {/* Sidebar (visible on large screens or when mobile menu is open) */}
      <aside
        className={`sidebar d-flex flex-column ${
          isMobile ? (menuOpen ? "show-sidebar" : "hide-sidebar") : ""
        }`}
      >
        <div className="profile text-center">
          <img
            src={Profile}
            alt="Profile"
            className="img-fluid rounded-circle"
          />
          <h1 className="text-light mt-2">
            <a href="#hero">Hirushi Siriwardhana</a>
          </h1>
          <div className="social-links mt-3">
            <a
              href="https://linkedin.com/in/hirushi-siriwardhana-392754285"
              className="linkedin"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
            <a href="https://github.com/Hirushiviranga" className="github">
              <i className="bx bxl-github"></i>
            </a>
          </div>
        </div>

        <nav id="navbar" className="nav-menu mt-4">
          <ul>
            <li>
              <a href="#hero" className="nav-link scrollto active">
                <i className="bx bx-home"></i> <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#about" className="nav-link scrollto">
                <i className="bx bx-user"></i> <span>About</span>
              </a>
            </li>
            <li>
              <a href="#resume" className="nav-link scrollto">
                <i className="bx bx-file-blank"></i> <span>Resume</span>
              </a>
            </li>
            <li>
              <a href="#portfolio" className="nav-link scrollto">
                <i className="bx bx-book-content"></i> <span>Portfolio</span>
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link scrollto">
                <i className="bx bx-envelope"></i> <span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;


