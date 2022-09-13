import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AiOutlineUser } from 'react-icons/ai'
import { BsChevronRight } from 'react-icons/bs'
import { Link, useLocation, } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import { IoMdLogOut } from 'react-icons/io'
import Spinner from '../../Components/Spinner/Spinner';

const Header = () => {
    const [user, loading] = useAuthState(auth);
    const {pathname} = useLocation();


    if (loading) {
        return <Spinner />
    };


    const logOut = () =>{
        signOut(auth);
        localStorage.removeItem('accessToken');
    }

    const menuItems = <>
        <li><Link to='/' >Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/appointment' >Appointment</Link></li>
        <li><Link to='/reviews' >Reviews</Link></li>
        <li><Link to='/contact' >Contact</Link></li>
        {
            user && <li><Link to='/dashboard' >Dashboad</Link></li>
        }
        {
            user && <li ><span onClick={logOut} className='bg-red-400 text-white gap-2 ml-2'><IoMdLogOut className='text-lg' /> Logout</span></li>
        }
    </>;



    return (
        <header className={`sticky top-0 bg-white z-50`}>
            <div className="container mx-auto navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="bg-gray-100 btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}

                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">Doctors Portal</Link>
                </div>
                <div className="navbar-end">
                    <ul tabIndex="0" className="menu menu-horizontal p-0 hidden lg:inline-flex">
                        {menuItems}
                    </ul>
                    {
                        user ? <div className='space-x-2'>
                            <button className="btn ml-2 btn-ghost btn-circle bg-primary text-white text-lg">{user.email.substring(0, 1).toUpperCase()}</button>
                            {
                                pathname.includes('dashboard') && <label htmlFor="dashboard-drawer" className="btn btn-ghost drawer-button lg:hidden bg-gray-100">
                                <BsChevronRight/>
                            </label>
                            }
                        </div>
                            :
                            <Link to='/login' className=" btn btn-ghost btn-circle bg-gray-100">
                                <AiOutlineUser className='text-lg' />
                            </Link>
                    }
                </div>
            </div>
        </header>
    );
};

export default Header;

