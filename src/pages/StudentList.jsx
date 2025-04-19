import React, { useCallback, useMemo } from "react";
import DisplayStudent from "../components/DisplayStudent";
import { useStudentContext } from "../context/StudentContext";

function StudentList() {
  const { searchTerm, setSearchTerm, getFilteredStudents, studentCount } = useStudentContext();
  
  const handleSearchChange = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, [setSearchTerm]);
  
  const filteredStudents = useMemo(() => getFilteredStudents(), [getFilteredStudents]);
  
  const displayStudents = useMemo(() => {
    return filteredStudents.map((obj, indx) => (
      <DisplayStudent key={indx} obj={obj} delStd={() => {}} />
    ));
  }, [filteredStudents]);

  return (
    <div className="w-full bg-gray-100 flex flex-col items-center p-4" style={{ marginTop: '4rem' }}>
      <div className="w-full max-w-4xl">
        <section className="flex justify-between items-center mb-4">
          <div className="flex items-center bg-white shadow-md rounded-lg overflow-hidden w-full max-w-md">
            <i className="fa-solid fa-magnifying-glass text-gray-500 px-3"></i>
            <input
              type="text"
              placeholder="Search by Name"
              className="w-full p-2 focus:outline-none"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          <div>
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
              Total Students: {studentCount}
            </span>
          </div>
        </section>

        <section className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-2xl font-semibold mb-4">Student Directory</h2>
          {displayStudents.length > 0 ? (
            <div className="space-y-2">
              {displayStudents}
            </div>
          ) : (
            <div className="text-center py-10">
              <h3 className="mt-2 text-sm font-medium text-gray-900">No students found</h3>
              <p className="mt-1 text-sm text-gray-500">Add students from the Add/Delete Student page.</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default StudentList;
