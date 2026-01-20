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
import desktop2 from "../assets/img/portfolio/desktop2.png";
import desktop3 from "../assets/img/portfolio/desktop3.png";
import desktop4 from "../assets/img/portfolio/desktop4.png";    

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
                    <img src={desktop2} alt="" />
                  </div>
                  <div className="swiper-slide">
                    <img src={desktop3} alt="" />
                  </div>
                  <div className="swiper-slide">
                    <img src={desktop4}alt="" />
                  </div>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="portfolio-info">
                <h3>Project Information - Desktop Application</h3>
                <ul>
                  <li><strong>Category</strong>: Desktop Application</li>
                  <li><strong>Project date</strong>: 12 March 2025</li>
                  <li>
                    <strong>Project URL</strong>:{" "}
                    <a href="https://github.com/Hirushiviranga/DAY-PLANNER-GUI.git">
                      https://github.com/Hirushiviranga/DAY-PLANNER-GUI.git
                    </a>
                  </li>
                </ul>
              </div>

              <div className="portfolio-description">
                <h2>Day Pilot</h2>
                <p>
                  <strong>Productivity Desktop Application — WPF</strong>
                  <br />
                  Technologies: C#, WPF, SQLite
                  <br />
                  Day Pilot is a modern and intuitive desktop productivity application built using WPF Forms and SQLite. Designed with a navy blue and orange color palette, it offers a clean and visually engaging interface.
                  <ul>
                    <li>About Section – Overview of the app and its purpose.</li>
                    <li>Contact Section – Connect or provide feedback seamlessly.</li>
                    <li>To-Do Section – Add, update, and organize tasks with full CRUD operations.</li>
                    <li>Calendar Section – Schedule and track events effortlessly.</li>
                  </ul>
                  Demonstrates strong skills in desktop UI design, database integration, and user-focused functionality.
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

export default PortfolioDetailsDayPilot;
