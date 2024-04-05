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
        setCurrentPath(value);
    }, []);


    return (
        <header className="text-gray-600 body-font bg-gray-300 rounded">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link to={"/"}>
                    <a className="flex title-font  font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img src={Logo} alt="Logo" className="w-28" />
                        <span className="ml-3 text-2xl pb-3 font-semibold font-sans">Sampreethology</span>
                    </a>
                </Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link to={"/"}>
                        <a
                            className={`mr-5 text-xl hover:text-gray-900 ${currentPath === '' ? 'text-gray-900 text-2xl bg-gray-300 rounded px-2' : ''}`}
                            onClick={() => handleLinkClick('')}
                        >
                            Home
                        </a>
                    </Link>
                    <Link to={"books"}>
                        <a
                            className={`mr-5 text-xl hover:text-gray-900 ${currentPath === 'books' ? 'text-gray-900 text-2xl bg-gray-300 rounded px-2' : ''}`}
                            onClick={() => handleLinkClick('books')}
                        >
                            Books
                        </a>
                    </Link>

                    <Link to={"quotes"}>
                        <a
                            className={`mr-5 text-xl hover:text-gray-900 ${currentPath === 'quotes' ? 'text-gray-900 text-2xl bg-gray-300 rounded px-2' : ''}`}
                            onClick={() => handleLinkClick('quotes')}
                        >
                            Telugu Quotes
                        </a>
                    </Link>

                    <Link to={"contact"}>
                        <a
                            className={`mr-5 text-xl hover:text-gray-900 ${currentPath === 'contact' ? 'text-gray-900 text-2xl bg-gray-300 rounded px-2' : ''}`}
                            onClick={() => handleLinkClick('contact')}
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
