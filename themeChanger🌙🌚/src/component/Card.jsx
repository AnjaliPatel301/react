import React from 'react'

export default function Card() {
    return (
  <div className="max-w-md mx-auto bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg overflow-hidden transition hover:shadow-2xl hover:scale-105 duration-300">
  <img
    className="w-full h-48 object-cover"
    src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    alt="study"
  />
  <div className="p-6">
    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
      Master JavaScript 
    </h2>
    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
      Learn modern JavaScript (ES6+) with hands-on projects, coding challenges,
      and real-world applications. Perfect for students & freshers.
    </p>

    <div className="flex flex-wrap gap-2 mb-4">
      <span className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full dark:bg-blue-800 dark:text-blue-100">
        Beginner Friendly
      </span>
      <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full dark:bg-green-800 dark:text-green-100">
        Hands-on
      </span>
      <span className="px-3 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded-full dark:bg-purple-800 dark:text-purple-100">
        Projects
      </span>
    </div>


    <div className="flex items-center justify-between">
      <span className="text-xl font-semibold text-gray-900 dark:text-gray-100">
        Free
      </span>
      <button className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium shadow hover:from-indigo-600 hover:to-purple-700 transition">
        Enroll Now 
      </button>
    </div>
  </div>
</div>


    );
}
