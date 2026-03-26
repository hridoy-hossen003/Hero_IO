import React from 'react';
import { useRouteError } from 'react-router';
import errorImg from '../../src/assets/errorpage.png'

const ErrorPage = () => {
    const error = useRouteError()

    return (
      <div className=" flex  flex-col-reverse md:grid md:grid-cols-2 py-20 md:py-5 items-center md:justify-around max-w-340 mx-auto h-screen">
        <div className="grid justify-center items-center">
          <div className="w-full space-y-2 px-2 text-center">
            <h3 className=" text-5xl font-semibold ">{error?.statusText || error?.message}</h3>
            <p className='text-lg text-gray-600'>Please check your internet connections and revise your code to prevent this error
             </p>
          </div>
          
        </div>
        <div>
          <img src={errorImg} alt="" srcset="" />
        </div>
      </div>
    );
};

export default ErrorPage;