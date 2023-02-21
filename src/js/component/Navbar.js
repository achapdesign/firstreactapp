import React from 'react';

function Navbar() {
    return (
        <div className='Nav'>
            <div className="brand">Start Bootstrap
            </div>
            <link className="links">
                <Link.item href="#home">Home</Link.item>
                <Link.item href="#link">About</Link.item>
                <Link.item href="#link">Services</Link.item>
                <Link.item href="#link">Contact</Link.item>
            </link>
        </div>
    );
}

export default Navbar