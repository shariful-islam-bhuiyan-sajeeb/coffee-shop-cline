import React from "react";
import AboutOurPizza from "../AboutOurPizza";
import CarouselBanner from "../CarouselBanner";

const Home = () => {
  return (
    <div>
      <div className="max-w-[1800px]">
        <AboutOurPizza />
        <CarouselBanner />
      </div>
    </div>
  );
};

export default Home;
