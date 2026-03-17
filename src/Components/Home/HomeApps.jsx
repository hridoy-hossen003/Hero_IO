import axios from 'axios';
import React, { Suspense, useEffect, useState } from 'react';
import TrendingApps from './TrendingApps';
import { Link } from 'react-router';

const HomeApps = () => {
    const [show , setShow] = useState(true)
      const [apps, setApps] = useState([]);
      useEffect(() => {
        axios.get("Apps.json").then((data) => setApps(data.data));
      }, []);
      console.log(apps);
    return (
      <div className="grid justify-center text-center space-y-6 py-20">
        <h2 className="text-5xl font-bold">Trending Apps</h2>
        <p className="text-gray-700 text-lg">
          Explore All Trending Apps on the Market developed by us
        </p>
        <div className="grid lg:grid-cols-4 grid-cols-2  gap-4 max-w-340 mx-auto px-4">
          <Suspense
            fallback={
              <span className="loading loading-infinity loading-xl"></span>
            }
          >
            {apps.slice(0, show ? 8 : apps.length).map((app) => (
              <TrendingApps app={app} key={app.id}></TrendingApps>
            ))}
          </Suspense>
        </div>
        <div>
          {show === true ? (
            <button
              onClick={() => setShow(false)}
              className="btn btn-sm btn-primary font-bold"
            >
              See More
            </button>
          ) : (
            <button className="btn btn-sm btn-error font-bold ">
              <Link to={"apps"}>More Apps</Link>
            </button>
          )}
        </div>
      </div>
    );
};

export default HomeApps;