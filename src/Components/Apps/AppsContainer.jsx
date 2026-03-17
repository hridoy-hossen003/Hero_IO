import React from "react";
import downloadIcon from "../../assets/icon-downloads.png";
import stars from "../../assets/icon-ratings.png";
import { useNavigate } from "react-router";

const AppsContainer = ({ data }) => {
  const navigate = useNavigate();
  const { image, title, id , ratingAvg, downloads } =
    data;

    const navigation = (id) => {
        navigate(`${id}`)
    }

  return (
    <div onClick={()=> navigation(id)} className="card bg-base-100  shadow-sm p-2">
      <figure>
        <img className="w-96 rounded-lg" src={image} alt="Shoes" />
      </figure>
      <div className=" text-left mt-2">
        <h2 className="text-xl  font-semibold">Name: {title}</h2>
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

export default AppsContainer;
