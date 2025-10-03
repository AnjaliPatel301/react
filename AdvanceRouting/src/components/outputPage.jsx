import React from 'react'
import { useNavigate } from 'react-router-dom'


function outputPage() {

  const navigate=useNavigate()
 const changePage=()=>{
  navigate('/')
 }

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-green-200 to-blue-100">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-lg w-full flex flex-col items-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-4">Weather Output</h2>
        <p className="text-gray-700 text-lg mb-6 text-center">Your weather results will appear here. You can display temperature, humidity, wind speed, and more.</p>
        {/* Example output data */}
        <div className="w-full flex flex-col gap-4">
          <div className="flex justify-between w-full">
            <span className="font-semibold">Temperature:</span>
            <span>-- °C</span>
          </div>
          <div className="flex justify-between w-full">
            <span className="font-semibold">Humidity:</span>
            <span>-- %</span>
          </div>
          <div className="flex justify-between w-full">
            <span className="font-semibold">Wind Speed:</span>
            <span>-- km/h</span>
          </div>
        </div>
        <button onClick={changePage} className="mt-8 bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition">Back</button>
      </div>
    </div>
  )
}

export default outputPage