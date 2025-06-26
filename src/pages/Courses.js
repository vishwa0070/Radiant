// src/pages/Courses.js
import React from 'react';
import './Courses.css';

const Courses = () => {
  return (
    <section className="courses-page">
      {/* Full-page top banner */}
      <div className="courses-banner">
        <img src="/assets/courses.jpg" alt="Courses" />
      </div>

      {/* Healing Series */}
      <div className="course-section">
        <h2>Healing Series</h2>
        <div className="course-content">
          <div className="course-image">
            <img src="/assets/healing.jpg" alt="Healing Series" />
          </div>
          <div className="course-text">
            <p>
              Our Healing Series is focused on physical and emotional wellness through Pranic Healing
              techniques. These courses are designed to teach you how to scan, cleanse, and energize the body
              for faster recovery and improved vitality. Whether you're a beginner or an advanced healer, this
              series helps you deepen your understanding of energy healing.
            </p>
          </div>
        </div>
      </div>

      {/* Spiritual Series */}
      <div className="course-section alt">
        <h2>Spiritual Series</h2>
        <div className="course-content">
          <div className="course-image">
            <img src="/assets/spiritual.jpg" alt="Spiritual Series" />
          </div>
          <div className="course-text">
            <p>
              Explore the path of inner peace and enlightenment with our Spiritual Series. These courses focus
              on meditation, connection with the higher self, and deeper spiritual development through energy
              principles. Ideal for those seeking personal growth and spiritual mastery.
            </p>
          </div>
        </div>
      </div>

      {/* Prosperity Series */}
      <div className="course-section">
        <h2>Prosperity Series</h2>
        <div className="course-content">
          <div className="course-image">
            <img src="/assets/prosperity.jpg" alt="Prosperity Series" />
          </div>
          <div className="course-text">
            <p>
              The Prosperity Series blends spiritual teachings with practical principles of success,
              abundance, and financial well-being. Learn how to harness energy to remove blockages and attract
              prosperity into your life while staying rooted in ethical and spiritual practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
