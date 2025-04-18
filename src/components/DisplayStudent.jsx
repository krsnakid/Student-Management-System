import React from 'react'

function DisplayStudent({obj, delStd}) {
  return (
    <div className="bg-amber-200 pl-1 pt-1 pb-1 border m-4 flex items-center-safe">
        <div className="flex-10/12">
            <h2 className="font-sans text-2xl pl-2 text-gray-900">{obj['name']}</h2>
            <p className="pl-1 text-gray-800">Roll No. : {obj['id']} </p>
            <p className="pl-1 text-gray-800">Email : {obj['email']}</p>
        </div>
        <div className="flex-2/12">
            <button><i className="fa-sharp fa-solid fa-eye fa-flip-horizontal fa-xl m-2 p-2" title="View Student"></i></button>
            <button><i className="fa-duotone fa-solid fa-user-xmark fa-xl m-2 p-2" title="Delete Student" onClick={delStd}></i></button>
        </div>
    </div>
  )
}

export default DisplayStudent