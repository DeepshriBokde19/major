function Result() {
  const courses = [
    "B.E.", "B.Tech", "M.C.A.", "M.E.", "M.Tech",
    "B.E.(PTDC)", "MCA 2 Year", "MBA", "M.Sc", "BBA"
  ];

  return (
    <div className="bg-gray-200 min-h-screen p-4">

      <div className="flex gap-6">

        {/* LEFT SIDEBAR */}
        <div className="w-1/4 bg-yellow-100 border p-4">

          <h2 className="bg-yellow-300 px-3 py-2 font-bold mb-4">
            ≪ Student Life ≫
          </h2>

          <ul className="text-sm space-y-2">
            {[
              "Login",
              "Student Registration",
              "Scheme/Syllabus",
              "Time Table",
              "Result",
              "Download Form",
              "Forgot Password",
            ].map((item, i) => (
              <li key={i} className="border-b pb-1 cursor-pointer hover:text-blue-700">
                ➤ {item}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-3/4">

          {/* MAIN RESULT */}
          <div className="bg-white border p-4 mb-6">
            <h2 className="text-center text-xl font-bold text-pink-700 mb-3">
              Main Result
            </h2>

            <div className="border p-3">
              <p className="font-semibold mb-2">
                Please choose the Course
              </p>

              <div className="flex flex-wrap gap-4">
                {courses.map((c, i) => (
                  <label key={i} className="flex items-center gap-1">
                    <input type="radio" name="course" />
                    {c}
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* REVALUATION RESULT */}
          <div className="bg-white border p-4">
            <h2 className="text-center text-xl font-bold text-pink-700 mb-3">
              Revaluation Result
            </h2>

            <div className="border p-3">
              <p className="font-semibold mb-2">
                Please Choose the Course
              </p>

              <div className="flex flex-wrap gap-4">
                {courses.map((c, i) => (
                  <label key={i} className="flex items-center gap-1">
                    <input type="radio" name="course2" />
                    {c}
                  </label>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Result;