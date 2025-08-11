import React, { useState } from "react";
import { Menu, X, Bell } from "lucide-react";
import { NavLink } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", link: "/" },
        { name: "About", link: "about" },
        { name: "Services", link: "service" },
        { name: "Contact", link: "contect" },
    ];

    return (
        <nav className="fixed w-full z-50 bg-white/30 backdrop-blur-md shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center text-white">
                    <div className="text-2xl font-bold">MyLogo</div>
                    <div className="hidden md:flex space-x-6 items-center nav_div">
                        {
                            navLinks.map((linkIndex, linkItem) => (
                                <NavLink
                                    key={linkItem}
                                    to={linkIndex.link}
                                    className="hover:text-red-500 transition duration-300 text-black"
                                >
                                    {linkIndex.name}
                                </NavLink>
                            ))
                        }
                        <div className="relative cursor-pointer">
                            <Bell color="black" size={24} />
                            <span className="absolute -top-1 -right-1 bg-red-500 text-xs rounded-full px-1">
                                3
                            </span>
                        </div>
                    </div>
                    <div className="md:hidden flex items-center space-x-4">
                        <div className="relative cursor-pointer text-white">
                            <Bell size={24} />
                            <span className="absolute -top-1 -right-1 bg-red-500 text-xs rounded-full px-1">
                                3
                            </span>
                        </div>
                        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-white/30 backdrop-blur-md px-4 pb-4 space-y-2 text-white">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="block hover:text-yellow-300 transition duration-300"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
