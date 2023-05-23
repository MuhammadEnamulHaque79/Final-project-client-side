import React from 'react';

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className='mx-auto text-center md:w-4/12 my-4'>
           <p className='text-yellow-600 mb-2'>---{subHeading}---</p>
           <p className='uppercase text-2xl border-y-3 py-3'>{heading}</p>
        </div>
    );
};

export default SectionTitle;