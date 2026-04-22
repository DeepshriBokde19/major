
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);

  const menuItem = "px-4 py-2 hover:bg-gray-100 transition duration-200";

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
        >
          About Us ▾

          {activeMenu === "about" && (
            <ul
              className="absolute top-full left-0 bg-white text-black w-56 shadow-lg rounded z-50"
              onMouseEnter={() => setActiveMenu("about")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <li className={menuItem}>About Institute</li>
              <li className={menuItem}>Director’s Message</li>
              <li className={menuItem}>Vision & Mission</li>
              <li className={menuItem}>Faculty</li>
            </ul>
          )}
        </li>

        {/* Academics */}
        <li
          className="relative cursor-pointer"
          onMouseEnter={() => setActiveMenu("academics")}
        >
          Academics ▾

          {activeMenu === "academics" && (
            <ul
              className="absolute top-full left-0 bg-white text-black w-56 shadow-lg rounded z-50"
              onMouseEnter={() => setActiveMenu("academics")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <li className={menuItem}>Academic Calendar</li>
              <li className={menuItem}>Courses</li>
              <li className={menuItem}>AICTE</li>
              <li className={menuItem}>Ordinance</li>

              {/* ✅ FIXED CLICK */}
              <li className="hover:bg-gray-100 transition duration-200">
                <a
                  href="https://drive.google.com/drive/folders/1QSZs3pydG7zdzx3zJ6rtdPcZIhntzSWd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 w-full h-full"
                >
                  Previous Year Papers
                </a>
              </li>
            </ul>
          )}
        </li>

        {/* Departments */}
        <li
          className="relative cursor-pointer"
          onMouseEnter={() => setActiveMenu("departments")}
        >
          Departments ▾

          {activeMenu === "departments" && (
            <ul
              className="absolute top-full left-0 bg-white text-black w-56 shadow-lg rounded z-50"
              onMouseEnter={() => setActiveMenu("departments")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <li className={menuItem}>CSE</li>
              <li className={menuItem}>Mechanical</li>
              <li className={menuItem}>Civil</li>
            </ul>
          )}
        </li>

        {/* Admission */}
        <li
          className="relative cursor-pointer"
          onMouseEnter={() => setActiveMenu("admission")}
        >
          Admission ▾

          {activeMenu === "admission" && (
            <ul
              className="absolute top-full left-0 bg-white text-black w-56 shadow-lg rounded z-50"
              onMouseEnter={() => setActiveMenu("admission")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <li className={menuItem}>Admission Courses</li>
              <li className={menuItem}>Fees Structure</li>
              <li className={menuItem}>Admission Notification</li>
            </ul>
          )}
        </li>

        {/* Campus Life */}
        <li
          className="relative cursor-pointer"
          onMouseEnter={() => setActiveMenu("campus")}
        >
          Campus Life ▾

          {activeMenu === "campus" && (
            <ul
              className="absolute top-full left-0 bg-white text-black w-56 shadow-lg rounded z-50"
              onMouseEnter={() => setActiveMenu("campus")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <li className={menuItem}>Student Clubs</li>
              <li className={menuItem}>Download Forms</li>
              <li className={menuItem}>Central Library</li>
              <li className={menuItem}>Hostel</li>
              <li className={menuItem}>Computer Center</li>
              <li className={menuItem}>Games & Sports</li>
            </ul>
          )}
        </li>

        {/* Gallery */}
        <li
          className="relative cursor-pointer"
          onMouseEnter={() => setActiveMenu("gallery")}
        >
          Gallery ▾

          {activeMenu === "gallery" && (
            <ul
              className="absolute top-full left-0 bg-white text-black w-56 shadow-lg rounded z-50"
              onMouseEnter={() => setActiveMenu("gallery")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <li className={menuItem}>Photo Gallery</li>
              <li className={menuItem}>Video Gallery</li>
              <li className={menuItem}>Media Gallery</li>
            </ul>
          )}
        </li>

        {/* Placement */}
        <li
          className="relative cursor-pointer"
          onMouseEnter={() => setActiveMenu("placement")}
        >
          Placement Cell ▾

          {activeMenu === "placement" && (
            <ul
              className="absolute top-full left-0 bg-white text-black w-56 shadow-lg rounded z-50"
              onMouseEnter={() => setActiveMenu("placement")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <li className={menuItem}>About Placement Cell</li>
              <li className={menuItem}>Placement</li>
              <li className={menuItem}>Placement Brochure</li>
              <li className={menuItem}>Placement Records</li>
              <li className={menuItem}>Placement Gallery</li>
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