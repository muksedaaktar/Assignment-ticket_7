import React from 'react';


const Banner = () => {
    return (
        <div className='max-w-[1440px] mx-auto inter flex justify-between'>
        <div className='w-[708px] h-[250px] bg-gradient-to-r from-[#632EE3]  to-[#9F62F2] text-white rounded-xl flex flex-col justify-center items-center mb-8 font-bold '>
            <h1>In-Progress</h1>
            <p className='font-semibold text-[60px]'><span>0</span></p>

        </div>
        <div className='w-[708px] h-[250px] bg-gradient-to-r from-[#54CF68]  to-[#00827A] text-white rounded-xl flex flex-col justify-center items-center font-bold mb-8'>
            <h1>Resolved</h1>
            <p className='font-semibold text-[60px]'><span>0</span></p>

        </div>
        
        </div>
    );
};

export default Banner;