
import React, { useRef } from "react";
import Slider from "react-slick";
import { SliderSettings as settings } from "../Marketplace";

import LogoArrived from './logo-arrived.jpeg'; // Import as default
import LogoFundrise from './logo-fundrise.svg'; // Import as default
import LogoHometap from './logo-hometap.jpeg'; // Import as default
import LogoLanda from './logo-landa.svg'; // Import as default
import LogoPacaso from './logo-pacaso.png'; // Import as default
import LogoRoam from './logo-roam.svg'; // Import as default

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Marketplace.css';

export default function SliderFrac() {
  const sliderRef = useRef(null);

  const logos = [
    { src: LogoArrived, alt: "Arrived Logo", id: "slider-logo-arrived" },
    { src: LogoFundrise, alt: "Fundrise Logo", id: "slider-logo-fundrise" },
    { src: LogoHometap, alt: "Hometap Logo", id: "slider-logo-hometap" },
    { src: LogoLanda, alt: "Landa Logo", id: "slider-logo-landa" },
    { src: LogoPacaso, alt: "Pacaso Logo", id: "slider-logo-pacaso" },
    { src: LogoRoam, alt: "Roam Logo", id: "slider-logo-roam" },
  ];

  const handleLogoClick = (index) => {
    sliderRef.current.slickGoTo(index); // Move slider to the specified slide index
  };

  return (
    <div className="slider">
      <Slider ref={sliderRef} {...settings}>
        {logos.map((logo, index) => (
          <div className="slider-logo" key={index} onClick={() => handleLogoClick(index)}>
            <img src={logo.src} alt={logo.alt} id="slider-logo-id" />
          </div>
        ))}
      </Slider>
    </div>
  );
}
