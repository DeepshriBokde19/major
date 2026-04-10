function TopBar() {
  return (
    <div className="flex justify-between items-center bg-gray-200 px-5 py-1 text-sm">

      {/* LEFT SIDE */}
      <div className="flex items-center gap-2 ml-19">
        
        <button className="bg-black text-white px-3 py-1 text-xs " >
          Screen Reader
        </button>

        <div className="flex items-center gap-1">
          <span className="border px-2 py-0.5 text-xs cursor-pointer">A</span>
          <span className="border px-2 py-0.5 text-xs bg-black text-white cursor-pointer">A</span>
          <span className="border px-2 py-0.5 text-xs cursor-pointer">A+</span>
        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-6">

        <span>📞 Technical Support No: 8989011204</span>
        <span>📧 Email: satiengg01@gmail.com</span>

        {/* Login Section */}
        <div className="flex flex-col text-right">
          <span className="cursor-pointer hover:text-blue-600">👤 Student Login</span>
          <span className="cursor-pointer hover:text-blue-600 ">👤 Institute Login</span>
        </div>

      </div>

    </div>
  );
}

export default TopBar;