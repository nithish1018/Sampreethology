import React, { useState, useEffect } from 'react';
import Logo from '../../assets/Logo/logo.png';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';

function NavBar() {
    const handleLinkClick = (link) => {
        setCurrentPath(link);
    };
    const [currentPath, setCurrentPath] = useState('');

    useEffect(() => {
        // Extracting the value after the last slash in the pathname
        const pathParts = window.location.pathname.split('/');
        const value = pathParts[pathParts.length - 1];
        console.log(value)
        setCurrentPath(value);
    }, []);

    return (
        <header className="body-font bg-white rounded">
            <div className="container mx-auto flex flex-wrap items-center justify-between py-2 px-2 md:px-0">
                <Link to={"/"} onClick={() => handleLinkClick('')} >
                    <div className="flex items-center">
                        <img src={Logo} alt="Logo" onClick={() => handleLinkClick('')} className="w-10 h-auto md:w-24 md:h-auto" />
                        <span className="ml-2 pb-1 text-lg md:text-4xl roboto-slab-heading">SAMPREETHOLOGY</span>
                    </div>
                </Link>
                <nav className="md:flex md:items-center md:space-x-4 mt-2 md:mt-0">
                    <Link to={"/"}>
                        <a
                            className={`text-base md:text-lg hover:text-gray-900 ${currentPath === '' ? 'text-gray-900 font-bold bg-gray-300 rounded px-2 py-1' : 'text-gray-700 px-2 pr-2'}`}
                            onClick={() => handleLinkClick('')}
                        >
                            HOME
                        </a>
                    </Link>
                    <Link to={"books"}>
                        <a
                            className={`text-base md:text-lg hover:text-gray-900 ${currentPath === 'books' ? 'text-gray-900 font-bold bg-gray-300 rounded px-2 py-1' : 'text-gray-700 px-2'}`}
                            onClick={() => handleLinkClick('books')}
                        >
                            BOOKS
                        </a>
                    </Link>
                    <Link to={"quotes"}>
                        <a
                            className={`text-base md:text-lg hover:text-gray-900 ${currentPath === 'quotes' ? 'text-gray-900 font-bold bg-gray-300 rounded px-2 py-1' : 'text-gray-700 px-2'}`}
                            onClick={() => handleLinkClick('quotes')}
                        >
                            TELUGU_QUOTES
                        </a>
                    </Link>
                    <Link to={"contact"}>
                        <a
                            className={`text-base md:text-lg hover:text-gray-900 ${currentPath === 'contact' ? 'text-gray-900 font-bold bg-gray-300 rounded px-2 py-1' : 'text-gray-700 px-2'}`}
                            onClick={() => handleLinkClick('contact')}
                        >
                            CONTACT
                        </a>
                    </Link>
                </nav>
            </div>
        </header>
    );
}

export default NavBar;
