import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { toast } from "react-toastify";

// Assets
import dwnImg from "../../assets/icon-downloads.png";
import rating from "../../assets/icon-ratings.png";
import review from "../../assets/icon-review.png";

// Components
import AppChart from "./AppChart";
import Description from "./Description";

// Local Storage Utility
import { addApps, getApps } from "../../Storage/LocalHose";
import AppNotFound from "./AppNotFound";
import AppError from "../ErrorPages/AppError";

const AppDetails = () => {
  // ------------------------------
  // State
  // ------------------------------
  // Button click state (disable after install)
  const params = useParams();
  const id = Number(params.id);

  // Check if app is already installed in localStorage
  const isInstalled = getApps();
  const [click, setClick] = useState(isInstalled.includes(id));

  // ------------------------------
  // Data Loading
  // ------------------------------
  const datas = useLoaderData();
  const appData = datas.find((item) => item.id === id);

  if (!appData) return <AppError></AppError>; // Safety check

  const {
    image,
    title,
    ratings,
    companyName,
    description,
    size,
    reviews,
    ratingAvg,
    downloads,
    
  } = appData;

  // ------------------------------
  // Handlers
  // ------------------------------
  const handleInstalled = (id) => {
    // Add app ID to localStorage
    addApps(id);

    // Disable button
    setClick(true);

    // Show success toast
    toast.success(`${title} is installed`);
  };

  // ------------------------------
  // JSX
  // ------------------------------
  return (
    <div className="max-w-340 mx-auto">
      {/* ------------------------------
          Top Section: Image + Info
      ------------------------------ */}
      <div className="md:grid md:gap-4 md:grid-cols-4 items-center md:pt-10 pt-6">
        {/* App Image */}
        <div className="flex justify-center py-6">
          <img className="w-11/12" src={image} alt={title} />
        </div>

        {/* App Info */}
        <div className="col-span-3 space-y-4 p-4">
          {/* Title & Company */}
          <div className="space-y-2">
            <h1 className="md:text-4xl text-2xl font-bold">SmPlan: {title}</h1>
            <h4 className="text-lg text-gray-500">
              Developed by{" "}
              <span className="font-semibold text-primary">{companyName}</span>
            </h4>
            <div className="divider"></div>
          </div>

          {/* Stats: Downloads / Ratings / Reviews */}
          <div className="flex md:justify-around justify-start gap-6 items-center md:max-w-5/12">
            {/* Downloads */}
            <div className="space-y-2">
              <div className="flex md:justify-start justify-center">
                <img className="md:w-10 w-8" src={dwnImg} alt="Downloads" />
              </div>
              <p className="md:text-lg md:flex hidden  text-gray-500">
                Downloads
              </p>
              <span className="font-black text-2xl md:text-4xl">
                {new Intl.NumberFormat("en-US", { notation: "compact" }).format(
                  downloads,
                )}
              </span>
            </div>

            {/* Average Ratings */}
            <div className="space-y-3 grid justify-center items-center">
              <div className="flex md:justify-start justify-center items-center">
                <img
                  className="max-w-10 w-8"
                  src={rating}
                  alt="Average Ratings"
                />
              </div>
              <div>
                <p className="md:text-lg md:flex hidden  text-gray-500">
                  Average Ratings
                </p>
                <span className="font-black md:text-4xl text-2xl">
                  {new Intl.NumberFormat("en-US", {
                    notation: "compact",
                  }).format(ratingAvg)}
                </span>
              </div>
            </div>

            {/* Total Reviews */}
            <div className="space-y-2 grid justify-center items-center">
              <div className="flex md:justify-start justify-center">
                <img className="max-w-10" src={review} alt="Total Reviews" />
              </div>
              <p className="md:text-lg  md:flex hidden  text-gray-500">
                Total Reviews
              </p>
              <span className="font-black md:text-4xl text-2xl">
                {new Intl.NumberFormat("en-US", { notation: "compact" }).format(
                  reviews,
                )}
              </span>
            </div>
          </div>

          {/* Install Button */}
          <div>
            <button
              disabled={click}
              onClick={() => handleInstalled(id)}
              className={`btn md:btn-xs text-white ${click ? "bg-gray-300" : "bg-[#00D390]"} sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl`}
            >
              {click ? "Installed" : ` Install Now (${size} MB)`}
            </button>
          </div>
        </div>
      </div>

      <div className="divider"></div>

      {/* ------------------------------
          Chart Section
      ------------------------------ */}
      <div><AppChart ratings={ratings} /></div>

      {/* ------------------------------
          Description Section
      ------------------------------ */}
      <div className="p-4">
        <Description description={description} />
      </div>
    </div>
  );
};

export default AppDetails;
