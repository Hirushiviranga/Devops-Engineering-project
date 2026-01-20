import React from 'react';
import profile from '../assets/img/profile-img.png';
const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">

        <div className="section-title">
          <h2>About</h2>
          <p>
            Hello! I'm an enthusiastic undergraduate at the Faculty of Engineering, University of Ruhuna, with a deep passion for web development, content writing, content creation, UI/UX design, graphic designing, and translation.

            My journey in the tech and creative fields is fueled by curiosity and a strong desire to blend functionality with aesthetics. I love bringing ideas to life through clean, responsive web designs, compelling content, and visually appealing user interfaces.

            Beyond coding, I enjoy expressing myself through words and visuals,crafting stories, creating engaging digital content, and designing meaningful experiences that connect with people.

            As I continue to grow as a developer and creator, I’m always eager to learn new tools, take on exciting projects, and collaborate with others who share a passion for innovation and creativity.

            Let’s build something amazing together!
          </p>
        </div>

        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <img src={profile} className="img-fluid" alt="" />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>UI/UX Designer &amp; Web Developer.</h3>
            <p className="fst-italic">My Personal Information</p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Name:</strong> <span>Hirushi Siriwardhana</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>8 May 2002</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>hirushiviranga89@gmail.com</span></li>
                  {/* <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+94 768330194</span></li> */}
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>23</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bsc.Eng(Hons)-UG</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Tangalle, Sri Lanka</span></li>
                </ul>
              </div>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
