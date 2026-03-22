import React from "react";
import warningIcon from "../../assets/warning_sign-removebg-preview.png";

const AppNotFound = ({ setSearch }) => {
  return (
    <div className="grid justify-center items-center gap-6 py-8">
      <div className="flex justify-center">
        <img src={warningIcon} alt="" />
      </div>
      <h1 className="text-4xl font-bold text-gray-500">Upps ! App Not found</h1>
      <div>
        <button
          className="btn font-bold btn-warning w-6/12 "
          onClick={() => setSearch("")}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default AppNotFound;
