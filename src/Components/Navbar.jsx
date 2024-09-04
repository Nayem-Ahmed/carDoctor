"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaBars, FaTimes, FaHome, FaInfoCircle, FaServicestack, FaBloggerB } from 'react-icons/fa'; // Importing icons
import Components from './Navbar.module.css';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false); // State to manage menu visibility
    const pathname = usePathname()
    console.log(pathname);


    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={Components.navbar}>
            <div>
                <Image
                    alt="logo"
                    width={60}
                    height={60}
                    src={'/assets/logo.svg'}
                />
            </div>

            <div className={`${Components.navLinks} ${menuOpen ? Components.showMenu : ''}`}>
                <ul>
                    <li><Link className={`${pathname === '/' && 'text-red-500'}`} href="/"><FaHome /> Home</Link></li>
                    <li><Link className={`${pathname === '/about' && 'text-red-500'}`} href="/about"><FaInfoCircle /> About</Link></li>
                    <li><Link className={`${pathname === '/services' && 'text-red-500'}`} href="/services"><FaServicestack /> Services</Link></li>
                    <li><Link className={`${pathname === '/blog' && 'text-red-500'}`} href="/blog"><FaBloggerB /> Blog</Link></li>
                </ul>

            </div>

            <div className={Components.appointmentButton}>
                <button type="button">Appointment</button>

                <div className={`${Components.menuIcon}`} onClick={toggleMenu}>
                    {menuOpen ? <FaTimes /> : <FaBars />} {/* Hamburger icon */}
                </div>
            </div>

        </nav>
    );
};

export default Navbar;
