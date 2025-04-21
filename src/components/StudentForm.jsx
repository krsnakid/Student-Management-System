import React, { useRef } from 'react'

function StudentForm({toggleFormStatus, setStudent}) {
    const formRef = useRef({
        id: "",
        name: "",
        contact: "",
        email: "",
        fathersName: "",
        batch: "A",
        address: ""
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
        <div className='fixed inset-0 bg-neutral-500 bg-opacity-75 flex items-start sm:items-center justify-center overflow-y-auto p-2 sm:p-4'>
            <div className='bg-white p-3 sm:p-6 rounded-lg w-full max-w-[500px] max-h-[95vh] overflow-y-auto mt-16 sm:mt-0'>
                <h2 className='text-xl sm:text-2xl font-bold mb-3'>Add New Student</h2>
                <form action="" onSubmit={handleSubmit} className="overflow-y-auto">
                    <div className="grid grid-cols-1 gap-3">
                        <div className="mb-2">
                            <label htmlFor="stdN" className='block text-gray-700 mb-1 text-sm sm:text-base'>Student Name</label>
                            <input 
                                type="text" 
                                name="name"
                                id="stdN"
                                placeholder="Full name"
                                onChange={handleInputChange}
                                className='w-full p-2 border border-gray-300 rounded text-sm sm:text-base'
                                required
                            />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="stdid" className='block text-gray-700 mb-1 text-sm sm:text-base'>Student ID</label>
                            <input 
                                type="text" 
                                name="id"
                                id="stdid"
                                placeholder="Student ID"
                                onChange={handleInputChange}
                                className='w-full p-2 border border-gray-300 rounded text-sm sm:text-base'
                                required
                            />
                        </div>

                        <div className="mb-2">
                            <label htmlFor="fathersName" className='block text-gray-700 mb-1 text-sm sm:text-base'>Father's Name</label>
                            <input 
                                type="text" 
                                name="fathersName"
                                id="fathersName"
                                placeholder="Father's name"
                                onChange={handleInputChange}
                                className='w-full p-2 border border-gray-300 rounded text-sm sm:text-base'
                                required
                            />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="batch" className='block text-gray-700 mb-1 text-sm sm:text-base'>Batch</label>
                            <select
                                name="batch"
                                id="batch"
                                onChange={handleInputChange}
                                className='w-full p-2 border border-gray-300 rounded text-sm sm:text-base'
                                required
                            >
                                <option value="A">Batch A</option>
                                <option value="B">Batch B</option>
                            </select>
                        </div>

                        <div className="mb-2">
                            <label htmlFor="address" className='block text-gray-700 mb-1 text-sm sm:text-base'>Address</label>
                            <textarea 
                                name="address"
                                id="address"
                                placeholder="Residential address"
                                onChange={handleInputChange}
                                className='w-full p-2 border border-gray-300 rounded resize-none text-sm sm:text-base'
                                rows="2"
                                required
                            ></textarea>
                        </div>

                        <div className="mb-2">
                            <label htmlFor="cn" className='block text-gray-700 mb-1 text-sm sm:text-base'>Contact Number</label>
                            <input 
                                type="number" 
                                name="contact"
                                id="cn"
                                placeholder="Contact number"
                                onChange={handleInputChange}
                                className='w-full p-2 border border-gray-300 rounded text-sm sm:text-base'
                                required
                            />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="eml" className='block text-gray-700 mb-1 text-sm sm:text-base'>Email</label>
                            <input 
                                type="email" 
                                name="email"
                                id='eml'
                                placeholder="Email address"
                                onChange={handleInputChange}
                                className='w-full p-2 border border-gray-300 rounded text-sm sm:text-base'
                                required
                            />
                        </div>
                    </div>
                    <div className='flex justify-end mt-3'>
                        <button
                            type='button'
                            className='bg-gray-300 text-gray-800 px-3 py-2 mr-2 rounded text-sm sm:text-base'
                            onClick={() => toggleFormStatus()}
                        >Cancel</button>
                        <button
                            type='submit'
                            className='bg-green-500 text-black px-3 py-2 rounded text-sm sm:text-base'
                        >Add Student</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default StudentForm