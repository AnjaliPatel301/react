import React from 'react'
import { useNavigate } from 'react-router-dom'


function Weather() {
const navigate=useNavigate()
  const changePage=()=>{
    navigate("/about")

  }
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full flex flex-col items-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">Weather App</h2>
        <input
          type="text"
          placeholder="Enter city name..."
          className="w-full px-4 py-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button onClick={changePage} className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition mb-6">Get Weather</button>
        {/* Example weather info */}
        <div className="w-full flex flex-col gap-2 items-center">
          <div className="text-5xl">☀️</div>
          <div className="text-2xl font-semibold">-- °C</div>
          <div className="text-gray-600">City: --</div>
          <div className="text-gray-600">Humidity: -- %</div>
          <div className="text-gray-600">Wind: -- km/h</div>
        </div>
      </div>
    </div>
  )
}

export default Weather