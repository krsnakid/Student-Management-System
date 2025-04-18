import React, { useState } from 'react'

function DisplayStudent({obj, delStd}) {
  const [showDetails, setShowDetails] = useState(false);
  
  const toggleDetails = () => {
    setShowDetails(prev => !prev);
  }
  
  return (
    <div className="bg-amber-200 pl-1 pt-1 pb-1 border m-4 flex flex-col">
      <div className="flex items-center-safe">
        <div className="flex-10/12">
            <h2 className="font-sans text-2xl pl-2 text-gray-900">{obj['name']}</h2>
            <p className="pl-1 text-gray-800">Roll No. : {obj['id']} </p>
            <p className="pl-1 text-gray-800">Email : {obj['email']}</p>
        </div>
        <div className="flex-2/12">
            <button onClick={toggleDetails}>
              <i className="fa-sharp fa-solid fa-eye fa-flip-horizontal fa-xl m-2 p-2" title="View Student"></i>
            </button>
            <button onClick={delStd}>
              <i className="fa-duotone fa-solid fa-user-xmark fa-xl m-2 p-2" title="Delete Student"></i>
            </button>
        </div>
      </div>
      
      {showDetails && (
        <div className="mt-2 p-3 bg-white rounded-b-lg shadow-inner">
          <h3 className="font-semibold text-lg">Additional Information</h3>
          <p><span className="font-medium">Father's Name:</span> {obj['fathersName'] || 'N/A'}</p>
          <p><span className="font-medium">Batch:</span> {obj['batch'] || 'N/A'}</p>
          <p><span className="font-medium">Address:</span> {obj['address'] || 'N/A'}</p>
          <p><span className="font-medium">Contact:</span> {obj['contact'] || 'N/A'}</p>
        </div>
      )}
    </div>
  )
}

export default DisplayStudent