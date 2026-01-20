import React, { useEffect } from "react";
import AOS from "aos";
import GLightbox from "glightbox";
import Swiper from "swiper/bundle";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "boxicons/css/boxicons.min.css";
import "glightbox/dist/css/glightbox.min.css";
import "swiper/css/bundle";
import "../assets/css/style.css";
import Littlevitals4 from "../assets/img/portfolio/littlevitals4.png";
import Littlevitals2 from "../assets/img/portfolio/littlevitals2.png";
import Littlevitals3 from "../assets/img/portfolio/littlevitals3.png";

function PortfolioDetailsLittleVitals() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({ duration: 800 });

    // Initialize GLightbox
    GLightbox({});

    // Initialize Swiper
    new Swiper(".portfolio-details-slider", {
      speed: 400,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
    });
  }, []);

  return (
    <>
      {/* ======= Breadcrumbs ======= */}
      <section id="breadcrumbs" className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Portfolio Details</h2>
            <ol>
              <li><a href="/">Home</a></li>
              <li>Portfolio Details</li>
            </ol>
          </div>
        </div>
      </section>

      {/* ======= Portfolio Details Section ======= */}
      <section id="portfolio-details" className="portfolio-details">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-8">
              <div className="portfolio-details-slider swiper">
                <div className="swiper-wrapper align-items-center">
                  <div className="swiper-slide">
                    <img src={Littlevitals4} alt="" />
                  </div>
                  <div className="swiper-slide">
                    <img src={Littlevitals2}alt="" />
                  </div>
                  <div className="swiper-slide">
                    <img src={Littlevitals3} alt="" />
                  </div>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="portfolio-info">
                <h3>Project Information - UI/UX Design 4</h3>
                <ul>
                  <li><strong>Category</strong>: UI/UX Design</li>
                  <li><strong>Project date</strong>: 15 June 2025</li>
                  <li>
                    <strong>Project URL</strong>:{" "}
                    <a href="https://www.figma.com/proto/ZuVddgbbNBMylkunD5qKFL/Liitlevitals?page-id=2%3A22&node-id=2-23&p=f&viewport=-3465%2C-121%2C0.39&t=TUs9giZYMNUa6iLT-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2%3A23">
                      Figma Prototype
                    </a>
                  </li>
                </ul>
              </div>

              <div className="portfolio-description">
                <h2>Little Vitals</h2>
                <p>
                  <strong>Baby Management System - Figma UI/UX Design:</strong>{" "}
                  Little Vitals is a Figma design concept for a baby management system, integrating key modules:
                  <ul>
                    <li>Personal Data – Baby’s basic details like name, age, gender, and parent info.</li>
                    <li>Medical Data – Doctor consultations, vaccination history, and healthcare notes.</li>
                    <li>Clinical Data – Growth metrics like height, weight, and other measurements over time.</li>
                    <li>Meal Records – Daily nutrition tracking for healthy eating patterns.</li>
                  </ul>
                  Graphical dashboards show trends and insights for easier tracking. The UI is modern, clean, and parent-friendly, emphasizing accessibility, navigation, and trustworthiness for sensitive child data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
}

export default PortfolioDetailsLittleVitals;
