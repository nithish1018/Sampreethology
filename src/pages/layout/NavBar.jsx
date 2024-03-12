import React, { useState } from 'react';
import Logo from '../../assets/Logo/logo.png';
import { Link } from "react-router-dom";

function NavBar() {
    const [selectedLink, setSelectedLink] = useState(null);

    const handleLinkClick = (link) => {
        setSelectedLink(link);
    };

    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link to={"/"}>
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img src={Logo} alt="Logo" className="w-20" />
                        <span className="ml-3 text-xl">Sampreethology</span>
                    </a>
                </Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link to={"/"}>
                        <a
                            className={`mr-5 hover:text-gray-900 ${selectedLink === 'first' ? 'text-gray-900 text-xl bg-gray-300 rounded px-2' : ''}`}
                            onClick={() => handleLinkClick('first')}
                        >
                            Home
                        </a>
                    </Link>
                    <Link to={"books"}>
                        <a
                            className={`mr-5 hover:text-gray-900 ${selectedLink === 'second' ? 'text-gray-900 text-xl bg-gray-300 rounded px-2' : ''}`}
                            onClick={() => handleLinkClick('second')}
                        >
                            Books
                        </a>
                    </Link>

                    <Link to={"quotes"}>
                        <a
                            className={`mr-5 hover:text-gray-900 ${selectedLink === 'third' ? 'text-gray-900 text-xl bg-gray-300 rounded px-2' : ''}`}
                            onClick={() => handleLinkClick('third')}
                        >
                            Quotes
                        </a>
                    </Link>

                    <Link to={"contact"}>
                        <a
                            className={`mr-5 hover:text-gray-900 ${selectedLink === 'fourth' ? 'text-gray-900 text-xl bg-gray-300 rounded px-2' : ''}`}
                            onClick={() => handleLinkClick('fourth')}
                        >
                            Contact
                        </a>
                    </Link>
                </nav>
            </div>
        </header>
    );
}

export default NavBar;
