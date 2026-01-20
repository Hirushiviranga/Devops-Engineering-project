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
import book1 from "../assets/img/portfolio/book1.png";
import book2 from "../assets/img/portfolio/book2.png";
import book3 from "../assets/img/portfolio/book3.png";  

function PortfolioDetailsRecipeBook() {
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
                    <img src={book1} alt="" />
                  </div>
                  <div className="swiper-slide">
                    <img src={book2} alt="" />
                  </div>
                  <div className="swiper-slide">
                    <img src={book3} alt="" />
                  </div>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="portfolio-info">
                <h3>Project Information - Translation</h3>
                <ul>
                  <li><strong>Category</strong>: Translation</li>
                  <li><strong>Project date</strong>: 07 July 2024</li>
                </ul>
              </div>

              <div className="portfolio-description">
                <h2>Recipe Book</h2>
                <p>
                  <strong>Wise Way Hotel School, Tangalle</strong> - Translation, Design & Typesetting.
                  <ul>
                    <li>
                      Translation – Translated recipes from Sinhala to English with cultural accuracy.
                    </li>
                    <li>
                      Design & Formatting – Handled typesetting, layout, typography, and sectioning using MS Word.
                    </li>
                    <li>
                      Final Presentation – Produced a polished book aligning with the hospitality school's identity.
                    </li>
                  </ul>
                  This project demonstrates skills in translation, content adaptation, and professional document design.
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

export default PortfolioDetailsRecipeBook;
