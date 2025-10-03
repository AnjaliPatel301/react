import React from 'react'
import { useNavigate } from 'react-router-dom'

const mainPage = () => {

  const navigate=useNavigate()
  
const changePage=()=>{
navigate("/services")
}

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-200 to-purple-200">
      <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">Welcome to WeatherApp</h1>
      <p className="text-lg md:text-2xl text-gray-700 mb-8 text-center max-w-xl">
        Get the latest weather updates, forecasts, and more. Start exploring now!
      </p>
      <button onClick={changePage} className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow hover:bg-blue-700 transition text-lg font-semibold">
        Get Started
      </button>

      
    </div>
  )
}

export default mainPage