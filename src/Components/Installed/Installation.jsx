import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getApps } from "../../Storage/LocalHose";
import InstalledApp from "./InstalledApp";
import warning from '../../assets/warning.jpg'
import dropbox from '../../assets/dropbox-removebg-preview.png'

const Installation = () => {
   const [chengeDep, setChangeDep] = useState(true);
  const [installedApps, setInstalledApps] = useState([]);
  const apps = useLoaderData();
  const storageBox = getApps();
  const [isEmpty, setIsempty] = useState(Boolean(storageBox.length > 0));

  useEffect(() => {
    const storedApps = getApps();
   
    const filteredApps = apps.filter((app) => storedApps.includes(app.id));
    setInstalledApps(filteredApps);
    setIsempty(filteredApps.length == 0)
  }, [apps , chengeDep]);


  const handleHeigh = () => {
    const sorted = [...installedApps];
    sorted.sort((a,b)=>b.size - a.size);
    setInstalledApps(sorted)
    
  }

  const handleLow = () => {
    const sorted = [...installedApps]
    sorted.sort((a,b) => a.size - b.size)
    setInstalledApps(sorted)
  }

  return (
    <div className="max-w-340 mx-auto">
      <div className="text-center space-y-4 md:pt-20 pt-6 pb-6">
        <h2 className="md:text-5xl text-3xl font-bold flex justify-center items-center">
          <span>Your Installed Apps</span>
          <img className="md:w-16 w-10" src={dropbox} alt="" />
        </h2>
        <p className="text-gray-500 md:text-lg px-4">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      {isEmpty ? (
        <div>
          <div className="flex flex-col py-4">
            <div className="flex justify-center">
              <img
                src={warning}
                className="md:w-6/12 w-10/12"
                alt=""
                srcset=""
              />
            </div>
            <div className="grid md:justify-start ">
              <h2 className="md:text-3xl text-2xl md:text-start text-center font-semibold mt-4">
                No Apps Installed
              </h2>
              <p className="text-gray-500 md:text-start text-center mt-2">
                You haven’t installed any apps yet. Browse the marketplace and
                add your favorite apps to get started.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="py-4">
          <div className="py-2 flex justify-between items-center px-2">
            <div className="md:text-2xl text-xl font-semibold">
              ({installedApps.length}) Apps Found
            </div>
            <div>
              <div className="dropdown dropdown-bottom dropdown-center">
                <div tabIndex={0} role="button" className="btn m-1">
                  Sort by size
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
                <ul
                  tabIndex="-1"
                  className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                >
                  <li>
                    <a onClick={handleHeigh}>Heigh to Low</a>
                  </li>
                  <li>
                    <a onClick={handleLow}>Low to Heigh</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {installedApps.map((app) => (
            <InstalledApp
              chengeDep={chengeDep}
              setChangeDep={setChangeDep}
              app={app}
            ></InstalledApp>
          ))}
        </div>
      )}
    </div>
  );
};

export default Installation;
