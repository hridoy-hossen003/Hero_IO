import React from 'react';

const Description = ({ description }) => {

  return <div className='space-y-6 py-4'>
    <h1 className='text-3xl font-semibold'>Description</h1>
    <div className=''>
        <p className='text-justify'>{description}{description}{description}</p>
    </div>
  </div>;
};

export default Description;