import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Service = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/services`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setServices(data)
            })
    }, [])
    return (
        <div>
            <div className='my-10'>
                <div>
                    <p className='text-red-600'>Service</p>
                    <h2 className='text-4xl '>Our service area !</h2>
                    <h4>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </h4>
                </div>

                <div className='grid grid-cols-3'>
                    {
                        services.map(service => <ServiceCard
                            key={service._id}
                            service={service}

                        ></ServiceCard>)
                    }




                </div>

            </div>
        </div>
    );
};

export default Service;