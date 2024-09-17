import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <nav className="bg-gray-800">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            {/* Mobile menu button */}
                            <button
                                type="button"
                                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
                                onClick={toggleMobileMenu}
                            >
                                <span className="absolute -inset-0.5"></span>
                                <span className="sr-only">Open main menu</span>
                                {/* Icon when menu is closed */}
                                <svg
                                    className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                    />
                                </svg>
                                {/* Icon when menu is open */}
                                <svg
                                    className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>

                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex flex-shrink-0 items-center">
                                <Link to="/">
                                    <img
                                        className="h-8 w-auto"
                                        src="https://cdn0.iconfinder.com/data/icons/logos-brands-in-colors/128/react_color-512.png"
                                        alt="Your Logo"
                                    />
                                </Link>
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    <Link
                                        to="/create"
                                        className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                                        aria-current="page"
                                    >
                                        + Create Card
                                    </Link>
                                    <Link
                                        to="/contact"
                                        className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                                    >
                                        Contact
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Link to="https://www.linkedin.com/in/binayak-bhandari/">
                                <button type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                    <span className="absolute -inset-1.5"></span>
                                    <span className="sr-only">Open user menu</span>
                                    <img className="h-8 w-8 rounded-full" src="https://media-bom2-1.cdn.whatsapp.net/v/t61.24694-24/457879708_2132613733787818_4224658857756710253_n.jpg?ccb=11-4&oh=01_Q5AaIDor49d-OENI5_eLa3JzXXPJArMRpYJZWhGnq1QmX1hy&oe=66EC6509&_nc_sid=5e03e0&_nc_cat=100" alt="" />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                <div
                    className={`sm:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}
                    id="mobile-menu"
                >
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        <Link
                            to="/create"
                            className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
                            aria-current="page"
                        >
                            + Create Card
                        </Link>
                        <Link
                            to="/contact"
                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            </nav>
        </>

    );
}

export default Navbar
