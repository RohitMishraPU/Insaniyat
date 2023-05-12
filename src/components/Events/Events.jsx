import React from "react";
import { Carousel } from "react-responsive-carousel";

const Events = () => (
  <Carousel autoPlay infiniteLoop className="events">
    <div>
      <img alt="" src="/src/assets/ir1.jpeg" />
      <p className="legend">Year 2020</p>
    </div>
    <div>
      <img alt="" src="/src/assets/ir2.jpeg" />
      <p className="legend">Blanket Donation</p>
    </div>
    <div>
      <img alt="" src="/src/assets/ir3.jpeg" />
      <p className="legend">Winter Season</p>
    </div>
    <div>
      <img alt="" src="/src/assets/dn1.jpeg" />
      <p className="legend">Year 2020</p>
    </div>
    <div>
      <img alt="" src="/src/assets/dn2.jpeg" />
      <p className="legend">Blanket Donation</p>
    </div>
    <div>
      <img alt="" src="/src/assets/dn3.jpeg" />
      <p className="legend">Winter Season</p>
    </div>
    <div>
      <img alt="" src="/src/assets/ir4.jpeg" />
      <p className="legend">Year 2020</p>
    </div>
    <div>
      <img alt="" src="/src/assets/ir5.jpeg" />
      <p className="legend">Winter Season</p>
    </div>
  </Carousel>
);

export default Events;
