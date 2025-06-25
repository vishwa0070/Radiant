import React from "react";
import { FaSpa, FaSmileBeam, FaSeedling } from "react-icons/fa";
import "./UniqueTeachings.css";

const UniqueTeachings = () => {
  return (
    <section className="unique-teachings">
      <div className="box-container">
        <h2>Our Unique Teachings</h2>
        <p className="subtitle">
          Transform your life through our comprehensive approach to well-being,
          encompassing physical health, emotional balance, and spiritual growth.
        </p>

        <div className="teachings-grid">
          <div className="teaching-card">
            <div className="icon"><FaSpa /></div>
            <h3>Physical Health</h3>
            <p>
              Experience natural healing and rejuvenation through our energy
              healing techniques. Our methods help accelerate recovery and
              maintain optimal physical well-being.
            </p>
          </div>

          <div className="teaching-card">
            <div className="icon"><FaSmileBeam /></div>
            <h3>Emotional Balance</h3>
            <p>
              Find inner peace and emotional stability through our guided
              healing sessions. Learn techniques to manage stress and cultivate
              positive emotional states.
            </p>
          </div>

          <div className="teaching-card">
            <div className="icon"><FaSeedling /></div>
            <h3>Spiritual Growth</h3>
            <p>
              Embark on a journey of spiritual development and self-discovery.
              Our teachings help you connect with your higher self and achieve
              spiritual enlightenment.
            </p>
          </div>
        </div>

        {/* 👇 YouTube Section */}
        <div className="youtube-section">
          <h2>Basic Pranic Healing Workshop</h2>
          <div className="video-wrapper">
           <iframe
           src="https://www.youtube.com/embed/7oWnN8F56LE"
           title="Pranic Healing Video"
           frameBorder="0"
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
           allowFullScreen
          ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniqueTeachings;
