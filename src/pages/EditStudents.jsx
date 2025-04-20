import React, { useState, useCallback, useMemo } from "react";
import StudentForm from "../components/StudentForm";
import DisplayStudent from "../components/DisplayStudent";
import { useStudentContext } from "../context/StudentContext";

function EditStudents() {
  const { searchTerm, setSearchTerm, addStudent, deleteStudent, getFilteredStudents } = useStudentContext();
  const [showAddForm, setShowAddForm] = useState(false);
  
  const toggleShowAddForm = useCallback(() => {
    setShowAddForm(prev => !prev);
  }, []);
  
  const filteredStudents = useMemo(() => getFilteredStudents(), [getFilteredStudents]);
  
  const studentList = useMemo(() => {
    return filteredStudents.map((obj, indx) => (
      <DisplayStudent 
        key={indx} 
        obj={obj} 
        delStd={() => deleteStudent(indx)} 
      />
    ));
  }, [filteredStudents, deleteStudent]);

  const handleSearchChange = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, [setSearchTerm]);

  return (
    <>
      <div className="w-full bg-gray-100 flex flex-col items-center p-4" style={{ marginTop: '4rem' }}>
        <div className="w-full max-w-4xl">
          <section className="flex flex-col sm:flex-row gap-3 sm:gap-0 sm:justify-between sm:items-center mb-4">
            <div className="flex items-center bg-white shadow-md rounded-lg overflow-hidden w-full sm:max-w-md">
              <i className="fa-solid fa-magnifying-glass text-gray-500 px-3"></i>
              <input
                type="text"
                placeholder="Search by Name"
                className="w-full p-2 focus:outline-none"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
            <div className="flex gap-2">
              <button
                className="bg-blue-600 text-white font-bold px-4 py-2 rounded hover:bg-blue-700 transition"
                onClick={toggleShowAddForm}
              >
                Add
              </button>
              <button className="bg-red-500 text-white font-bold px-4 py-2 rounded hover:bg-red-600 transition">
                Delete
              </button>
            </div>
          </section>

          <section className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-2xl font-semibold mb-4">Student List</h2>
            <div className="space-y-2">
              {studentList.length > 0 ? (
                studentList
              ) : (
                <p className="text-center py-4 text-gray-500">No students found. Add students using the Add button.</p>
              )}
            </div>
          </section>
        </div>
      </div>
      {showAddForm && (
        <StudentForm toggleFormStatus={toggleShowAddForm} setStudent={addStudent} />
      )}
    </>
  );
}

export default EditStudents;