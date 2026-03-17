import React, { Suspense } from 'react';
import { useLoaderData } from 'react-router';
import AppsContainer from './AppsContainer';

const Apps = () => {
    const datas = useLoaderData()

    return (
      <div className="text-center py-15 space-y-3 max-w-340 mx-auto">
        <h1 className="text-5xl font-bold">Our All Applications</h1>
        <p className="text-lg text-gray-500 px-4">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>

        <div>
          <Suspense
            fallback={
              <span className="loading loading-infinity loading-xl"></span>
            }
          >
            <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 px-4 gap-4 my-15'>
              {datas.map((data) => (
                <AppsContainer key={data.id} data={data}></AppsContainer>
              ))}
            </div>
          </Suspense>
        </div>
      </div>
    );
};

export default Apps;