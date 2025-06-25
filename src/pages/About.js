// src/pages/About.js
import React from 'react';
import './About.css';
import { FaUserCheck, FaLeaf, FaChalkboardTeacher } from 'react-icons/fa';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src="/assets/about.jpg" alt="About Pranic Healing" />
        </div>
        <div className="about-text">
          <h2>About Radiant Pranic Healing</h2>
          <p>
            Radiant is a transformative center for energy healing. We help individuals experience physical wellness, emotional peace, and spiritual growth using the ancient science of Pranic Healing.
          </p>
          <p>
            Guided by the teachings of Grand Master Choa Kok Sui, our center is committed to spreading light, love, and healing to those who seek balance and inner transformation.
          </p>
          <p>
            With certified trainers and a peaceful ashram environment, we provide workshops, healing sessions, and courses that help individuals tap into their true potential.
          </p>
        </div>
      </div>

      {/* --- Why Choose Radiant Healing Section --- */}
      <div className="why-radiant">
        <h3>Why Choose Radiant Pranic Healing?</h3>
        <div className="why-cards">
          <div className="why-card">
            <div className="icon"><FaUserCheck /></div>
            <div>
              <h4>Certified Healers</h4>
              <p>Guidance by certified and experienced pranic healers.</p>
            </div>
          </div>

          <div className="why-card">
            <div className="icon"><FaLeaf /></div>
            <div>
              <h4>Holistic Approach</h4>
              <p>We focus on mind, body, and spirit for complete well-being.</p>
            </div>
          </div>

          <div className="why-card">
            <div className="icon"><FaChalkboardTeacher /></div>
            <div>
              <h4>Workshops & Classes</h4>
              <p>Personalized workshops, sessions, and continuous guidance.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
