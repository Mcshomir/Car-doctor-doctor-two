import React from 'react';
import img1 from "../../../assets/assets/images/team/1.jpg"
import { FaExclamation } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const Testmonial = () => {
    return (
        <div>
            <div className='my-10'>
                <p className='text-red-300'>Testmonial</p>
                <h2 className='text-2xl'>What customer says !</h2>
                <h4 className='text-xl'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </h4>
            </div>

            <div className='grid grid-cols-2 gap-10'>

                <div className='shadow-md border-2 border-sky-500 p-5 rounded-md'>

                    <div className='flex justify-between'>
                        <div>
                            <img src={img1} className='w-24 rounded-full' alt="" />
                        </div>
                        <div>
                            <h4>Andro smith</h4>
                            <h5>Buisnessman</h5>
                        </div>
                        <div>
                            <FaExclamation className='text-4xl' />
                        </div>
                    </div>
                    <div className='mt-5'>
                        <p>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                        </p>
                        <p className='flex text-orange-500 justify-center mt-3'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </p>
                    </div>
                </div>
                <div className='border-2 shadow-md border-sky-500 p-5 rounded-md '>
                    <div className='flex justify-between'>
                        <div>
                            <img src={img1} className='w-24 rounded-full' alt="" />
                        </div>
                        <div>
                            <h4>Andro smith</h4>
                            <h5>Buisnessman</h5>
                        </div>
                        <div>
                            <FaExclamation className='text-4xl' />
                        </div>
                    </div>
                    <div className='mt-5'>
                        <p>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                        </p>
                        <p className='flex text-orange-500 justify-center mt-3'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Testmonial;