import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-content">
        {/* Personal Info Section */}
        <div className="personal-info">
          <h3>Personal Info</h3>
          <p>
            I'm a passionate developer with experience in building web applications
            using modern technologies like React, Node.js, and more. I love solving
            problems and creating beautiful, user-friendly interfaces.
          </p>
        </div>

        {/* Education Section */}
        <div className="education">
          <h3>Education</h3>
          <div className="timeline">
            {/* Timeline Entry 1 */}
            <div className="timeline-item">
              <div className="timeline-content">
                <h4>Computer Science Technology</h4>
                <p>Dawson College</p>
                <p className="timeline-date">2022 - Present</p>
              </div>
            </div>

            {/* Timeline Entry 2 */}
            <div className="timeline-item">
              <div className="timeline-content">
                <h4>High School Diploma</h4>
                <p>École Secondaire LaVoie</p>
                <p className="timeline-date">2016 - 2022</p>
              </div>
            </div>

            

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;