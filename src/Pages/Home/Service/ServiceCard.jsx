import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    console.log("dataServices", service)
    const { img, title, price, _id } = service
    return (
        <div>
            <div className="card card-compact bg-base-100 w-96 shadow-xl mt-10">
                <figure>
                    <img
                        src={img}
                        alt="Shoes"
                        className='w-80 mx-auto rounded-md'
                    />

                </figure>
                <div className="card-body ">
                    <h2 className="card-title mx-auto ">{title}</h2>
                    <div>
                        <p>Price : ${price}</p>
                        <div className='flex justify-center mt-3'>

                            <Link to={`/checkout/${_id}`}> <button className='btn btn-sm btn-outline'>Book Now  <FaLongArrowAltRight className='text-2xl text-black' /></button>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;