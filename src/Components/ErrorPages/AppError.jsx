import React from 'react';
import error from '../../assets/App-Error.png'
import { useNavigate } from 'react-router';
const AppError = () => {
    const navigate = useNavigate()
    return (
      <div className='grid justify-center space-y-4 py-10 md:py-20'>
        <div className='flex justify-center px-10'>
          <img src={error} alt="" />
        </div>
        <div className='space-y-2 p-2'>
          <h1 className="md:text-4xl  text-3xl font-bold text-center ">OPPS!! APP NOT FOUND</h1>
          <p className='text-lg text-gray-500 text-center md:text-start'>
            The App you are requesting is not found on our system. please try
            another apps
          </p>
        </div>
        <div className='flex justify-center'>
            <button onClick={() => navigate(-1)} className='btn btn-primary w-4/12 font-bold'>Go Back</button>
        </div>
      </div>
    );
};

export default AppError;