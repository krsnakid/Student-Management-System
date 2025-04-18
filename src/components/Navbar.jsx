import React from "react";
import { Link } from "react-router-dom";


function Navbar(){

    return (
        <>
           <div className="navbar flex h-16 bg-blue-900 justify-between items-center fixed top-0 left-0 w-full z-50">
            <h2 className="font-serif text-3xl ml-6 text-white font-medium ">
                Student Management System
            </h2>
            <nav className="navbar-link w-1/3 flex justify-evenly text-lg text-white">

                <Link to = '/' className="hover:text-lime-300">Home</Link>
                
                <Link to = '#' className="hover:text-lime-300">Student List</Link>

                <Link to = '/editStudents' className="hover:text-lime-300">Add/Delete Student</Link>
                
                <Link to = '#' className="hover:text-lime-300">Visit Student</Link>
            </nav>
           </div>
        </>
    )
}
export default Navbar;