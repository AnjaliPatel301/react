import React, { useContext, useState } from "react";
import userContext from "./userContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(userContext);

  const handleEvent = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
      <div className="w-full max-w-md bg-gray-800/80 backdrop-blur-lg border border-gray-700 rounded-2xl shadow-2xl p-8">
     
        <h1 className="text-4xl font-extrabold text-center text-white mb-8">
          Welcome Back 
        </h1>

        <form onSubmit={handleEvent} className="space-y-6">
       
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white placeholder-gray-500 border border-gray-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white placeholder-gray-500 border border-gray-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 transition-all"
            />
          </div>

 
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
          >
            Login 
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-400">
          Don’t have an account?{" "}
          <a
            href="#"
            className="text-purple-400 font-medium hover:underline"
          >
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
