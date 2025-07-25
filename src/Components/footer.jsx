import React, { useState, useEffect } from 'react';

const Footer = () => {
    return (
        <main className="footerComp">
            <div className="footer w-screen h-[10vh] flex gap-8 justify-center items-center border-t-1 border-neutral-600 max-sm:hidden">
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, ipsa!</h3>
            </div>
            <div className="footer w-screen h-[13vh] flex gap-8 justify-center items-center border-t-1 border-neutral-600 sm:hidden">
                <h3 className='text-[12px]'>Lorem ipsum dolor, sit amet consectetur adipisicing.</h3>
            </div>
        </main>
    );
}
 
export default Footer;