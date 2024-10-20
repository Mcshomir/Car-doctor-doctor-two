import React, { useContext } from 'react';
import logo from '../../../assets/assets/images/logo/logo.svg'
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const handleLogout = () => {
        logout()
            .then(() => { })
            .catch(error => { console.log(error) })

    }


    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">
                        <img src={logo} alt="" />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <Link to="/">      <li><a>Home</a></li></Link>
                        <li>
                            <details>
                                <summary>Services</summary>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a>About</a></li>
                        {
                            user?.email ? <>
                                <li> <Link to='/bookings'> Bookings </Link></li>
                                <li> <button onClick={handleLogout}>logout</button></li>

                            </>

                                :
                                <li> <Link to='/login'>Login</Link></li>
                        }



                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Appointment</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;