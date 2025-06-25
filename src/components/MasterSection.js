// src/components/MasterSection.js
import React from 'react';
import './MasterSection.css'; // Keep your CSS as it is

const MasterSection = () => {
  return (
    <section className="master-section">
      <div className="master-container">
        <div className="master-image">
          <img src="/assets/master.jpg" alt="Grand Master" />
        </div>
        <div className="master-text">
          <div className="highlight">Experience Radiance</div>
          <h2>Transform Your Life Through Pranic Healing</h2>
          <blockquote>
            "Energy follows thought. Your healing begins with intention."
          </blockquote>
          <p>
            Discover the ancient science of energy healing that helps bring
            balance, peace, and rejuvenation. Learn how Pranic Healing can
            enhance your mental, emotional, and spiritual well-being.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MasterSection;
