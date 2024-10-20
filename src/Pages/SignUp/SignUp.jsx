import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/assets/images/login/login.svg'
import { AuthContext } from '../../AuthProvider/AuthProvider';
const SignUp = () => {
    const { createUser } = useContext(AuthContext);

    const handleSignup = event => {
        event.preventDefault();
        const form = event.target
        const name = form.name.value
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log("error", error)
            })





    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col gap-20 lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img src={img} alt="" />

                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <h1 className="text-5xl font-bold">SignUp!</h1>
                        <form onSubmit={handleSignup} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" name='password' placeholder="confirm password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">

                                <input className='btn btn-primary' type="submit" value="SignUp" />
                            </div>
                        </form>
                        <p ><small>if you have  <Link className='text-blue-500' to='/login'>account plz login</Link></small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;