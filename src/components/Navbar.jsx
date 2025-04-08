import React from "react";


function Navbar(){

    return (
        <>
           <div className="navbar flex h-13 bg-blue-900 justify-between items-center">
            <h2 className="font-serif text-3xl ml-6 text-white font-medium ">
                Student Management System
            </h2>
            <div className="navbar-link w-1/3 flex justify-evenly text-lg text-white">
                <a href="#" className="hover:text-lime-300">Home</a>
                <a href="#" className="hover:text-lime-300">Student List</a>
                <a href="#" className="hover:text-lime-300">Add/Delete Student</a>
                <a href="#" className="hover:text-lime-300">Visit Student</a>
            </div>
           </div>
        </>
    )
}
export default Navbar;