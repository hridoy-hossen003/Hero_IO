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
console.log(isEmpty);
  useEffect(() => {
    const storedApps = getApps();
   
    const filteredApps = apps.filter((app) => storedApps.includes(app.id));
    setInstalledApps(filteredApps);
    setIsempty(filteredApps.length == 0)
  }, [apps , chengeDep]);

  return (
    <div className="max-w-340 mx-auto">
      <div className="text-center space-y-4 pt-20 pb-6">
        <h2 className="text-5xl font-bold flex justify-center items-center">
          <span>Your Installed Apps</span>
          <img className="w-16" src={dropbox} alt="" />
        </h2>
        <p className="text-gray-500 text-lg">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      {isEmpty ? (
        <div>
          <div className="flex flex-col py-4">
            <div className="flex justify-center">
              <img src={warning} className="w-6/12" alt="" srcset="" />
            </div>
            <div className="grid justify-start">
              <h2 className="text-3xl font-bold mt-4">
                No Installed Apps Found
              </h2>
              <p className="text-gray-500 mt-2">
                You haven’t installed any apps yet. Browse the marketplace and
                add your favorite apps to get started.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="py-4">
          <div className="py-2 flex justify-between">
            <div className="text-2xl font-semibold">Apps Found</div>
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
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Item 2</a>
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
