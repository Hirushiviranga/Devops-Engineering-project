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
import Elivo1 from "../assets/img/portfolio/elivo1.png";
import Elivo2 from "../assets/img/portfolio/elivo2.png";
import Elivo3 from "../assets/img/portfolio/elivo3.png";
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
                    <img src={Elivo1} alt="" />
                  </div>
                  <div className="swiper-slide">
                    <img src={Elivo2} alt="" />
                  </div>
                  <div className="swiper-slide">
                    <img src={Elivo3} alt="" />
                  </div>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="portfolio-info">
                <h3>Project Information - UI/UX Design 3</h3>
                <ul>
                  <li><strong>Category</strong>: UI/UX Design</li>
                  <li><strong>Project date</strong>: 12 April 2025</li>
                  <li>
                    <strong>Project URL</strong>:{" "}
                    <a href="https://www.figma.com/proto/FrRRmDMHdwANvuq0VcD1oH/Untitled?page-id=0%3A1&node-id=1-1681&starting-point-node-id=1%3A1681&t=IodTi1gFlY3yzTPp-1">
                      Figma Prototype
                    </a>
                  </li>
                </ul>
              </div>

              <div className="portfolio-description">
                <h2>Elivo</h2>
                <p>
                  <strong>Technical Instrument Shop - Figma UI/UX Design:</strong>{" "}
                  Elivo is an e-commerce web design concept I created in Figma for a technical instrument store. 
                  The platform showcases a wide range of products including mobile phones, laptops, accessories, smartwatches, gaming tools, and tablets.
                  <br /><br />
                  The design was built on a MacBook Pro 16-inch frame to ensure a responsive and visually appealing desktop layout. 
                  Users can explore product categories, view detailed item cards, and add products to the shopping cart for easy checkout. 
                  A bank selection option is also integrated to simplify secure payment processing.
                  <br /><br />
                  The interface follows a modern and clean aesthetic, highlighting products with clear visuals and well-structured layouts. 
                  Special attention was given to usability and navigation, ensuring customers can seamlessly browse, select, and purchase their desired devices.
                  <br /><br />
                  This project demonstrates my ability to design a full e-commerce flow—from product discovery to cart and payment—while keeping the user experience straightforward and engaging.
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
