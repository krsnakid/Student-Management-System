import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const EditStudents = lazy(() => import("./pages/EditStudents"));
const StudentList = lazy(() => import("./pages/StudentList"));

import { StudentProvider } from "./context/StudentContext";

const LoadingFallback = () => (
  <div className="w-full h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
    <p className="ml-3 text-lg font-medium text-gray-600">Loading...</p>
  </div>
);

function App() {
  return (
    <StudentProvider>
      <div className="app">
        <Navbar />
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/editStudents" element={<EditStudents />} />
            <Route path="/studentList" element={<StudentList />} />
          </Routes>
        </Suspense>
      </div>
    </StudentProvider>
  );
}

export default App;
