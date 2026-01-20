import React, { useEffect } from "react";
import AOS from "aos";
import GLightbox from "glightbox";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import Daypilot1 from "../assets/img/portfolio/daypilot1.png";
import Daypilot2 from "../assets/img/portfolio/daypilot2.png";
import Daypilot3 from "../assets/img/portfolio/daypilot3.png";

function PortfolioDetails() {
  useEffect(() => {
    AOS.init({ duration: 800 });
    GLightbox({});
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
                    <img src={Daypilot3} alt="" />
                  </div>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="portfolio-info">
                <h3>Project Information - UI/UX Design 2</h3>
                <ul>
                  <li><strong>Category</strong>: UI/UX Design</li>
                  <li><strong>Project date</strong>: 10 May 2025</li>
                  <li>
                    <strong>Project URL</strong>:{" "}
                    <a href="https://www.figma.com/proto/JJSk7hEV5eYYxqgcUxMtUc/DayPilot?page-id=0%3A1&node-id=1-2&starting-point-node-id=1%3A2&t=jbgRFFgt8vjrWcy9-1">
                      Figma Prototype
                    </a>
                  </li>
                </ul>
              </div>

              <div className="portfolio-description">
                <h2>Day Pilot</h2>
                <p>
                  <strong>DayPlanner App – Figma UI/UX Design:</strong> DayPilot
                  is a complete productivity app concept I designed in Figma,
                  aimed at helping users organize their daily lives more
                  effectively. The app integrates three key features—Reminders,
                  To-Do lists, and Calendar management—into one seamless
                  experience.
                  <br /><br />
                  The design focuses on smooth navigation, with consistent
                  layouts and modern aesthetics to promote clarity and user
                  comfort.
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

export default PortfolioDetails;
