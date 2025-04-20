import React, { useState, useCallback } from 'react';

function DisplayStudent({obj, delStd}) {
  const [showDetails, setShowDetails] = useState(false);
  
  const toggleDetails = useCallback(() => {
    setShowDetails(prev => !prev);
  }, []);
  
  return (
    <div className="bg-amber-200 p-2 sm:p-3 border border-amber-300 rounded-md m-2 sm:m-4 flex flex-col shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div className="flex-grow mb-2 sm:mb-0">
            <h2 className="font-sans text-xl sm:text-2xl pl-1 sm:pl-2 text-gray-900">{obj['name']}</h2>
            <p className="pl-1 text-sm sm:text-base text-gray-800">Roll No. : {obj['id']} </p>
            <p className="pl-1 text-sm sm:text-base text-gray-800">Email : {obj['email']}</p>
        </div>
        <div className="flex justify-end">
            <button onClick={toggleDetails} className="hover:bg-amber-300 rounded-full p-2 transition-colors">
              <i className="fa-sharp fa-solid fa-eye fa-flip-horizontal fa-lg sm:fa-xl" title="View Student"></i>
            </button>
            <button onClick={delStd} className="hover:bg-amber-300 rounded-full p-2 transition-colors">
              <i className="fa-duotone fa-solid fa-user-xmark fa-lg sm:fa-xl" title="Delete Student"></i>
            </button>
        </div>
      </div>
      
      {showDetails && (
        <div className="mt-2 p-3 bg-white rounded-b-lg shadow-inner mx-1 sm:mx-2 mb-1 sm:mb-2">
          <h3 className="font-semibold text-lg">Additional Information</h3>
          <p className="text-sm sm:text-base"><span className="font-medium">Father's Name:</span> {obj['fathersName'] || 'N/A'}</p>
          <p className="text-sm sm:text-base"><span className="font-medium">Batch:</span> {obj['batch'] || 'N/A'}</p>
          <p className="text-sm sm:text-base"><span className="font-medium">Address:</span> {obj['address'] || 'N/A'}</p>
          <p className="text-sm sm:text-base"><span className="font-medium">Contact:</span> {obj['contact'] || 'N/A'}</p>
        </div>
      )}
    </div>
  );
}

export default DisplayStudent;