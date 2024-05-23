
import React, { useRef } from "react";
import Slider from "react-slick";
import { SliderSettings as settings } from "../Marketplace";

import LogoAntier from './logo-antier.png';
import LogoCreatrust from './logo-creatrust.svg';
import LogoKaleido from './logo-kaleido.svg';
import LogoRealT from './logo-real-t.svg';
import LogoSecuritize from './logo-securitize.webp';
import LogoTokeny from './logo-tokeny.png';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Marketplace.css';

export default function SliderWeb3() {
  const sliderRef = useRef(null);

  const logos = [
    { src: LogoAntier, alt: "Antier Logo", id: "slider-logo-antier" },
    { src: LogoCreatrust, alt: "Creatrust Logo", id: "slider-logo-creatrust" },
    { src: LogoKaleido, alt: "Kaleido Logo", id: "slider-logo-kaleido" },
    { src: LogoRealT, alt: "RealT Logo", id: "slider-logo-realt" },
    { src: LogoSecuritize, alt: "Securitize Logo", id: "slider-logo-securitize" },
    { src: LogoTokeny, alt: "Tokeny Logo", id: "slider-logo-tokeny" },
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
