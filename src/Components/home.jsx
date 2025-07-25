import React, { useState, useEffect } from 'react';
import Login from './login';
import { Navigate, useNavigate } from 'react-router-dom';

const Home = () => {
    const Nav = useNavigate();

    const goToLogin = () => {
        Nav('/login');
    }

    return (
        <main>
            <div className="test h-[80vh] w-screen flex flex-col align-middle justify-center">
                <div className="h1Home flex align-middle justify-center">
                    <h1 className='max-sm:hidden'>Home Page</h1>
                    <h1 className='text-4xl sm:hidden'>Home Page</h1>
                </div>
                <div className="LoginLink flex align-middle justify-center mt-6">
                    <div className='btn w-fit h-fit pt-2 pb-2 pr-3 pl-3' onClick={goToLogin}>
                        <p className='text-xl font-mono text-neutral-950 font-extrabold'>Login</p>
                    </div> 
                </div>
            </div>
        </main>
    );
}
 
export default Home;