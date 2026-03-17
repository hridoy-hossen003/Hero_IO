import React from 'react';
import { useLoaderData, useParams } from 'react-router';


const AppDetails = () => {
    const data = useLoaderData()
    console.log(data);
  
    return (
        <div>
            <h2>app details {data.length}</h2>
        </div>
    );
};

export default AppDetails;