function Placement() {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* HEADER */}
      <div className="bg-blue-100 p-6">
        <h1 className="text-3xl font-bold text-gray-700">
          About Placement Cell
        </h1>
        <p className="text-sm text-gray-600 mt-1">
          Home / Placement Cell / About Placement Cell
        </p>
      </div>

      <div className="p-6">

        {/* DESCRIPTION */}
        <div className="bg-white p-6 rounded-xl shadow mb-8">
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">
            Training & Placement Cell
          </h2>

          <p className="text-gray-700 leading-7">
            The Training & Placement Office, SATI Vidisha facilitates the process 
            of placement of students passing out from the Institute besides 
            collaborating with leading organizations and institutes in setting up 
            internship and training program of students. The office liaises with 
            various industrial establishments, corporate houses etc.
          </p>

          {/* BULLETS */}
          <ul className="mt-4 space-y-2 text-gray-700">
            {[
              "Core Engineering Industries",
              "IT & IT Enabled Services",
              "Manufacturing Industries",
              "Consultancy Firms",
              "Finance Companies Management Organization",
              "R & D Laboratories",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="text-blue-600 font-bold">➤</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* TABLE */}
        <div className="bg-white p-6 rounded-xl shadow mb-8">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">
            Placement Team
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300">
              <thead className="bg-blue-50 text-red-600">
                <tr>
                  <th className="p-3 border">S.no.</th>
                  <th className="p-3 border">Name</th>
                  <th className="p-3 border">Designation</th>
                  <th className="p-3 border">Email-Id</th>
                  <th className="p-3 border">Contact No.</th>
                </tr>
              </thead>

              <tbody className="text-gray-700 text-sm">
                {[
                  ["1", "Dr. Ashutosh Datar", "Advisor, T&P Cell", "ashutoshdatar.bme@satiengg.in", "9826216560"],
                  ["2", "Dr. Ashish Manoria", "Advisor, T&P Cell", "ashishmanoria.mech@satiengg.in", "9425463722"],
                  ["3", "Prof. Abhishek Mathur", "Training & Placement Officer", "abhishek.mathur@satiengg.in", "9827792341"],
                  ["4", "Dr. Abhishek Jain", "Assistant T&P Officer", "abhishekjain.ec@satiengg.in", "9300618580"],
                  ["5", "Prof. Dolly Panthi", "Assistant T&P Officer", "dollypanthi.iot@satiengg.in", "7047616955"],
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    {row.map((cell, j) => (
                      <td key={j} className="p-3 border">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* IMAGE GALLERY */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">
            Placement Activities
          </h2>

          {/* <div className="grid md:grid-cols-3 gap-4">
            <img
              src="sati_gathering.jpeg"
              className="rounded-lg shadow hover:scale-105 transition"
            />
            <img
              src="sati_e.jpeg"
              className="rounded-lg shadow hover:scale-105 transition"
            />
            <img
              src="sati_stu.jpg"
              className="rounded-lg shadow hover:scale-105 transition"
            />
          </div> */}

       <div className="grid grid-cols-3 grid-rows-2 gap-4">

  {/* BIG IMAGE 1 */}
  <img
    src="sati_gathering.jpeg"
    className="h-full w-full object-cover rounded-lg shadow hover:scale-105 transition"
  />

  {/* BIG IMAGE 2 */}
  <img
    src="sati_e.jpeg"
    className="h-full w-full object-cover rounded-lg shadow hover:scale-105 transition"
  />

  {/* SMALL IMAGE */}
  <img
    src="sati_stu.jpg"
    className="h-full w-full object-cover rounded-lg shadow hover:scale-105 transition"
  />

</div>



        </div>

      </div>
    </div>
  );
}

export default Placement;