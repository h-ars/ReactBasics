import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <main className='NavComponent'>
            <div className="navbar w-screen h-[10vh] flex gap-8 justify-center items-center border-b-1 border-neutral-600 max-sm:hidden ">
            <NavLink className={(e)=>{
                return(
                    e.isActive ? 'bg-amber-500 text-neutral-950' : 'text-amber-500'
                )
            }} to='/'><div className="navObj">
                    <h2>⁜</h2>
                </div></NavLink>
            <NavLink className={(e)=>{
                return(
                    e.isActive ? 'bg-amber-500 text-neutral-950' : 'text-amber-500'
                )
            }} to='/dashboard'><div className="navObj">
                    <h2>Dashboard</h2>
                </div></NavLink>
            <NavLink className={(e)=>{
                return(
                    e.isActive ? 'bg-amber-500 text-neutral-950' : 'text-amber-500'
                )
            }} to='/about'><div className="navObj">
                    <h2>About</h2>
                </div></NavLink>
            <NavLink className={(e)=>{
                return(
                    e.isActive ? 'bg-amber-500 text-neutral-950' : 'text-amber-500'
                )
            }} to='/contacts'><div className="navObj">
                    <h2>Contacts</h2>
                </div></NavLink>
            </div>

            <div className="mobileNav sm:hidden ">
                <div className="mobileNavbar w-screen h-[7vh] flex gap-1 justify-center items-center border-b-1 border-neutral-600 ">
                    <NavLink className={(e)=>{
                    return(
                    e.isActive ? 'bg-amber-500 text-neutral-950' : 'text-amber-500'
                    )
                    }} to='/'><div className="mobileNavObj">
                        <h2>⁜</h2>
                    </div></NavLink>
                    <NavLink className={(e)=>{
                    return(
                        e.isActive ? 'bg-amber-500 text-neutral-950' : 'text-amber-500'
                    )
                    }} to='/dashboard'><div className="mobileNavObj">
                        <h2>Dashboard</h2>
                    </div></NavLink>
                    <NavLink className={(e)=>{
                    return(
                        e.isActive ? 'bg-amber-500 text-neutral-950' : 'text-amber-500'
                    )
                    }} to='/about'><div className="mobileNavObj">
                        <h2>About</h2>
                    </div></NavLink>
                    <NavLink className={(e)=>{
                    return(
                        e.isActive ? 'bg-amber-500 text-neutral-950' : 'text-amber-500'
                    )   
                    }} to='/contacts'><div className="mobileNavObj">
                        <h2>Contacts</h2>
                    </div></NavLink>
                </div>
            </div>
        </main>
    );
}

export default Nav;