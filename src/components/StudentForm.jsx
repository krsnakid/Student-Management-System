import React, { use, useRef } from 'react'

function StudentForm({toggleFormStatus, setStudent}) {
    const formRef = useRef({
        id: "",
        name: "",
        contact: "",
        email: ""
    })

    function handleInputChange(e){
        const { name, value } = e.target
        formRef.current[name] = value
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log("Student added : ", formRef.current)
        setStudent(formRef.current)
        toggleFormStatus()
    }
    
  return (
    <div className='fixed inset-0 bg-neutral-500 flex items-center justify-center '>
        <div className='bg-white p-6 rounded-lg w-96 '>
            <h2 className='text-2xl font-bold mb-4'>Add New Student</h2>
            <form action="" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="stdN" className='block text-gray-700 mb-2'>Student Name</label>
                    <input 
                        type="text" 
                        name="name"
                        id="stdN"
                        onChange={handleInputChange}
                        className='w-full p-2 border border-gray-300 rounded'
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="stdid" className='block text-gray-700 mb-2'>Student ID</label>
                    <input 
                        type="text" 
                        name="id"
                        id="stdid"
                        onChange={handleInputChange}
                        className='w-full p-2 border border-gray-300 rounded'
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="cn" className='block text-gray-700 mb-2'>Contact Number</label>
                    <input 
                        type="number" 
                        name="contact"
                        id="cn"
                        onChange={handleInputChange}
                        className='w-full p-2 border border-gray-300 rounded'
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="eml" className='block text-gray-700 mb-2'>Email</label>
                    <input 
                        type="email" 
                        name="email"
                        id='eml'
                        onChange={handleInputChange}
                        className='w-full p-2 border border-gray-300 rounded'
                        required
                    />
                </div>
                <div className='flex justify-end'>
                    <button
                        type='button'
                        className='bg-gray-300 text-gray-800 px-4 py-2 mr-2 rounded'
                        onClick={() => toggleFormStatus()}
                    >Cancel</button>
                    <button
                        type='submit'
                        className='bg-green-500 text-black px-4 py-2 rounded'
                    >Add Student</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default StudentForm