import React from "react";

import notFound from "../../assets/error-404.png";
import { useNavigate } from "react-router";
const NotFoundPage = () => {
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate(-1)
    }
  return (
    <div className="bg-white py-10">
      <div className="flex px-10 justify-center">
        <img src={notFound} alt="" />
      </div>
      <div className="grid space-y-3 justify-center items-end text-center">
        <h1 className="font-semibold text-5xl">Oops, page not found!</h1>
        <p className="text-gray-500">The page you are looking for is not available.</p>
        <div>
          <button onClick={handleNavigate} class="btn btn-primary btn-md max-w-6/12 ">Go Back</button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
