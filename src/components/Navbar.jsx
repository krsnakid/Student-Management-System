import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    
    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <>
           <div className="navbar flex h-16 bg-blue-900 justify-between items-center fixed top-0 left-0 w-full z-50 px-4 md:px-6">
                <h2 className="font-serif text-xl sm:text-2xl md:text-3xl text-white font-medium">
                    Student Management System
                </h2>
                
                {/* Mobile Menu Button */}
                <button className="md:hidden text-white focus:outline-none" onClick={toggleMenu}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        {menuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        )}
                    </svg>
                </button>
                
                {/* Desktop Navigation */}
                <nav className="hidden md:flex navbar-link w-1/3 justify-evenly text-lg text-white">
                    <Link to='/' className="hover:text-lime-300">Home</Link>
                    <Link to='/studentList' className="hover:text-lime-300">Student List</Link>
                    <Link to='/editStudents' className="hover:text-lime-300">Add/Delete Student</Link>
                </nav>
           </div>
           
           {/* Mobile Navigation */}
           {menuOpen && (
               <div className="fixed top-16 left-0 w-full bg-blue-800 md:hidden z-50">
                   <div className="flex flex-col items-center py-2">
                       <Link to='/' className="w-full text-center py-3 text-white hover:bg-blue-700" onClick={toggleMenu}>Home</Link>
                       <Link to='/studentList' className="w-full text-center py-3 text-white hover:bg-blue-700" onClick={toggleMenu}>Student List</Link>
                       <Link to='/editStudents' className="w-full text-center py-3 text-white hover:bg-blue-700" onClick={toggleMenu}>Add/Delete Student</Link>
                   </div>
               </div>
           )}
        </>
    );
}

export default Navbar;