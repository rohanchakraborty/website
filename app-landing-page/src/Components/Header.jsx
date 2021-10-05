import React from 'react';
import Navbar from './Navbar'

function Header() {
    return(
        <div id = 'main'>
            <Navbar/>
            <div className ='name'>
                <h1>
                    <span>dynamic solutions</span> for your dynamic problems
                </h1>
                <p className='details'>
                    Write ... Explain ...
                </p>
                <a href='#' className='cv-btn'>Contact</a>
            </div>
        </div>
    )
}

export default Header;
