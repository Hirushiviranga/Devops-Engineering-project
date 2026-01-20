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
import littlevitals5 from "../assets/img/portfolio/littlvitals5.png";
import littlevitals6 from "../assets/img/portfolio/littlevitals6.png";
import littlevitals7 from "../assets/img/portfolio/littlevitals7.png";  
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
                    <img src={littlevitals5} alt="" />
                  </div>
                  <div className="swiper-slide">
                    <img src={littlevitals6} alt="" />
                  </div>
                  <div className="swiper-slide">
                    <img src={littlevitals7}alt="" />
                  </div>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="portfolio-info">
                <h3>Project Information - Website 2</h3>
                <ul>
                  <li><strong>Category</strong>: Web Development</li>
                  <li><strong>Project date</strong>: 26 September 2025</li>
                  <li>
                    <strong>Project URL</strong>:{" "}
                    <a href="https://github.com/Hirushiviranga/LittleVitals.git">
                      GitHub Repo
                    </a>
                  </li>
                </ul>
              </div>

              <div className="portfolio-description">
                <h2>LittleVitals</h2>
                <p>
                  <strong>Baby Management System - MERN Stack:</strong> LittleVitals is a full-stack web app for parents and healthcare providers to manage baby records.
                  <ul>
                    <li>Admin – Manage baby personal, medical, and clinical records.</li>
                    <li>User (Parent) – Secure login, view baby details, nutrition, and activity.</li>
                  </ul>
                  Core features:
                  <ul>
                    <li>Dashboard – Overview of baby’s health and progress.</li>
                    <li>Nutrition Tracker – Height, weight, BMI trends, and meal logs.</li>
                    <li>Doctor Reviews – View notes and recommendations.</li>
                    <li>Tips for Parents – Childcare guidance and nutrition advice.</li>
                  </ul>
                  Secure authentication, CRUD operations, and visual analytics make health tracking simple and user-friendly.
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
