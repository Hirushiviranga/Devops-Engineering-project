import React, { useEffect } from "react";

const Skills = () => {
  useEffect(() => {
    const skillsContent = document.querySelector(".skills-content");
    if (skillsContent && window.Waypoint) {
      new window.Waypoint({
        element: skillsContent,
        offset: "80%",
        handler: () => {
          document.querySelectorAll(".progress .progress-bar").forEach((el) => {
            el.style.width = el.getAttribute("aria-valuenow") + "%";
          });
        },
      });
    }
  }, []);

  return (
    <section id="skills" className="skills section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Skills</h2>
          <p>
            I have studied and practiced a variety of programming languages that support both
            front-end and back-end development. My skills include HTML, CSS, JavaScript,
            Python, C++, C#, Java, MERN stack, Figma, Ms Office, and Mobile App development.
          </p>
        </div>

        <div className="row skills-content">
          <div className="col-lg-6" data-aos="fade-up">
            {[
              { name: "HTML", value: 100 },
              { name: "CSS", value: 90 },
              { name: "JavaScript", value: 75 },
              { name: "Python", value: 60 },
              { name: "Java", value: 75 },
            ].map((skill, i) => (
              <div className="progress" key={i}>
                <span className="skill">{skill.name} <i className="val">{skill.value}%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow={skill.value} aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            ))}
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            {[
              { name: "C/C#/C++", value: 90 },
              { name: "Ms Office", value: 95 },
              { name: "Figma Design", value: 75 },
              { name: "MERN", value: 60 },
              { name: "Mobile App Development", value: 60 },
            ].map((skill, i) => (
              <div className="progress" key={i}>
                <span className="skill">{skill.name} <i className="val">{skill.value}%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow={skill.value} aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
