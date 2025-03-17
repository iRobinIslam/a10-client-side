import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from '../../Provider/Authprovider';
import logoimg from "../../assets/spors's logo.png";
import { FaBars, FaTimes, FaSignOutAlt, FaUserPlus, FaSignInAlt } from "react-icons/fa";

const Navbar = () => {
    const { user, hanadlelogout } = useContext(AuthContext);
    const [menuOpen, setMenuOpen] = useState(false);

    const handlesignout = () => {
        hanadlelogout()
            .then((result) => console.log(result.user))
            .catch((error) => console.error(error.message));
    };

    return (
        <nav className='bg-gradient-to-r  from-blue-950 to-purple-900 text-white p-4 shadow-2xl  '>
            {/* Small devices layout */}
            <div className='flex justify-between items-center md:hidden'>
                <div className='flex items-center gap-2'>
                    <h1 className="text-xl font-bold tracking-wide text-white">
                        <img src={logoimg}  className="w-10 h-10 rounded-lg object-contain" alt="" />
                    </h1>
                    <span className='text-lg font-semibold  text-gray-200'>A  Online Sports Store</span>
                </div>
                <button 
                    onClick={() => setMenuOpen(!menuOpen)} 
                    className='text-white text-2xl hover:text-gray-300 transition-all duration-300 focus:outline-none'>
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>
            
            {menuOpen && (
                <div className='flex flex-col mt-4 space-y-2 md:hidden'>
                    <NavLink 
                        className={({ isActive }) => 
                            `px-4 py-2 rounded-lg transition-all duration-300 ${
                                isActive ? 'bg-purple-700 text-white' : 'hover:bg-purple-700 hover:text-white'
                            }`
                        } 
                        to='/'
                    >
                        Home
                    </NavLink>
                    <NavLink 
                        className={({ isActive }) => 
                            `px-4 py-2 rounded-lg transition-all duration-300 ${
                                isActive ? 'bg-purple-700 text-white' : 'hover:bg-purple-700 hover:text-white'
                            }`
                        } 
                        to='/allequipment'
                    >
                        All Sports Equipment
                    </NavLink>
                    {user && (
                        <>
                            <NavLink 
                                className={({ isActive }) => 
                                    `px-4 py-2 rounded-lg transition-all duration-300 ${
                                        isActive ? 'bg-purple-700 text-white' : 'hover:bg-purple-700 hover:text-white'
                                    }`
                                } 
                                to='/addequipment'
                            >
                                Add Equipment
                            </NavLink>
                            <NavLink 
                                className={({ isActive }) => 
                                    `px-4 py-2 rounded-lg transition-all duration-300 ${
                                        isActive ? 'bg-purple-700 text-white' : 'hover:bg-purple-700 hover:text-white'
                                    }`
                                } 
                                to='/myequipment'
                            >
                                My Equipment
                            </NavLink>
                        </>
                    )}
                    <div className='mt-4 flex flex-col items-center space-y-3'>
                        {user ? (
                            <>
                                <img 
                                    src={user?.photoURL} 
                                    alt="User" 
                                    className='w-14 h-14 rounded-full border-2 border-purple-500 shadow-lg hover:border-purple-300 transition-all duration-300' 
                                />
                                <button 
                                    onClick={handlesignout} 
                                    className='bg-red-500 text-white px-5 py-2 rounded-md flex items-center gap-2 hover:bg-red-600 transition-all duration-300 shadow-lg hover:shadow-xl'
                                >
                                    <FaSignOutAlt /> Sign Out
                                </button>
                            </>
                        ) : (
                            <>
                                <NavLink 
                                    to='/signup' 
                                    className={({ isActive }) => 
                                        `bg-purple-500 text-white px-5 py-2 rounded-md flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl ${
                                            isActive ? 'bg-purple-700' : 'hover:bg-purple-600'
                                        }`
                                    }
                                >
                                    <FaUserPlus /> Register
                                </NavLink>
                                <NavLink 
                                    to='/signin' 
                                    className={({ isActive }) => 
                                        `bg-purple-500 text-white px-5 py-2 rounded-md flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl ${
                                            isActive ? 'bg-purple-700' : 'hover:bg-purple-600'
                                        }`
                                    }
                                >
                                    <FaSignInAlt /> Login
                                </NavLink>
                            </>
                        )}
                    </div>
                </div>
            )}

            {/* Medium and Larger Devices Layout */}
            <div className='hidden md:flex flex-col items-center space-y-4'>
                <div className='flex flex-col items-center'>
                    <h1 className="text-2xl font-bold tracking-wide text-white">
                        <img src={logoimg}  className="w-20 h-20 rounded-md object-contain" alt="logo img" />
                    </h1>
                    <span className='text-lg font-semibold mt-2 text-gray-300'>A Online Sports Store</span>
                </div>
                
                <div className='flex gap-6 mt-4 text-lg font-medium'>
                    <NavLink 
                        className={({ isActive }) => 
                            `px-4 py-2 rounded-lg transition-all duration-300 ${
                                isActive ? 'bg-purple-700 text-white' : 'hover:bg-purple-700 hover:text-white'
                            }`
                        } 
                        to='/'
                    >
                        Home
                    </NavLink>
                    <NavLink 
                        className={({ isActive }) => 
                            `px-4 py-2 rounded-lg transition-all duration-300 ${
                                isActive ? 'bg-purple-700 text-white' : 'hover:bg-purple-700 hover:text-white'
                            }`
                        } 
                        to='/allequipment'
                    >
                        All Sports Equipment
                    </NavLink>
                    {user && (
                        <>
                            <NavLink 
                                className={({ isActive }) => 
                                    `px-4 py-2 rounded-lg transition-all duration-300 ${
                                        isActive ? 'bg-purple-700 text-white' : 'hover:bg-purple-700 hover:text-white'
                                    }`
                                } 
                                to='/addequipment'
                            >
                                Add Equipment
                            </NavLink>
                            <NavLink 
                                className={({ isActive }) => 
                                    `px-4 py-2 rounded-lg transition-all duration-300 ${
                                        isActive ? 'bg-purple-700 text-white' : 'hover:bg-purple-700 hover:text-white'
                                    }`
                                } 
                                to='/myequipment'
                            >
                                My Equipment
                            </NavLink>
                        </>
                    )}
                </div>

                <div className='mt-4 flex items-center space-x-5'>
                    {user ? (
                        <div className="relative group flex items-center">
                            {/* Tooltip - Left Side */}
                            <span className="absolute left-[-80%] bg-gray-800 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                                {user?.displayName}
                            </span>
                            {/* Profile Image */}
                            <img 
                                src={user?.photoURL} 
                                alt="User" 
                                className='w-14 h-14 rounded-full border-2 border-purple-500 shadow-lg transition-transform transform group-hover:scale-105' 
                            />
                            <button 
                                onClick={handlesignout} 
                                className='bg-red-500 text-white px-5 py-2 rounded-md flex items-center gap-2 ml-4 hover:bg-red-600 transition-all duration-300 shadow-lg hover:shadow-xl'
                            >
                                <FaSignOutAlt /> Sign Out
                            </button>
                        </div>
                    ) : (
                        <>
                            <NavLink 
                                to='/signup' 
                                className={({ isActive }) => 
                                    `bg-purple-500 text-white px-5 py-2 rounded-md flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl ${
                                        isActive ? 'bg-purple-700' : 'hover:bg-purple-600'
                                    }`
                                }
                            >
                                <FaUserPlus /> Register
                            </NavLink>
                            <NavLink 
                                to='/signin' 
                                className={({ isActive }) => 
                                    `bg-purple-500 text-white px-5 py-2 rounded-md flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl ${
                                        isActive ? 'bg-purple-700' : 'hover:bg-purple-600'
                                    }`
                                }
                            >
                                <FaSignInAlt /> Login
                            </NavLink>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;


