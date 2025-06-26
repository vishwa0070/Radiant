// src/pages/Ashram.js
import React from 'react';
import './Ashram.css';

const Ashram = () => {
  return (
    <section className="ashram-page">
      <div className="ashram-banner">
        <img src="/assets/ashram.jpg" alt="Ashram View" />
      </div>

      <div className="ashram-content">
        <h2>Welcome to Radiant Ashram</h2>
        <p>
          Nestled in a peaceful environment, Radiant Ashram is a center for deep healing, meditation,
          and spiritual growth. Our Ashram hosts workshops, retreats, and healing sessions for individuals
          seeking inner transformation and balance.
        </p>

        <div className="ashram-info">
          <h3>📍 Address</h3>
          <p>Radiant Healing Ashram, Shanti Hills, Sector 5, Pune, Maharashtra - 411045</p>

          <h3>📞 Phone</h3>
          <p>+91 74477 30070</p>

          <h3>📧 Email</h3>
          <p>vishwajeetjogdand1012@gmail.com</p>
        </div>
      </div>
    </section>
  );
};

export default Ashram;
