"use client";

import { useState } from "react";
import Swoosh from "./icons/swoosh";

const Nav = () => {
    const links = ["Home", "Experience", "Projects", "Blog"];
    const [activeLink, setActiveLink] = useState("Home");
    const [hoveredLink, setHoveredLink] = useState(null);
    return (
        <nav className="container flex items-center h-16 font-heading font-normal justify-between px-2">
            {/* <img src="logo.svg" alt="Safin Ahmed Logo" /> */}
            <div className="links flex gap-4">
                {links.map((link, key) => (
                    <a
                        className="flex flex-col items-center relative"
                        href="#"
                        key={key}
                        onMouseEnter={() => setHoveredLink(link)}
                        onMouseLeave={() => setHoveredLink(null)}
                    >
                        {link}
                        <Swoosh
                            animate={
                                activeLink === link || hoveredLink === link
                            }
                        />
                    </a>
                ))}
            </div>
            <button>Contact</button>
        </nav>
    );
};

export default Nav;
