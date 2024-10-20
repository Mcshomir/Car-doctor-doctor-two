import React from 'react';
import img1 from '../../../assets/assets/images/team/1.jpg'
import img2 from '../../../assets/assets/images/team/2.jpg'
import img3 from '../../../assets/assets/images/team/3.jpg'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Team = () => {
    return (
        <div className='my-20'>
            <div >
                <p>Our Team</p>
                <h2 className='text-red-500 text-2xl'>Meet Our Team</h2>
                <h4 className='text-xl text-gray-600 '>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </h4>
            </div>
            <div className='flex gap-3'>
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src={img1}
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Car engine plug</h2>
                        <p>engine plug</p>
                        <div className='flex gap-2'>
                            <FaFacebookSquare />
                            <FaInstagram />
                            <FaLinkedin />
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src={img2}
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Car engine plug</h2>
                        <p>engine plug</p>
                        <div className='flex gap-2'>
                            <FaFacebookSquare />
                            <FaInstagram />
                            <FaLinkedin />
                        </div>

                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src={img3}
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Car engine plug</h2>
                        <p>engine plug</p>
                        <div className='flex gap-2'>
                            <FaFacebookSquare />
                            <FaInstagram />
                            <FaLinkedin />
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Team;