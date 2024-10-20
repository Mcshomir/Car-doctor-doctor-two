import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
// import img from '../../../assets/assets/images/checkout/checkout.png'

const ChekOut = () => {
    const services = useLoaderData()
    console.log("this is chekout services data", services)
    const { title, price, _id, img } = services;
    const { user } = useContext(AuthContext);
    console.log("this is user of chekout information", user);


    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = user?.email;
        const date = form.date.value;
        const price = form.price.value;
        const message = form.message.value;


        const order = {
            service_id: _id,
            services: title,
            customerName: name,
            email,
            img,
            price,
            date,
            message



        }
        console.log("dataOrder", order)

        fetch('http://localhost:5000/bookings', {
            method: "POST",
            headers: {
                "content-type": "application/json"

            },
            body: JSON.stringify(order)

        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("booking successfully !")
                }
            })






    }



    return (
        <div>


            <div className="hero bg-base-200 min-h-screen">





                <div className="card bg-base-100 w-full shrink-0 shadow-2xl max-w-screen-md p-5">
                    <h1 className='text-2xl '><span className="underline">Book Services</span>:{title} </h1>
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className='grid gap-5 grid-cols-2'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Your name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" defaultValue={user?.email} name='email' placeholder="Your email" className="input input-bordered" required />


                            </div>
                        </div>
                        <div className='grid gap-5 grid-cols-2'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Date</span>
                                </label>
                                <input type="date" name="date" placeholder="Date" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" defaultValue={"$" + price} name='price' placeholder="Price" className="input input-bordered" required />


                            </div>
                        </div>
                        <div>
                            <textarea
                                placeholder="Write message"
                                className="textarea textarea-bordered textarea-lg w-full "
                                name='message'
                            ></textarea>
                        </div>

                        <div className="form-control mt-6">

                            <input className='btn btn-secondary' type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default ChekOut;