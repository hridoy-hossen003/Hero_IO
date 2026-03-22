import React from "react";
import downloadIcon from "../../assets/icon-downloads.png";
import stars from "../../assets/icon-ratings.png";
import CountUp from "react-countup";
import { useNavigate } from "react-router";

const TrendingApps = ({ app }) => {
  const navigate = useNavigate();
  const { image, title, ratingAvg, downloads  , id} = app;

  const navigation = (id) => {
    navigate(`apps/${id}`);
  };

  return (
    <div onClick={()=>navigation(id)} className="card bg-base-100 cursor-pointer transition duration-100 hover:scale-105 shadow-sm p-2">
      <figure>
        <img className="w-96 rounded-lg" src={image} alt="Shoes" />
      </figure>
      <div className=" text-left mt-2">
        <h2 className="text-xl font-semibold">Name: {title}</h2>
        <div className="flex justify-between mt-2">
          <button className="btn btn-sm">
            <img className="w-4" src={downloadIcon} alt="" />
            <span className="font-semibold">
              {new Intl.NumberFormat("en-US", {
                notation: "compact",
              }).format(downloads)}
            </span>
          </button>

          <button className="btn btn-sm">
            <img className="w-4" src={stars} alt="" />
            <span className="font-semibold">{ratingAvg}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrendingApps;

// {
//   image: string;
//   title: string;
//   companyName: string;
//   id: number;
//   description: string;
//   size: number;
//   reviews: number;
//   ratingAvg: number;
//   downloads: number;
//   ratings: [
//     { name: "1 star"; count: number },
//     { name: "2 star"; count: number },
//     { name: "3 star"; count: number },
//     { name: "4 star"; count: number },
//     { name: "5 star"; count: number }
//   ];
// }
