import React from 'react';
import bannerImg1 from "../../../assets/vector1.png"


const Banner = () => {
    return (
        <div className='max-w-[1440px] mx-auto inter flex justify-between flex-col md:flex-row'>
        <div className=' bg-gradient-to-r from-[#632EE3]  to-[#9F62F2] text-white rounded-xl flex  justify-between items-center mb-8 font-bold '>
            <div>
                <img  src={bannerImg1} alt="" />
            </div>
            <div>
                <h1>In-Progress</h1>
            <p className='font-semibold text-[60px]'><span>0</span></p>
            </div>
            <div>
                <img className='rotate-180 scale-y-[-1]' src={bannerImg1} alt="" />
            </div>
            

        </div>
        <div className=' bg-gradient-to-r from-[#54CF68]  to-[#00827A] text-white rounded-xl flex  justify-between items-center font-bold mb-8'>
            <div>
                <img  src={bannerImg1} alt="" />
            </div>
            <div>
                <h1>Resolved</h1>
            <p className='font-semibold text-[60px]'><span>0</span></p>
            </div>
            <div>
                <img className='rotate-180 scale-y-[-1]' src={bannerImg1} alt="" />
            </div>
            
        </div>
        
        </div>
    );
};

export default Banner;