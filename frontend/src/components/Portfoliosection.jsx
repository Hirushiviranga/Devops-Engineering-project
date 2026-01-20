import React from 'react';
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "boxicons/css/boxicons.min.css";
import "glightbox/dist/css/glightbox.min.css";
import "swiper/css";
import "../assets/css/style.css";
import Daypilot from "../assets/img/portfolio/daypilot.png";
import Elivo from "../assets/img/portfolio/elivo.png";
import Littlevitals from "../assets/img/portfolio/littlevitals.png";    
import Fitease from "../assets/img/portfolio/fitease.png";
import Littlevitals1 from "../assets/img/portfolio/littlevitals1.png";    
import Calcmate from "../assets/img/portfolio/calcmate.png";    
import Book from "../assets/img/portfolio/book.png";    
import Desktop1 from "../assets/img/portfolio/desktop1.png";  
import Coffee from "../assets/img/portfolio/coffee shop.png";
import { Link } from "react-router-dom";

const Portfoliosection = () => {
  return (
    <section id="portfolio" className="portfolio section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Portfolio</h2>
          <p>
            Welcome to my portfolio! Here you'll find a collection of projects I've worked on, showcasing my skills in web development, UI/UX design, content creation, and more. Each project reflects my passion for creativity, problem-solving, and continuous learning.
          </p>
        </div>

        <div className="row" data-aos="fade-up">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-webapp">Web Applications</li>
              <li data-filter=".filter-desktop">Desktop Applications</li>
              <li data-filter=".filter-uiux">UI/UX Designs</li>
              <li data-filter=".filter-translation">Translations</li>
            </ul>
          </div>
        </div>

        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">

          <div className="col-lg-4 col-md-6 portfolio-item filter-uiux">
            <div className="portfolio-wrap">
              <img src={Coffee} className="img-fluid" alt="DayPilot Project" />
              <div className="portfolio-links">
                <a href={Coffee} data-gallery="portfolioGallery" className="portfolio-lightbox" title="UI/UX Design 1"><i className="bx bx-plus"></i></a>
                <Link to="/portfoliodetails" title="More Details"><i className="bx bx-link"></i></Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-uiux">
            <div className="portfolio-wrap">
              <img src={Daypilot} className="img-fluid" alt="UI/UX Design 2" />
              <div className="portfolio-links">
                <a href={Daypilot} data-gallery="portfolioGallery" className="portfolio-lightbox" title="UI/UX Design 2"><i className="bx bx-plus"></i></a>
                <Link to="/portfoliodetails1" title="More Details"><i className="bx bx-link"></i></Link>

              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-uiux">
            <div className="portfolio-wrap">
              <img src={Elivo} className="img-fluid" alt="UI/UX Design 3" />
              <div className="portfolio-links">
                <a href={Elivo} data-gallery="portfolioGallery" className="portfolio-lightbox" title="UI/UX Design 3"><i className="bx bx-plus"></i></a>
                <Link to="/portfoliodetails2" title="More Details"><i className="bx bx-link"></i></Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-webapp">
            <div className="portfolio-wrap">
              <img src={Daypilot} className="img-fluid" alt="UI/UX Design 4" />
              <div className="portfolio-links">
                <a href={Daypilot} data-gallery="portfolioGallery" className="portfolio-lightbox" title="Website 1 "><i className="bx bx-plus"></i></a>
                <Link to="/portfoliodetails5" title="More Details"><i className="bx bx-link"></i></Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-uiux">
            <div className="portfolio-wrap">
              <img src={Littlevitals} className="img-fluid" alt="Website 2" />
              <div className="portfolio-links">
                <a href={Littlevitals} data-gallery="portfolioGallery" className="portfolio-lightbox" title="UI/UX Design 4"><i className="bx bx-plus"></i></a>
                <Link to="/portfoliodetails3" title="More Details"><i className="bx bx-link"></i></Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-uiux">
            <div className="portfolio-wrap">
              <img src={Fitease} className="img-fluid" alt="UI/UX Design 5" />
              <div className="portfolio-links">
                <a href={Fitease} data-gallery="portfolioGallery" className="portfolio-lightbox" title="UI/UX Design 5"><i className="bx bx-plus"></i></a>
                <Link to="/portfoliodetails4" title="More Details"><i className="bx bx-link"></i></Link>
              </div>
            </div>
          </div>
          

          <div className="col-lg-4 col-md-6 portfolio-item filter-webapp">
            <div className="portfolio-wrap">
              <img src={Littlevitals1} className="img-fluid" alt="Website 2" />
              <div className="portfolio-links">
                <a href={Littlevitals1} data-gallery="portfolioGallery" className="portfolio-lightbox" title="Website 2"><i className="bx bx-plus"></i></a>
                <Link to="/portfoliodetails6" title="More Details"><i className="bx bx-link"></i></Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-webapp">
            <div className="portfolio-wrap">
              <img src={Calcmate} className="img-fluid" alt="Website 3" />
              <div className="portfolio-links">
                <a href={Calcmate}data-gallery="portfolioGallery" className="portfolio-lightbox" title="Website 3"><i className="bx bx-plus"></i></a>
                <Link to="/portfoliodetails7" title="More Details"><i className="bx bx-link"></i></Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-translation">
            <div className="portfolio-wrap">
              <img src={Book} className="img-fluid" alt="Book" />
              <div className="portfolio-links">
                <a href={Book}data-gallery="portfolioGallery" className="portfolio-lightbox" title="Book"><i className="bx bx-plus"></i></a>
                <Link to="/portfoliodetails8" title="More Details"><i className="bx bx-link"></i></Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-desktop">
            <div className="portfolio-wrap">
              <img src={Desktop1} className="img-fluid" alt="Desktop1" />
              <div className="portfolio-links">
                <a href={Desktop1} data-gallery="portfolioGallery" className="portfolio-lightbox" title="Desktop1"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details9.html" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Portfoliosection;
