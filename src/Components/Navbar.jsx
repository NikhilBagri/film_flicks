import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  // console.log(user.email)

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
      <Link to='/'>
        <h1 className='text-red-600 text-3xl sm:text-5xl font-bold cursor-pointer'>
          FILMFLICKS
        </h1>
      </Link>
      {user?.email ? (
        <div>
          <Link to='/account'>
            <button className='text-white text-xs sm:text-lg pr-2 sm:pr-4'>Account</button>
          </Link>
          <button
            onClick={handleLogout}
            className='bg-red-600 px-1 text-xs sm:text-lg sm:px-2 py-1 rounded cursor-pointer text-white'
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to='/login'>
            <button className='text-white text-xs sm:text-lg pr-2 sm:pr-4'>Sign In</button>
          </Link>
          <Link to='/signup'>
            <button className='bg-red-600 px-1 text-xs sm:text-lg sm:px-2 py-1 rounded cursor-pointer text-white'>
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;