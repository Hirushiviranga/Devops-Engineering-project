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
import Fitease1 from "../assets/img/portfolio/fitease1.png";
import Fitease2 from "../assets/img/portfolio/fitease2.png";
import Fitease3 from "../assets/img/portfolio/fitease3.png";    

function PortfolioDetailsFITEASE() {
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
                    <img src={Fitease1} alt="" />
                  </div>
                  <div className="swiper-slide">
                    <img src={Fitease2} alt="" />
                  </div>
                  <div className="swiper-slide">
                    <img src={Fitease3} alt="" />
                  </div>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="portfolio-info">
                <h3>Project Information - UI/UX Design 5</h3>
                <ul>
                  <li><strong>Category</strong>: UI/UX Design</li>
                  <li><strong>Project date</strong>: 18 December 2024</li>
                  <li>
                    <strong>Project URL</strong>:{" "}
                    <a href="https://www.figma.com/proto/CWF6MQRPXABwSug2Hgzsho/FITEASE?page-id=9%3A34&node-id=15-13&starting-point-node-id=15%3A13&t=tfpSUrMjiu9nEPPr-1">
                      Figma Prototype
                    </a>
                  </li>
                </ul>
              </div>

              <div className="portfolio-description">
                <h2>FitEase</h2>
                <p>
                  <strong>Fitness & Wellness App - Figma UI/UX Design:</strong>{" "}
                  FITEASE is a mobile fitness application concept designed in Figma. It includes six core modules:
                  <ul>
                    <li>Diet Plan – Personalized meal tracking and nutrition suggestions.</li>
                    <li>Weekly Workout Schedule – Structured workouts based on user goals.</li>
                    <li>Tips – Fitness, recovery, and lifestyle guidance.</li>
                    <li>Analyze – Track progress with charts and insights.</li>
                    <li>My Profile – User info, goals, and achievements.</li>
                    <li>Settings – App customization and preferences.</li>
                  </ul>
                  Designed for iPhone 16 Pro Max, it emphasizes clarity, motivation, and an engaging UI with an energetic yet minimal color palette.
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

export default PortfolioDetailsFITEASE;
