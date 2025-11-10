import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// Components
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import About from "./components/About";
import Facts from "./components/Facts";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfoliosection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PortfolioDetails from "./components/PortfolioDetails";
import PortfolioDetails1 from "./components/PortFolioDetails1";
import PortfolioDetails2 from "./components/portfoliodetails2";
import PortfolioDetails3 from "./components/portfoliodetails3";
import PortfolioDetails4 from "./components/portfoliodetails4";
import PortfolioDetails5 from "./components/portfoliodetails5";
import PortfolioDetails6 from "./components/portfoliodetails6";
import PortfolioDetails7 from "./components/portfoliodetails7";
import PortfolioDetails8 from "./components/portfoliodetails8";
import PortfolioDetails9 from "./components/portfoliodetails9";
import Messages from "./components/messages";
import Login from "./components/login"; 
// Vendor JS
import AOS from "aos";
import GLightbox from "glightbox";
import Swiper from "swiper";
import Isotope from "isotope-layout";
import Typed from "typed.js";
import PureCounter from "@srexi/purecounterjs";

// ✅ Small helper to hide sidebar only on specific pages
function AppContent() {
  const location = useLocation();

  const noSidebarPaths = [
    "/portfoliodetails",
    "/portfoliodetails1",
    "/portfoliodetails2",
    "/portfoliodetails3",
    "/portfoliodetails4",
    "/portfoliodetails5",
    "/portfoliodetails6",
    "/portfoliodetails7",
    "/portfoliodetails8",
    "/portfoliodetails9",
    "/login",
    "/messages",

  ];

  const showSidebar = !noSidebarPaths.includes(location.pathname);

  return (
    <div className="app-container">
      {/* Sidebar - Hidden on Portfolio Details pages only */}
      {showSidebar && (
        <div className="sidebar">
          <Sidebar />
        </div>
      )}

      {/* Main Content (unchanged) */}
      <div className="main-content">
        <Hero />
        <main id="main">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <About />
                  <Facts />
                  <Skills />
                  <Resume />
                  <Portfolio />
                  <Contact />
                   <Footer />
                </>
              }
            />
            <Route path="/portfoliodetails" element={<PortfolioDetails />} />
            <Route path="/portfoliodetails1" element={<PortfolioDetails1 />} />
            <Route path="/portfoliodetails2" element={<PortfolioDetails2 />} />
            <Route path="/portfoliodetails3" element={<PortfolioDetails3 />} />
            <Route path="/portfoliodetails4" element={<PortfolioDetails4 />} />
            <Route path="/portfoliodetails5" element={<PortfolioDetails5 />} />
            <Route path="/portfoliodetails6" element={<PortfolioDetails6 />} />
            <Route path="/portfoliodetails7" element={<PortfolioDetails7 />} />
            <Route path="/portfoliodetails8" element={<PortfolioDetails8 />} />
            <Route path="/portfoliodetails9" element={<PortfolioDetails9 />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        
      </div>
    </div>
  );
}

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true, mirror: false });
    new PureCounter();
    GLightbox({ selector: ".portfolio-lightbox" });

    new Swiper(".portfolio-details-slider", {
      speed: 400,
      loop: true,
      autoplay: { delay: 5000, disableOnInteraction: false },
      pagination: { el: ".swiper-pagination", type: "bullets", clickable: true },
    });

    /*new Swiper(".testimonials-slider", {
      speed: 600,
      loop: true,
      autoplay: { delay: 5000, disableOnInteraction: false },
      slidesPerView: "auto",
      pagination: { el: ".swiper-pagination", type: "bullets", clickable: true },
      breakpoints: { 320: { slidesPerView: 1, spaceBetween: 20 }, 1200: { slidesPerView: 3, spaceBetween: 20 } },
    });*/

    const typedEl = document.querySelector(".typed");
    if (typedEl) {
      const strings = typedEl.getAttribute("data-typed-items");
      if (strings)
        new Typed(".typed", {
          strings: strings.split(","),
          loop: true,
          typeSpeed: 100,
          backSpeed: 50,
          backDelay: 2000,
        });
    }

    const portfolioContainer = document.querySelector(".portfolio-container");
    if (portfolioContainer) {
      const iso = new Isotope(portfolioContainer, { itemSelector: ".portfolio-item" });
      const filters = document.querySelectorAll("#portfolio-flters li");
      filters.forEach((filter) =>
        filter.addEventListener("click", (e) => {
          e.preventDefault();
          filters.forEach((el) => el.classList.remove("filter-active"));
          filter.classList.add("filter-active");
          iso.arrange({ filter: filter.getAttribute("data-filter") });
          AOS.refresh();
        })
      );
    }
  }, []);

  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
