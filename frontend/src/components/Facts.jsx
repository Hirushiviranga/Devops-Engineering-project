import React from 'react';

const Facts = () => {
  return (
    <section id="facts" className="facts">
      <div className="container">

        <div className="section-title">
          <h2>Facts</h2>
          <p>
            I have actively engaged in multiple volunteering activities, contributing to community initiatives, university events, and tech-based outreach programs. These experiences have strengthened my leadership, teamwork, and organizational skills. Additionally, I’ve collaborated on several innovative projects, working alongside passionate individuals to develop web applications, design creative content, and bring ideas to life. Each project has added to my technical knowledge and collaborative spirit.
          </p>
        </div>

        <div className="row no-gutters">

          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up">
            <div className="count-box">
              <i className="bi bi-emoji-smile"></i>
              <span data-purecounter-start="0" data-purecounter-end="5" data-purecounter-duration="1" className="purecounter"></span>
              <p><strong>Happy Clients</strong></p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="100">
            <div className="count-box">
              <i className="bi bi-journal-richtext"></i>
              <span data-purecounter-start="0" data-purecounter-end="10" data-purecounter-duration="1" className="purecounter"></span>
              <p><strong>Projects</strong></p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="200">
            <div className="count-box">
              <i className="bi bi-mortarboard"></i>
              <span data-purecounter-start="0" data-purecounter-end="12" data-purecounter-duration="1" className="purecounter"></span>
              <p><strong>Certifications</strong></p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="300">
            <div className="count-box">
              <i className="bi bi-people"></i>
              <span data-purecounter-start="0" data-purecounter-end="20" data-purecounter-duration="1" className="purecounter"></span>
              <p><strong>Volunteering</strong></p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Facts;
