import React from 'react';
import { FaUser } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";
import { MdOutlineSupportAgent } from "react-icons/md";
import { FaTools } from "react-icons/fa";
import { FaFileSignature } from "react-icons/fa";
import { FaUserClock } from "react-icons/fa";

const Features = () => {
    return (
        <div className='my-20 '>
            <div className='mx-auto my-10'>
                <p className='text-red-700'>Core Features</p>
                <h2 className='text-2xl'>Why choose us !</h2>
                <p className='text-md'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='flex gap-4 border-box'>
                <div className='w-[200px] shadow-2xl hover:scale-105 p-5 ease-in-out  rounded-md '>
                    <div className='flex justify-center'>
                        <FaUser className='text-4xl mt-3' />
                        <FaUser className='text-4xl' />
                        <FaUser className='text-4xl mt-3' />
                    </div>
                    <div className='mt-5'>
                        <h3> Expart Team </h3>
                    </div>

                </div>
                <div className='w-[200px] shadow-2xl hover:scale-105 p-5 ease-in-out 2s rounded-md bg-red-400'>
                    <div className='flex justify-center'>
                        <CiClock2 className='text-4xl' />
                    </div>
                    <div className='mt-5'>
                        <h3> Timely Delivery ! </h3>
                    </div>

                </div>
                <div className='w-[200px] shadow-2xl hover:scale-105 p-5 ease-in-out 2s rounded-md'>
                    <div className='flex justify-center'>
                        <MdOutlineSupportAgent className='text-4xl' />
                    </div>
                    <div className='mt-5'>
                        <h3>24/7 Support !  </h3>
                    </div>

                </div>
                <div className='w-[200px] shadow-2xl hover:scale-105 p-5 ease-in-out 2s rounded-md'>
                    <div className='flex justify-center'>
                        <FaTools className='text-4xl' />
                    </div>
                    <div className='mt-5'>
                        <h3> Best Equipment ! </h3>
                    </div>

                </div>
                <div className='w-[200px] shadow-2xl hover:scale-105 p-5 ease-in-out 2s rounded-md'>
                    <div className='flex justify-center'>

                        <FaFileSignature className='text-4xl' />
                    </div>
                    <div className='mt-5'>
                        <h3> 100% Guranty </h3>
                    </div>

                </div>
                <div className='w-[200px] shadow-2xl hover:scale-105 p-5 ease-in-out 2s rounded-md'>
                    <div className='flex justify-center'>
                        <FaUserClock className='text-4xl' />
                    </div>
                    <div className='mt-5'>
                        <h3> Timely Delivery ! </h3>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Features;