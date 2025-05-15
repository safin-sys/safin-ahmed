"use client";

import { useState } from "react";

const Nav = () => {
    const links = ["Home", "Experience", "Projects", "Blog"];
    const [activeLink, setActiveLink] = useState("Home");
    return (
        <nav className="container flex items-center h-16 font-heading font-normal justify-between px-2">
            {/* <img src="logo.svg" alt="Safin Ahmed Logo" /> */}
            <div className="links flex gap-4">
                {links.map((link, key) => (
                    <a
                        className="flex flex-col items-center relative group"
                        href="#"
                        key={key}
                    >
                        {link}
                        <img
                            className={`${
                                activeLink === link
                                    ? ""
                                    : "invisible group-hover:visible"
                            } absolute bottom-0`}
                            src="swoosh.svg"
                            alt=""
                        />
                    </a>
                ))}
            </div>
            <button>Contact</button>
        </nav>
    );
};

export default Nav;
