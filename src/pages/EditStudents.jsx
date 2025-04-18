import React, { useState } from "react";
import StudentForm from "../components/StudentForm";
import DisplayStudent from "../components/DisplayStudent";

function EditStudents({ stdLis, setStd, delStd }) {
  const [showAddForm, setShowAddForm] = useState(false);
  const toggleShowAddForm = () => setShowAddForm((prev) => !prev);
  const [inp, setInp] = useState("");

  let studentList =
    inp !== ""
      ? stdLis.filter((obj) => obj["name"].toLowerCase().includes(inp))
      : stdLis;

  studentList = studentList.map((obj, indx) => (
    <DisplayStudent key={indx} obj={obj} delStd={() => delStd(indx)} />
  ));

  return (
    <>
      <div className="w-full bg-gray-100 flex flex-col items-center mt-4 p-4" style={{ marginTop: '4rem' }}>
        <div className="w-full max-w-4xl">
          <section className="flex justify-between items-center mb-4">
            <div className="flex items-center bg-white shadow-md rounded-lg overflow-hidden w-full max-w-md">
              <i className="fa-solid fa-magnifying-glass text-gray-500 px-3"></i>
              <input
                type="text"
                placeholder="Search by Name"
                className="w-full p-2 focus:outline-none"
                onChange={(e) => {
                  setInp(e.target.value);
                }}
              />
            </div>
            <div className="flex gap-2">
              <button
                className="bg-blue-600 text-white font-bold px-4 py-2 rounded hover:bg-blue-700 transition"
                onClick={() => setShowAddForm(true)}
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
            <div className="divide-y divide-gray-200">
              {studentList.map((student, index) => (
                <div key={index} className="last:border-none">
                  {student}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      {showAddForm && (
        <StudentForm toggleFormStatus={toggleShowAddForm} setStudent={setStd} />
      )}
    </>
  );
}
export default EditStudents;