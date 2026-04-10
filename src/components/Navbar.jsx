

import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <nav className="bg-blue-900 text-white sticky top-0 z-50">
      <ul className="flex items-center gap-14 px-9 py-3 text-sm font-medium">

        {/* Home */}
        <li className="cursor-pointer hover:text-gray-300">
          <Link to="/">Home</Link>
        </li>

        {/* About */}
        <li
          className="relative cursor-pointer"
          onMouseEnter={() => setActiveMenu("about")}
          onMouseLeave={() => setActiveMenu(null)}
        >
          About Us ▾

          {activeMenu === "about" && (
            <ul className="absolute top-8 left-0 bg-white text-black w-56 shadow-lg rounded z-50">
              <li className="px-4 py-2 hover:bg-gray-100">About Institute</li>
              <li className="px-4 py-2 hover:bg-gray-100">Director’s Message</li>
              <li className="px-4 py-2 hover:bg-gray-100">Vision & Mission</li>
              <li className="px-4 py-2 hover:bg-gray-100">Faculty</li>
            </ul>
          )}
        </li>

        {/* Academics */}
        <li
          className="relative cursor-pointer"
          onMouseEnter={() => setActiveMenu("academics")}
          onMouseLeave={() => setActiveMenu(null)}
        >
          Academics ▾

          {activeMenu === "academics" && (
            <ul className="absolute top-8 left-0 bg-white text-black w-56 shadow-lg rounded z-50">
              <li className="px-4 py-2 hover:bg-gray-100">Academic Calendar</li>
              <li className="px-4 py-2 hover:bg-gray-100">Courses</li>
              <li className="px-4 py-2 hover:bg-gray-100">AICTE</li>
              <li className="px-4 py-2 hover:bg-gray-100">Ordinance</li>
            </ul>
          )}
        </li>

        {/* Departments */}
        <li
          className="relative cursor-pointer"
          onMouseEnter={() => setActiveMenu("departments")}
          onMouseLeave={() => setActiveMenu(null)}
        >
          Departments ▾

          {activeMenu === "departments" && (
            <ul className="absolute top-8 left-0 bg-white text-black w-56 shadow-lg rounded z-50">
              <li className="px-4 py-2 hover:bg-gray-100">CSE</li>
              <li className="px-4 py-2 hover:bg-gray-100">Mechanical</li>
              <li className="px-4 py-2 hover:bg-gray-100">Civil</li>
            </ul>
          )}
        </li>

        {/* Admission */}
        <li
          className="relative cursor-pointer"
          onMouseEnter={() => setActiveMenu("admission")}
          onMouseLeave={() => setActiveMenu(null)}
        >
          Admission ▾

          {activeMenu === "admission" && (
            <ul className="absolute top-8 left-0 bg-white text-black w-56 shadow-lg rounded z-50">
              <li className="px-4 py-2 hover:bg-gray-100">Admission Courses</li>
              <li className="px-4 py-2 hover:bg-gray-100">Fees Structure</li>
              <li className="px-4 py-2 hover:bg-gray-100">Admission Notification</li>
            </ul>
          )}
        </li>

        {/* Campus Life */}
        <li
          className="relative cursor-pointer"
          onMouseEnter={() => setActiveMenu("campus")}
          onMouseLeave={() => setActiveMenu(null)}
        >
          Campus Life ▾

          {activeMenu === "campus" && (
            <ul className="absolute top-8 left-0 bg-white text-black w-56 shadow-lg rounded z-50">
              <li className="px-4 py-2 hover:bg-gray-100">Student Clubs</li>
              <li className="px-4 py-2 hover:bg-gray-100">Download Forms</li>
              <li className="px-4 py-2 hover:bg-gray-100">Central Library</li>
              <li className="px-4 py-2 hover:bg-gray-100">Hostel</li>
              <li className="px-4 py-2 hover:bg-gray-100">Computer Center</li>
              <li className="px-4 py-2 hover:bg-gray-100">Games & Sports</li>
            </ul>
          )}
        </li>

        {/* Gallery */}
        <li
          className="relative cursor-pointer"
          onMouseEnter={() => setActiveMenu("gallery")}
          onMouseLeave={() => setActiveMenu(null)}
        >
          Gallery ▾

          {activeMenu === "gallery" && (
            <ul className="absolute top-8 left-0 bg-white text-black w-56 shadow-lg rounded z-50">
              <li className="px-4 py-2 hover:bg-gray-100">Photo Gallery</li>
              <li className="px-4 py-2 hover:bg-gray-100">Video Gallery</li>
              <li className="px-4 py-2 hover:bg-gray-100">Media Gallery</li>
            </ul>
          )}
        </li>

        {/* Placement */}
        <li
          className="relative cursor-pointer"
          onMouseEnter={() => setActiveMenu("placement")}
          onMouseLeave={() => setActiveMenu(null)}
        >
          Placement Cell ▾

          {activeMenu === "placement" && (
            <ul className="absolute top-8 left-0 bg-white text-black w-56 shadow-lg rounded z-50">
              <li className="px-4 py-2 hover:bg-gray-100">About Placement Cell</li>
              <li className="px-4 py-2 hover:bg-gray-100">Placement</li>
              <li className="px-4 py-2 hover:bg-gray-100">Placement Brochure</li>
              <li className="px-4 py-2 hover:bg-gray-100">Placement Records</li>
              <li className="px-4 py-2 hover:bg-gray-100">Placement Gallery</li>
            </ul>
          )}
        </li>

        {/* Contact */}
        <li className="cursor-pointer hover:text-gray-300">
          <Link to="/contact">Contact Us</Link>
        </li>

      </ul>
    </nav>
  );
}

export default Navbar;