import React from "react";
import {Routes, Route} from "react-router-dom";

import Navbar from "./components/Navbar"
import Home from "./pages/Home";
import EditStudents from "./pages/EditStudents";
import StudentList from "./pages/StudentList";

import { StudentProvider } from "./context/StudentContext";

function App() {
  return (
    <StudentProvider>
      <div className="app">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/editStudents" element={<EditStudents />} />
          <Route path="/studentList" element={<StudentList />} />
        </Routes>
      </div>
    </StudentProvider>
  )
}

export default App
