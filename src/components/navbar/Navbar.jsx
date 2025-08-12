// Navbar.jsx
import React, { useState } from "react";
import { Menu, X, Bell } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const notifications = 3;
    const linkData = [
        { path: 'Home', link: '/' },
        { path: 'Shop', link: 'shop' },
        { path: 'Blog', link: 'blog' },
        { path: 'Gallary', link: 'gallary' },
    ]
    const navigate = useNavigate();
    return (
        <>
            <div className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20 shadow-sm">
                <div className="">
                    <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">

                        <a onClick={()=>navigate('/')} className="cursor-pointer text-2xl font-bold text-rose-500">
                            GiftShop
                        </a>
                        <ul className="hidden md:flex space-x-8">
                            {
                                linkData.map((linkItem, linkIndex) => (
                                    <li key={linkIndex}>
                                        <NavLink
                                            to={linkItem.link}
                                            className="hover:text-rose-500 transition font-medium"
                                        >
                                            {linkItem.path}
                                        </NavLink>
                                    </li>
                                ))}
                        </ul>
                        <div className="flex items-center space-x-4">
                            <button className="relative p-2 hover:bg-rose-50 rounded-full">
                                <Bell size={22} className="text-gray-700" />
                                {notifications > 0 && (
                                    <span className="absolute top-1 right-1 bg-rose-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                                        {notifications}
                                    </span>
                                )}
                            </button>
                            <button
                                className="md:hidden p-2 text-gray-700"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                {isOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                    {isOpen && (
                        <ul className="md:hidden bg-white border-t border-gray-100 shadow-lg">
                            {
                                linkData.map((linkItem, linkIndex) => (
                                    <li key={linkIndex} className="border-b border-gray-100">
                                        <NavLink
                                            to={linkItem.link}
                                            className="block px-4 py-3 hover:bg-rose-50 hover:text-rose-500 transition"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {linkItem.path}
                                        </NavLink>
                                    </li>
                                ))}
                        </ul>
                    )}
                </div>
            </div>
        </>
    );
}

export default Navbar;