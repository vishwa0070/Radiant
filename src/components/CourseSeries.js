// src/components/CourseSeries.js
import React from "react";
import "./CourseSeries.css";

const CourseSeries = () => {
  return (
    <section className="course-series">
      <div className="container">
        <h2 className="section-title">COURSES AVAILABLE</h2>
        
        <div className="course-circles">
          <div className="circle-box">
            <img src="/assets/healing.jpg" alt="Healing Series" />
            <p>HEALING SERIES</p>
          </div>
          <div className="circle-box">
            <img src="/assets/prosperity.jpg" alt="Prosperity Series" />
            <p>PROSPERITY SERIES</p>
          </div>
          <div className="circle-box">
            <img src="/assets/spiritual.jpg" alt="Spiritual Series" />
            <p>SPIRITUAL SERIES</p>
          </div>
        </div>

        <div className="disclaimer-box">
          <p><strong>Disclaimer:</strong></p>
          <ol className="disclaimer-list">
            <li>Pranic Healing is not intended to replace allopathic medicine, but rather to complement it. If symptoms persist or the ailment is severe, please immediately consult a medical Doctor and a Certified Pranic Healer.</li>
            <li>Pranic Healers are not Medical Doctors, but Medical Doctors can be Pranic Healers.</li>
            <li>Pranic Healers should not make medical diagnosis.</li>
            <li>Pranic Healers should not prescribe medications and/or Medical treatment.</li>
            <li>Pranic Healers should not interfere with the prescribed medications and/or with Medical Treatments.</li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default CourseSeries;
