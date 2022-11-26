import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assiets/logo/logo.png';
import { FaBars, } from "react-icons/fa";
import { HiUserCircle } from "react-icons/hi";
import { AuthContext } from '../../AuthProvider/AuthProvider';


const Navbar = () => {

    const { user, signoutUser} = useContext(AuthContext);

    const userSignOut = () => {
        signoutUser();
    };
    // sign out user 

    const menuItems = <>
        <li className='mr-4 font-bold'><Link to='/'>Home</Link></li>
        <li className='mr-4 font-bold'><Link to='/services'>Services</Link></li>
        <li className='mr-4 font-bold'><Link to='/addservies'>Add Servies</Link></li>
        <li className='mr-4 font-bold'><Link to='/myreview'>My Reviews</Link></li>
        <li className='mr-4 font-bold'><Link to='/blog'>Blog</Link></li>
    </>;
    const userInfo = <>
        <span className='hidden lg:block'>{user?.displayName}</span>
        {
            user?.photoURL? 
            <img title={user?.displayName} className='w-10 h-10 rounded-2xl ml-1' src={user?.photoURL} alt="user img"></img>
            :
            <HiUserCircle size={40} />
        }
        {
            user ?
                <button onClick={userSignOut} className="btn px-01 btn-outline btn-primary ml-1">Sign Out</button>
                :
                <Link to="/signup">
                    <button className="btn px-5 btn-outline btn-primary">Sign Up</button>
                </Link>
        }
    </>
    return (
        <div>
            <div className="navbar bg-gray-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <FaBars size={20} />
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">
                        <img className='h-full' src={logo} alt="" />
                        <span>Shef</span>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {userInfo}
                </div>
            </div>
        </div>
    );
};

export default Navbar;