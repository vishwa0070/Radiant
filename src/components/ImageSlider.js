import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ImageSlider.css';

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  const images = [
    "/assets/slider/slider1.jpg",
    "/assets/slider/slider2.jpg",
    "/assets/slider/slider3.jpg",
    "/assets/slider/slider4.jpg",
    "/assets/slider/slider5.jpg",
  ];

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div className="slide-wrapper" key={index}>
            <img src={src} alt={`Slide ${index + 1}`} className="slide-img" />
            {index === 0 && (
              <div className="slide-text-overlay">
                <h1>Welcome to Pranic Healing</h1>
              </div>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
