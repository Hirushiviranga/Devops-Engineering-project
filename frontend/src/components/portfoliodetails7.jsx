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
import calcmate1 from "../assets/img/portfolio/calcmate1.png";
import calcmate2 from "../assets/img/portfolio/calcmate2.png";
import calcmate3 from "../assets/img/portfolio/calcmate3.png";  

function PortfolioDetailsCalcMate() {
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
                    <img src={calcmate1} alt="" />
                  </div>
                  <div className="swiper-slide">
                    <img src={calcmate2} alt="" />
                  </div>
                  <div className="swiper-slide">
                    <img src={calcmate3} alt="" />
                  </div>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="portfolio-info">
                <h3>Project Information - Website 3</h3>
                <ul>
                  <li><strong>Category</strong>: Web Development</li>
                  <li><strong>Project date</strong>: 27 September 2025</li>
                  <li>
                    <strong>Project URL</strong>:{" "}
                    <a href="https://github.com/Hirushiviranga/Software-Testing-and-Quality-Assurance.git">
                      GitHub Repo
                    </a>
                  </li>
                </ul>
              </div>

              <div className="portfolio-description">
                <h2>CalcMate</h2>
                <p>
                  <strong>Calculator Web Application:</strong> React + Vite frontend and ASP.NET backend.
                  <ul>
                    <li>Performs addition, subtraction, multiplication, division on two numbers.</li>
                    <li>Maintains history page to review past calculations.</li>
                  </ul>
                  Minimal light-blue and white interface ensures clarity. Also serves as a practice project for software testing principles.
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

export default PortfolioDetailsCalcMate;
