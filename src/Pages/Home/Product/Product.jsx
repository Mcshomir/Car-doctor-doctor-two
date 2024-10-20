import React from 'react';
import img1 from '../../../assets/assets/images/products/1.png'
import img2 from '../../../assets/assets/images/products/2.png'
import img3 from '../../../assets/assets/images/products/3.png'
import img4 from '../../../assets/assets/images/products/4.png'
import img5 from '../../../assets/assets/images/products/5.png'
import img6 from '../../../assets/assets/images/products/6.png'
import { FaStar } from "react-icons/fa";

const Product = () => {
    return (
        <div >
            <div className='mt-[30px]'>
                <div>
                    <h2 className='text-red-500'>Our Products</h2>
                    <h1 className='text-3xl'>Browse Our Products !</h1>
                    <p className="">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                </div>
                <div className='grid grid-cols-3 gap-5 mt-10'>


                    <div className="card card-compact bg-base-100 w-96 shadow-xl">
                        <figure className='h-8/12'>
                            <img
                                src={img1}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body ">
                            <div className=' flex justify-center text-orange-500'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />

                            </div>
                            <h2 className="card-title flex justify-center">Car Engine Plug !</h2>

                            <div className="card-actions justify-center">
                                <p className="text-red-400"> $12.00 </p>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact bg-base-100 w-96 shadow-xl">
                        <figure className='h-8/12'>
                            <img
                                src={img6}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body ">
                            <div className=' flex justify-center text-orange-500'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />

                            </div>
                            <h2 className="card-title flex justify-center">Car Engine Plug !</h2>

                            <div className="card-actions justify-center">
                                <p className="text-red-400"> $12.00 </p>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact bg-base-100 w-96 shadow-xl">
                        <figure className='h-8/12'>
                            <img
                                src={img2}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body ">
                            <div className=' flex justify-center text-orange-500'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />

                            </div>
                            <h2 className="card-title flex justify-center">Car Engine Plug !</h2>

                            <div className="card-actions justify-center">
                                <p className="text-red-400"> $12.00 </p>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact bg-base-100 w-96 shadow-xl">
                        <figure className='h-8/12'>
                            <img
                                src={img3}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body ">
                            <div className=' flex justify-center text-orange-500'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />

                            </div>
                            <h2 className="card-title flex justify-center">Car Engine Plug !</h2>

                            <div className="card-actions justify-center">
                                <p className="text-red-400"> $12.00 </p>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact bg-base-100 w-96 shadow-xl">
                        <figure className='h-8/12'>
                            <img
                                src={img4}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body ">
                            <div className=' flex justify-center text-orange-500'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />

                            </div>
                            <h2 className="card-title flex justify-center">Car Engine Plug !</h2>

                            <div className="card-actions justify-center">
                                <p className="text-red-400"> $12.00 </p>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact bg-base-100 w-96 shadow-xl">
                        <figure className='h-8/12'>
                            <img
                                src={img5}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body ">
                            <div className=' flex justify-center text-orange-500'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />

                            </div>
                            <h2 className="card-title flex justify-center">Car Engine Plug !</h2>

                            <div className="card-actions justify-center">
                                <p className="text-red-400"> $12.00 </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Product;