import React, { useState } from "react"
import StudentForm from "../components/StudentForm";

function EditStudents({stdLis, setStd, delStd}){
    const [showAddForm, setShowAddForm] = useState(false)
    const toggleShowAddForm = () => setShowAddForm(prev => !prev)

    const studentList = stdLis.map((obj, indx) => <div className="bg-amber-200 pl-1 pt-1 pb-1 border m-4 flex items-center-safe">
        <div className="flex-10/12" key={indx}>
            <h2 className="font-sans text-2xl pl-2 text-gray-900">{obj['name']}</h2>
            <p className="pl-1 text-gray-800">Roll No. : {obj['id']} </p>
            <p className="pl-1 text-gray-800">Email : {obj['email']}</p>
        </div>
        <div className="flex-2/12">
            <button><i className="fa-sharp fa-solid fa-eye fa-flip-horizontal fa-xl m-2 p-2" title="View Student"></i></button>
            <button><i className="fa-duotone fa-solid fa-user-xmark fa-xl m-2 p-2" title="Delete Student" onClick={() => delStd(indx)}></i></button>
        </div>
    </div>)
    


    return(
        <>
            <div className="w-full bg-amber-100 flex flex-col items-center-safe mt-1">
                <div>
                    <section className="flex w-200 justify-evenly items-center ">
                        <section className="flex bg-cyan-300 w-100 justify-between items-center-safe m-2">
                            <input type="text" name="" id="" placeholder="Search ID" className="bg-blue-400 w-90 p-2 " />
                            <img src="https://cdn-icons-png.flaticon.com/128/54/54481.png" alt="search-icon" className="size-6.5 items-center mr-1.5" />
                        </section>
                        <button 
                            className=" bg-blue-600 text-white font-bold px-4 py-2 rounded"
                            onClick={() => setShowAddForm(true)}
                        >
                            Add
                        </button>
                        <button className="bg-red-500 text-white font-bold px-4 py-2 rounded" >Delete</button>
                    </section>
                    
                    
                </div>

                <section>
                    <div className="border-2 w-200 h-150 bg-white ">
                        <h2 className="ml-4 mb-4 mt-1 font-semibold text-5xl">Student List</h2>

                        {studentList}
                         
                    </div>
                </section>
            </div>
            {showAddForm && <StudentForm toggleFormStatus={toggleShowAddForm} setStudent={setStd}/>}
        </>
    )
}
export default EditStudents