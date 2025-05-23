import React from "react";
import { Link } from "react-router-dom";
import { useStudentContext } from "../context/StudentContext";

function Home() {
  const { studentCount } = useStudentContext();
  
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 sm:px-6">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-blue-900 text-center">Welcome to the Student Management System</h1>
      <p className="text-base sm:text-lg text-gray-700 mb-6 text-center max-w-2xl">
        This system allows you to manage student information efficiently. You can add, delete, and view student details with ease.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          to="/editStudents"
          className="bg-blue-600 text-white font-bold px-6 py-3 rounded hover:bg-blue-700 transition text-center"
        >
          Manage Students
        </Link>
        <a
          href="https://github.com/krsnakid/Student-Management-System"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white font-bold px-6 py-3 rounded hover:bg-green-600 transition text-center"
        >
          Learn More
        </a>
      </div>
      
      <div className="absolute bottom-4 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Student Management System. All rights reserved.</p>
        <p className="mt-1 font-medium">Made with ❤️ by Ujjwal Sahu</p>
      </div>
    </div>
  );
}

export default Home;