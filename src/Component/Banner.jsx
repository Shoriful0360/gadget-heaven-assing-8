import React from 'react';
import img from "../../src/assets/banner.jpg"

const Banner = () => {
    return (
        <div className='relative'>
            <div className="hero  bg-[#9538E2] rounded-md min-h-[600px]">
            <div className=" text-center">
                <div className="px-10 text-center">
                    <h1 className="text-5xl font-bold text-white">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                    <p className="py-6">
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                    </p>
                    <button className="btn text-begoni text-lg">Shop Now</button>
                </div>
            </div>
        </div>
        <div className=' max-w-[1000px] -translate-y-10 px-6 sm:-translate-y-1/4 mx-auto h-[600px] '>
            <img className='rounded-md  border-2' src={img} alt="" />
        </div>
        </div>
    );
};

export default Banner;