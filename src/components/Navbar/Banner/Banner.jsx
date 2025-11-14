import React from 'react';
import bannerImg1 from "../../../assets/vector1.png"


const Banner = ({inProgressCount,resolvedCount}) => {
    return (
        <div className='bg-gray-100'>
            <div className='max-w-[1440px] mx-auto inter flex justify-between flex-col md:flex-row'>
        <button className=' bg-gradient-to-r from-[#632EE3]  to-[#9F62F2] text-white rounded-xl flex  justify-between items-center mb-8 font-bold mt-8'>
            
            <div>
                <img  src={bannerImg1} alt="" />
            </div>
            <div>
                <h1>In-Progress</h1>
            <p className='font-semibold text-[60px]'><span>{inProgressCount}</span></p>
            </div>
            <div>
                <img className='rotate-180 scale-y-[-1]' src={bannerImg1} alt="" />
            </div>
            

        
        </button>
        <button className=' bg-gradient-to-r from-[#54CF68]  to-[#00827A] text-white rounded-xl flex  justify-between items-center font-bold mb-8 mt-8'>
            
            <div>
                <img  src={bannerImg1} alt="" />
            </div>
            <div>
                <h1>Resolved</h1>
            <p className='font-semibold text-[60px]'><span>{resolvedCount}</span></p>
            </div>
            <div>
                <img className='rotate-180 scale-y-[-1]' src={bannerImg1} alt="" />
            </div>
            
        
        </button>
        
        </div>
        </div>
    );
};

export default Banner;