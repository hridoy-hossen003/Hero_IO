import React, { useState } from 'react';

const Description = ({ description }) => {
  const [seeMore , setSeeMore] = useState(true)

  return (
    <div className="space-y-6 py-4">
      <h1 className="text-3xl font-semibold">Description</h1>
      <div className="">
        <p className="text-justify">
          {`${description}`
            .repeat(4)
            .split(" ")
            .slice(0, seeMore ? 100 : description.repeat(4).length)
            .join(" ")}
          <span>
            <a
              className="ms-2 text-black font-semibold underline"
              onClick={() => setSeeMore(!seeMore)}
            >
              {seeMore ? "see more" : "see less"}
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Description;