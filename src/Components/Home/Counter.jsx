import React from 'react';
import CountUp from "react-countup";

const Counter = () => {
    return (
      <div className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] md:py-16 py-10">
        <h2 className=" text-4xl text-white text-center font-semibold">
          Trusted by Millions, Built for You
        </h2>
        <div className="md:flex  justify-around">
          <div className="grid gap-4 text-center my-4">
            <p className="text-gray-200 font-bold md:font-normal">
              Total Downloads
            </p>
            <p className="md:text-8xl text-7xl text-white font-bold">29.6M</p>
            <p className="text-gray-200">21% more than last month</p>
          </div>

          <div className="grid gap-4 text-center mt-4">
            <p className="text-gray-200 font-bold md:font-normal">
              Total Reviews
            </p>
            <p className="md:text-8xl text-7xl text-white font-bold">906K</p>
            <p className="text-gray-200">46% more than last month</p>
          </div>

          <div className="grid gap-4 text-center mt-4">
            <p className="text-gray-200 font-bold md:font-normal">
              Active Apps
            </p>
            <p className="md:text-8xl text-7xl text-white font-bold">132+</p>
            <p className="text-gray-200">31 more will Launch</p>
          </div>
        </div>
      </div>
    );
};

export default Counter;