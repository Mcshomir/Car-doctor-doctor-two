import React, { useContext } from 'react';
import img from '../../assets/assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Login = () => {

    const { signinUser } = useContext(AuthContext);
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signinUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => { console.log("error", error) })


    }
    return (
        <div>

            <div>
                <div className="hero bg-base-200 min-h-screen">
                    <div className="hero-content flex-col gap-20 lg:flex-row">
                        <div className="text-center lg:text-left">
                            <img src={img} alt="" />

                        </div>
                        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                            <h1 className="text-5xl font-bold">Login!</h1>
                            <form onSubmit={handleLogin} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">

                                    <input className='btn btn-primary' type="submit" value="Login" />
                                </div>
                            </form>
                            <p ><small>if you have not account plz <Link className='text-red-500' to='/signup'>account plz signup</Link></small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;