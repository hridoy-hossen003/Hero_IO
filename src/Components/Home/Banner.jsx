import React from "react";
import { Link } from "react-router";
import bannerImg from "../../assets/hero.png";
import CountUp from "react-countup";

const Banner = () => {
  return (
    <div className="md:pt-20 pt-10">
      <div>
        <h1 className="md:text-7xl font-bold text-center text-6xl">
          We Build <br />{" "}
          <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2]  bg-clip-text text-transparent">
            Productive
          </span>{" "}
          Apps
        </h1>
        <p className="text-center md:px-70 mt-6 text-gray-600">
          At HERO.IO , we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
        <div className="flex justify-center mt-10 gap-4">
          <button className="btn bg-transparent text-lg text-black border border-gray-400 hover:bg-[#6734E4] hover:text-white  hover:transition  duration-600 hover:scale-110 ease-in-out ">
            <i className="fa-brands fa-google-play"></i>
            <Link
              target="_black"
              className=""
              to={"https://play.google.com/store/games?hl=en"}
            >
              Google Play
            </Link>
          </button>

          <button className="btn bg-transparent text-lg text-black border border-gray-400 hover:bg-[#6734E4] hover:text-white hover:transition  duration-600 hover:scale-110 ease-in-out">
            <i className="fa-brands fa-app-store-ios"></i>
            <Link target="_black" to={"https://apps.apple.com/us/iphone/today"}>
              App Store
            </Link>
          </button>
        </div>
      </div>
      <div className="mt-10 flex justify-center">
        <img src={bannerImg} alt="" />
      </div>
      <div></div>
    </div>
  );
};

export default Banner;
