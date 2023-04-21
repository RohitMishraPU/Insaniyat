import React from "react";
import { Carousel } from "react-responsive-carousel";

const Banner = () => (
  <Carousel autoPlay infiniteLoop className="banner">
    <div>
      <img alt="" src="/assets/ir1.jpeg" />
      <p className="legend">Year 2020</p>
    </div>
    <div>
      <img alt="" src="/assets/ir2.jpeg" />
      <p className="legend">Blanket Donation</p>
    </div>
    <div>
      <img alt="" src="/assets/ir3.jpeg" />
      <p className="legend">Winter Season</p>
    </div>
  </Carousel>
);

export default Banner;
