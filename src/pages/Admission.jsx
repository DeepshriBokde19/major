function Admission() {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* HEADER */}
      <div className="bg-blue-100 p-6">
        <h1 className="text-3xl font-bold text-gray-700">
          Admission Courses
        </h1>
        <p className="text-sm text-gray-600 mt-1">
          Home / Admission / Admission Courses
        </p>
      </div>

      <div className="p-6 space-y-8">

        {/* SECTION COMPONENT */}
        {[
          {
            title: "Under Graduate Courses",
            data: [
              ["1960", "B.Tech Civil Engineering", "60"],
              ["1960", "B.Tech Mechanical Engineering", "60"],
              ["1960", "B.Tech Electrical Engineering", "60"],
              ["1985", "B.Tech Electronics and Instrumentation Engineering", "60"],
              ["2000", "B.Tech Electronics and Communication Engineering", "60"],
              ["1985", "B.Tech Computer Science & Engineering", "120"],
              ["2021", "B.Tech CSE (Block Chain)", "60"],
              ["2020", "B.Tech CSE (AI & DS)", "60"],
              ["2022", "B.Tech Information Technology", "60"],
              ["2020", "B.Tech CSE (Internet of Things)", "60"],
            ],
          },
          {
            title: "Post Graduate Courses (M.Tech.)",
            data: [
              ["1993", "Advance Production Systems", "9"],
              ["1997", "Construction Tech. & Mgt.", "18"],
              ["2003", "Transportation Engg.", "18"],
              ["1996", "Power Electronics", "9"],
              ["2001", "Computer Science & Engg.", "18"],
            ],
          },
          {
            title: "Post Graduate Courses (MCA, MBA)",
            data: [
              ["1989", "Master of Computer Applications (MCA)", "30"],
              ["2002", "Master of Business Administration (MBA)", "60"],
            ],
          },
          {
            title: "Post Graduate Courses (MSc)",
            data: [["1972", "Applied Chemistry", "25"]],
          },
          {
            title: "Under Graduate Courses (BBA)",
            data: [["2024", "BBA", "30"]],
          },
        ].map((section, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            {/* Section Title */}
            <div className="bg-gray-50 px-6 py-3 border-b">
              <h2 className="text-xl font-semibold text-gray-800">
                {section.title}
              </h2>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-gray-700">
                <thead className="bg-blue-50 text-gray-800">
                  <tr>
                    <th className="p-3 text-left border">Year of start</th>
                    <th className="p-3 text-left border">Name of Program</th>
                    <th className="p-3 text-left border">Intake</th>
                  </tr>
                </thead>

                <tbody>
                  {section.data.map((row, i) => (
                    <tr
                      key={i}
                      className="hover:bg-gray-50 transition"
                    >
                      <td className="p-3 border">{row[0]}</td>
                      <td className="p-3 border">{row[1]}</td>
                      <td className="p-3 border">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Admission;