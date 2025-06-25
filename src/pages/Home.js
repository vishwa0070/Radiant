import React from 'react';
import ImageSlider from '../components/ImageSlider';
import MasterSection from '../components/MasterSection';
import WhatIsPranicHealing from '../components/WhatIsPranicHealing';
import UniqueTeachings from '../components/UniqueTeachings';
import WhatsAppButton from '../components/WhatsAppButton';
import CourseSeries from "../components/CourseSeries";

const Home = () => {
  return (
    <div>
      <ImageSlider />
      <MasterSection /> {/* 👈 Add this below the slider */}
      <WhatIsPranicHealing />
      <UniqueTeachings/>
     
      <WhatsAppButton /> {/* Floating WhatsApp Button */}
      
       <CourseSeries /> 
    </div>
  );
};

export default Home;