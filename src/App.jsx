import React from "react";
import {Routes, Route} from "react-router-dom";

import Navbar from "./components/Navbar"
import Home from "./pages/Home";
import EditStudents from "./pages/EditStudents";

import useLocalStorage from "./utils/useLocalStorage";

function App() {
  const [studentList, setStudentList] = useLocalStorage('stdLis', [])

  const setStudent = (val) => {
    const data = localStorage.getItem('stdLis')
    const stdLis = data && JSON.parse(data) 

    const newStdLis = [...stdLis, val]
    console.log(newStdLis)
    setStudentList(newStdLis)


    console.log(stdLis === null ? "Error : Unrecognised key" : "Data added")

  }

  const deleteStudent = (val) => {
    const newStdLis = studentList.filter((_, indx) => val !== indx)

    setStudentList(newStdLis)
  }

  return (
    <div className="app">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/editStudents" element={<EditStudents stdLis={studentList} setStd={setStudent} delStd={deleteStudent}/>} />
      </Routes>
    </div>
  )
}

export default App
