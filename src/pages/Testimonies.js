import React from "react";
import "./Testimonies.css";

const testimonials = [
  {
    name: "Anjali Deshmukh",
    image: "/assets/testimonies/person1.jpg",
    feedback:
      "Radiant Pranic Healing transformed my life. I feel more balanced, healthier, and emotionally strong. The energy work helped me recover faster from physical issues and boosted my confidence.",
  },
  {
    name: "Rahul Kulkarni",
    image: "/assets/testimonies/person2.jpg",
    feedback:
      "The sessions are powerful and calming. I’ve experienced deep spiritual growth and clarity in my thoughts. It’s a blessing to have such a center near me.",
  },
  {
    name: "Sneha Patil",
    image: "/assets/testimonies/person3.jpg",
    feedback:
      "Very helpful in managing stress. The trainers are genuine and compassionate. I’ve learned to control my emotions and live mindfully.",
  },
  {
    name: "Dr. Arvind Joshi",
    image: "/assets/testimonies/person4.jpg",
    feedback:
      "As a medical doctor, I was initially skeptical. But after witnessing the results in my patients and myself, I truly believe in the power of Pranic Healing.",
  },
  {
    name: "Meera Shenoy",
    image: "/assets/testimonies/person5.jpg",
    feedback:
      "Radiant has been my sanctuary during tough times. I feel healed, supported, and spiritually connected. Every session is a new discovery.",
  },
];

const Testimonies = () => {
  return (
    <section className="testimonies-section">
      <div className="testimonies-container">
        <h2>What Our Clients Say</h2>
        <p className="intro-text">
          At Radiant Pranic Healing, we empower people to heal, grow, and thrive. Here's how we’ve made a difference in their lives.
        </p>
        <div className="testimonies-grid">
          {testimonials.map((t, index) => (
            <div key={index} className="testimonial-card">
              <img src={t.image} alt={t.name} className="testimonial-img" />
              <h4>{t.name}</h4>
              <p>{t.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonies;
