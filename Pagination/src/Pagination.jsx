import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Pagination = () => {
  const [tableData, setTableData] = useState(null);
  const [currentPage, setcurrentPage] = useState(1);
  const [tablePerRow, settableRow] = useState(10);
  const indexOflastItem = currentPage * tablePerRow;
  const indexOffristItem = indexOflastItem - tablePerRow;
  const currentItems = tableData ? tableData.users.slice(indexOffristItem, indexOflastItem) : [];
  const totalPages = tableData ? Math.max(1, Math.ceil(tableData.total / tablePerRow)) : 1;

  useEffect(() => {
    axios.get('https://dummyjson.com/users/?limit=0')
      .then((res) => {
        console.log(res.data);
        setTableData(res?.data);
      })
      .catch((err) => {
        console.error('Error fetching users:', err);
      });
  }, []); 

 

  return (
    <>
     <div className="overflow-x-auto px-4 mt-4">
       <table className='min-w-full bg-white rounded-lg overflow-hidden shadow-sm'>
         <thead>
           <tr className="bg-gray-600 text-white">
             <th className="text-left px-4 py-3">No.</th>
             <th className="text-left px-4 py-3">Name</th>
             <th className="text-left px-4 py-3">Email</th>
             <th className="text-left px-4 py-3">Age</th>
             <th className="text-left px-4 py-3">Gender</th>
             <th className="text-left px-4 py-3">Mobile No.</th>
           </tr>
         </thead>
         <tbody>
           
           {!currentItems || currentItems.length === 0 ? (
             <tr className="bg-gray-50">
               <td colSpan={6} className="text-left px-4 py-6 text-gray-500">No data available.</td>
             </tr>
           ) : (
             currentItems.map((user, index) => (
               <tr key={user.id} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}`}>
                 <td className="text-left px-4 py-3">{indexOffristItem + index + 1}</td>
                 <td className="text-left px-4 py-3">{user.firstName} {user.lastName}</td>
                 <td className="text-left px-4 py-3">{user.email}</td>
                 <td className="text-left px-4 py-3">{user.age}</td>
                 <td className="text-left px-4 py-3">{user.gender}</td>
                 <td className="text-left px-4 py-3">{user.phone}</td>
               </tr>
             ))
           )}
         </tbody>
       </table>
     </div>
     {/* Pagination controls */}
     <div className="flex items-center justify-center gap-4 mt-4">
       <button
         onClick={() => setcurrentPage((p) => Math.max(1, p - 1))}
         disabled={currentPage === 1}
         className="px-4 py-2 rounded-md text-white bg-green-600 hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
       >
         Prev
       </button>
       <div className="text-sm text-gray-700">Page {currentPage} of {totalPages}</div>
       <button
         onClick={() => setcurrentPage((p) => Math.min(totalPages, p + 1))}
         disabled={currentPage === totalPages}
         className="px-4 py-2 rounded-md text-white bg-green-600 hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
       >
         Next
       </button>
     </div>
    </>
  );
};

export default Pagination;
