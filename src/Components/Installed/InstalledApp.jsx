import React from "react";
import downImg from "../../assets/icon-downloads.png";
import rating from "../../assets/icon-ratings.png";
import { removeApp } from "../../Storage/LocalHose";
import { toast } from "react-toastify";

const InstalledApp = ({ app, setChangeDep , chengeDep,}) => {
  const { id, image, title, size, ratingAvg, downloads } = app;
  const handleRemove = id => {
removeApp(id)
setChangeDep(!chengeDep)
toast.error(`Uninstalled ${title}`)
  }

  const btn = (
    <div className="flex items-center">
      <button
        onClick={() => handleRemove(id)}
        className="btn btn-square btn-accent w-full p-2 px-4 text-white"
      >
        Uninstall
      </button>
    </div>
  );
  return (
    <div>
      <ul className="list bg-base-100 rounded-box shadow-md mb-2">
        <li className="list-row ">
          <div className="flex items-center">
            <img className="md:size-18 size-30 rounded-box" src={image} />
          </div>
          <div>
            <div>
              <div>
                <h2 className="text-2xl font-semibold mb-2">
                  Forest : {title}
                </h2>
              </div>

              <div className="flex gap-2">
                <div className="text-xs uppercase font-semibold opacity-60">
                  <div className="flex items-center gap-1">
                    <img src={downImg} className="w-4" alt="" />
                    <span className="font-semibold text-lg text-[#00D390]">
                      {new Intl.NumberFormat("en-US", {
                        notation: "compact",
                      }).format(downloads)}
                    </span>
                  </div>
                </div>

                <div className="text-xs uppercase font-semibold opacity-60">
                  <div className="flex items-center gap-1">
                    <img src={rating} className="w-4" alt="" />
                    <span className="font-semibold text-lg text-[#00D390]">
                      {new Intl.NumberFormat("en-US", {
                        notation: "compact",
                      }).format(ratingAvg)}
                    </span>
                  </div>
                </div>

                <div className="flex gap-1 text-lg text-gray-500 font-semibold">
                  <span>{size}</span>
                  <p>MB</p>
                </div>
              </div>
              <div className="md:hidden">{btn}</div>
            </div>
          </div>
          <div className="hidden md:flex">{btn}</div>
        </li>
      </ul>
    </div>
  );
};

export default InstalledApp;
