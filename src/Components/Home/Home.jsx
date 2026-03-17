import React from "react";
import Banner from "./Banner";
import Counter from "./Counter";

import HomeApps from "./HomeApps";

const Home = () => {
  return (
    <div>
      <div className="max-w-342.5 mx-auto ">
        <Banner></Banner>
      </div>
      <Counter></Counter>
      <HomeApps></HomeApps>
    </div>
  );
};

export default Home;
