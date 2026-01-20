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
import Daypilot1 from "../assets/img/portfolio/daypilot1.png";
import Daypilot2 from "../assets/img/portfolio/daypilot2.png";
import Daypilot3 from "../assets/img/portfolio/daypilot3.png";  

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
                    <img src={Daypilot1} alt="" />
                  </div>
                  <div className="swiper-slide">
                    <img src={Daypilot2} alt="" />
                  </div>
                  <div className="swiper-slide">
                    <img src={Daypilot3}alt="" />
                  </div>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="portfolio-info">
                <h3>Project Information - Website 1</h3>
                <ul>
                  <li><strong>Category</strong>: Web Development</li>
                  <li><strong>Project date</strong>: 12 March 2025</li>
                  <li>
                    <strong>Project URL</strong>:{" "}
                    <a href="https://github.com/Hirushiviranga/DAY-PLANNER-GUI.git">
                      GitHub Repo
                    </a>
                  </li>
                </ul>
              </div>

              <div className="portfolio-description">
                <h2>DayPilot</h2>
                <p>
                  <strong>Productivity Web Application - Full-Stack Development:</strong>{" "}
                  DayPilot is a full-stack web app I developed to manage tasks, reminders, and schedules. Key pages include:
                  <ul>
                    <li>To-Do List – Create, update, and manage daily tasks.</li>
                    <li>Reminders – Track important events and deadlines.</li>
                    <li>Calendar – View schedules and upcoming activities.</li>
                    <li>About Us & Contact Us – Information about the platform and ways to connect.</li>
                  </ul>
                  Built with Node.js, Express.js, and MySQL via XAMPP. Frontend uses glassmorphism and navy blue theme, focusing on accessibility, responsive design, and modern UI.
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
