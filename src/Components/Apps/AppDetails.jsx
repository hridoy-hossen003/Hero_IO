import React from "react";
import { useLoaderData, useParams } from "react-router";

const AppDetails = () => {
  const datas = useLoaderData();
  const params = useParams();
  const id = Number(params.id);
  const appData = datas.find((item) => item.id === id);

  return (
    <div>
      <h3>apps {id}</h3>
    </div>
  );
};

export default AppDetails;
