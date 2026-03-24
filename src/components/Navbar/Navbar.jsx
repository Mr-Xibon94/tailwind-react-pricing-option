import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';

const navData = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Blog", path: "/blog" },
    { id: 5, name: "Contact", path: "/contact" },
];

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const links = navData.map(route => <Link key={route.id} route={route}></Link>);
    return (
        <div className='flex justify-between mx-2.5 my-4'>
            <span className='flex gap-2.5' onClick={() => setOpen(!open)}>
                {
                    open? <X className='md:hidden'></X> : <Menu className='md:hidden'></Menu>
                }
            <ul className={`md:hidden absolute duration-1000 ${open? 'top-9 left-6': 'top-9 -left-40'} `}>
                {links}
            </ul>
                
            <h2>Navbar</h2>
             </span>
             

           

            <ul className='hidden md:flex gap-2.5'>
                {
                    links
                }

                {/* {
                    navData.map(route => <li key={route.id}>
                        <a href={route.path}>{route.name}</a>
                        </li>)
                } */}
                {/* <li className='mr-2.5'><a href="/home">Home</a></li>
                <li className='mr-2.5'><a href="/about">About</a></li>
                <li className='mr-2.5'><a href="blog">Blog</a></li> */}
            </ul>

            <button>Sign In</button>
        </div>
    );
};

export default Navbar;