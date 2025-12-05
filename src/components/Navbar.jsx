import React from "react";

export default function Navbar({ dark, setDark }) {
  return (
    <nav className="fixed w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">
          Angeline De Guzman
        </h1>
        <div className="flex items-center gap-4">
          <a href="#about" className="hover:text-blue-500">About</a>
          <a href="#skills" className="hover:text-blue-500">Skills</a>
          <a href="#projects" className="hover:text-blue-500">Projects</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>
          <button
            onClick={() => setDark(!dark)}
            className="px-3 py-1 border rounded-md dark:border-gray-200"
          >
            {dark ? "Light" : "Dark"}
          </button>
        </div>
      </div>
    </nav>
  );
}
