import React from 'react'
import { uselogin } from '../ContextFolder/auth-path'




const login = () => {

const {isLogin,setisLogin} = uselogin()

const handleLogin=()=>{
    setisLogin(!isLogin)
}

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-200 to-purple-200">
   
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-sm w-full flex flex-col gap-6">
        {
    !isLogin && <label><h2 className="text-3xl font-bold text-blue-700 text-center mb-2">Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mt-1 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        /></label>
   }
       
        
        <button onClick={handleLogin} type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition font-semibold">
            {!isLogin?'login':'logout'}</button>
        <p className="text-center text-gray-500 text-sm">Don't have an account? <a href="#" className="text-blue-600 hover:underline">Sign up</a></p>
      </div>
    </div>
  )
}

export default login