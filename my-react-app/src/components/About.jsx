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
            I'm a developer with a strong desire to learn and grow in all areas of technology. 
            I thrive on exploring new concepts and am always searching for opportunities to expand my knowledge and skills.
            Whether it's solving complex problems, innovating with emerging technologies, or building impactful solutions, 
            I enjoy tackling challenges and adapting to different fields to deliver exceptional results.
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