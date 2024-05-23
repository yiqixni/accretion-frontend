
import React, { useRef } from "react";
import Slider from "react-slick";

import { SliderSettings as settings } from "../Marketplace";

import { ReactComponent as LogoAlexandria } from './logo-alexandria.svg';
import { ReactComponent as LogoAMT } from './logo-american-tower.svg';
import { ReactComponent as LogoAvalon } from './logo-avalon-bay.svg';
import { ReactComponent as LogoBxp } from './logo-bxp.svg';
import { ReactComponent as LogoEquinix } from './logo-equinix.svg';
import { ReactComponent as LogoPrologis } from './logo-prologis.svg';
import { ReactComponent as LogoSimon } from './logo-simon-property.svg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Marketplace.css';

const SliderREITS = () => {
  const sliderRef = useRef(null);

  const logos = [
    { component: LogoBxp, id: "slider-logo-bxp" },
    { component: LogoAlexandria, id: "slider-logo-alexandria" },
    { component: LogoAMT, id: "slider-logo-amt" },
    { component: LogoAvalon, id: "slider-logo-avalon" },
    { component: LogoPrologis, id: "slider-logo-prologis" },
    { component: LogoEquinix, id: "slider-logo-equinix" },
    { component: LogoSimon, id: "slider-logo-simon" }
  ];

  const handleLogoClick = (index) => {
    sliderRef.current.slickGoTo(index); // Move slider to the specified slide index
  };

  return (
    <div className="slider">
      <Slider ref={sliderRef} {...settings}>
        {logos.map((logo, index) => (
          <div className="slider-logo" key={index} onClick={() => handleLogoClick(index)}>
            <logo.component id="slider-logo-id" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderREITS;
