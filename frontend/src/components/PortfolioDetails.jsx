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
import coffee1 from "../assets/img/portfolio/coffee1.png";
import Coffee2 from "../assets/img/portfolio/coffee2.png";
import Coffee3 from "../assets/img/portfolio/coffee3.png";

function PortfolioDetailsDayPilot() {
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
                    <img src={coffee1} alt="" />
                  </div>
                  <div className="swiper-slide">
                    <img src={Coffee2} alt="" />
                  </div>
                  <div className="swiper-slide">
                    <img src={Coffee3} alt="" />
                  </div>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="portfolio-info">
                <h3>Project information - UI/UX Design 1</h3>
                <ul>
                  <li><strong>Category:</strong> UI/UX Design</li>
                  <li><strong>Project date:</strong> 05 March, 2025</li>
                  <li>
                    <strong>Project URL:</strong>
                    <a
                      href="https://www.figma.com/proto/YBAzEtlkEmSIaFjKEqPi8Y/Coffee-Shop?page-id=1%3A34&node-id=5-66&starting-point-node-id=5%3A66&t=xlbFm7GWVfDfMFMu-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Figma Prototype
                    </a>
                  </li>
                </ul>
              </div>
              <div className="portfolio-description">
                <h2>Coffee Heaven</h2>
                <p>
                  <h2>CoffeeShop App – Figma UI/UX Design</h2>
                  This project is a complete Figma design concept for a modern coffee shop application.
                  The app focuses on browsing menus, placing orders, and reserving tables with a cozy digital experience.
                  The design uses a warm color palette and simple navigation to reflect a real coffee shop feel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======= Back to Top Button ======= */}
      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
}

export default PortfolioDetailsDayPilot;


