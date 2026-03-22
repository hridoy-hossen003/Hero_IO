import React, { Suspense, useState } from "react";
import { useLoaderData } from "react-router";
import AppsContainer from "./AppsContainer";
import appLogo from "../../assets/vscode_logo-removebg-preview.png";
import AppNotFound from "./AppNotFound";

const Apps = () => {
  const datas = useLoaderData();

  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    const searchApp = e.target.value.toLowerCase();
    setSearch(searchApp);
  };

  const filteredData = datas.reduce((acc, app) => {
    if (app.title.toLowerCase().includes(search)) {
      acc.push(app);
    }
    return acc;
  }, []);

  return (
    <div className="text-center py-15 space-y-3 max-w-340 mx-auto">
      <div className="grid justify-center gap-4">
        <h1 className="text-5xl font-bold flex relative items-center justify-center gap-4">
          <span> Our All Applications</span>
          <img src={appLogo} className="w-12" alt="" />
        </h1>
        <p className="text-lg text-gray-500 px-4">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex justify-between px-4">
        <div>
          <h2 className="text-2xl font-semibold">
            ({filteredData.length}) Apps Found
          </h2>
        </div>

        {/* input field */}

        <div>
          <label className="input bg-transparent">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              name="search"
              onChange={handleSearch}
              value={search}
              type="search"
              required
              placeholder="Search"
            />
          </label>
        </div>
      </div>
      {filteredData.length > 0 ? (
        <div>
          <Suspense
            fallback={
              <span className="loading loading-infinity loading-xl"></span>
            }
          >
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 px-4 gap-4 mt-3 mb-10">
              {filteredData.map((data) => (
                <AppsContainer key={data.id} data={data}></AppsContainer>
              ))}
            </div>
          </Suspense>
        </div>
      ) : (
        <AppNotFound setSearch={setSearch}></AppNotFound>
      )}
    </div>
  );
};

export default Apps;
