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
        <div className='fixed inset-0 bg-neutral-500 bg-opacity-75 flex items-center justify-center overflow-y-auto'>
            <div className='bg-white p-6 rounded-lg w-[500px] max-h-[90vh] overflow-y-auto m-4'>
                <h2 className='text-2xl font-bold mb-4'>Add New Student</h2>
                <form action="" onSubmit={handleSubmit} className="overflow-y-auto">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="mb-4 col-span-1">
                            <label htmlFor="stdN" className='block text-gray-700 mb-2'>Student Name</label>
                            <input 
                                type="text" 
                                name="name"
                                id="stdN"
                                placeholder="Full name"
                                onChange={handleInputChange}
                                className='w-full p-2 border border-gray-300 rounded'
                                required
                            />
                        </div>
                        <div className="mb-4 col-span-1">
                            <label htmlFor="stdid" className='block text-gray-700 mb-2'>Student ID</label>
                            <input 
                                type="text" 
                                name="id"
                                id="stdid"
                                placeholder="Student ID"
                                onChange={handleInputChange}
                                className='w-full p-2 border border-gray-300 rounded'
                                required
                            />
                        </div>

                        <div className="mb-4 col-span-1">
                            <label htmlFor="fathersName" className='block text-gray-700 mb-2'>Father's Name</label>
                            <input 
                                type="text" 
                                name="fathersName"
                                id="fathersName"
                                placeholder="Father's name"
                                onChange={handleInputChange}
                                className='w-full p-2 border border-gray-300 rounded'
                                required
                            />
                        </div>
                        <div className="mb-4 col-span-1">
                            <label htmlFor="batch" className='block text-gray-700 mb-2'>Batch</label>
                            <select
                                name="batch"
                                id="batch"
                                onChange={handleInputChange}
                                className='w-full p-2 border border-gray-300 rounded'
                                required
                            >
                                <option value="A">Batch A</option>
                                <option value="B">Batch B</option>
                            </select>
                        </div>

                        <div className="mb-4 col-span-2">
                            <label htmlFor="address" className='block text-gray-700 mb-2'>Address</label>
                            <textarea 
                                name="address"
                                id="address"
                                placeholder="Residential address"
                                onChange={handleInputChange}
                                className='w-full p-2 border border-gray-300 rounded resize-none'
                                rows="2"
                                required
                            ></textarea>
                        </div>

                        <div className="mb-4 col-span-1">
                            <label htmlFor="cn" className='block text-gray-700 mb-2'>Contact Number</label>
                            <input 
                                type="number" 
                                name="contact"
                                id="cn"
                                placeholder="Contact number"
                                onChange={handleInputChange}
                                className='w-full p-2 border border-gray-300 rounded'
                                required
                            />
                        </div>
                        <div className="mb-4 col-span-1">
                            <label htmlFor="eml" className='block text-gray-700 mb-2'>Email</label>
                            <input 
                                type="email" 
                                name="email"
                                id='eml'
                                placeholder="Email address"
                                onChange={handleInputChange}
                                className='w-full p-2 border border-gray-300 rounded'
                                required
                            />
                        </div>
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