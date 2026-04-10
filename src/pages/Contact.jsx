function Contact() {
  return (
    <div className="px-10 py-10 bg-gray-100 min-h-screen">

      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold">
          We’d Love To Help You
        </h1>
        <p className="text-gray-600 mt-2">
          Please feel free to get in touch using the details below.
        </p>
      </div>

      {/* Top Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">

        {/* Address */}
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-3">📍 Our Address</h2>
          <p className="text-gray-600">
            Samrat Ashok Technological Institute <br />
            Civil Lines, Vidisha (M.P.) 464001, INDIA
          </p>
        </div>

        {/* Phone */}
        <div className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-3">☎️ Our Phone and Fax</h2>
          <p className="text-gray-700">+91-7592-250121</p>
        </div>

        {/* Email */}
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-3">📧 Our Email & Website</h2>
          <p className="text-gray-700">sati@satiengg.in</p>
          <p className="text-blue-600">www.satiengg.in</p>
        </div>

      </div>

      {/* Table + Map */}
      <div className="grid md:grid-cols-2 gap-6">

        {/* Table */}
        <div className="bg-white p-4 rounded-lg shadow overflow-auto">
          <table className="w-full border text-sm">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-2 border">Name</th>
                <th className="p-2 border">Designation</th>
                <th className="p-2 border">Contact No.</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border">Dr. Y. K. Jain</td>
                <td className="p-2 border">Director</td>
                <td className="p-2 border">07592250121</td>
              </tr>
              <tr>
                <td className="p-2 border">Sh. Praveen Karkare</td>
                <td className="p-2 border">Registrar</td>
                <td className="p-2 border">9977380564</td>
              </tr>

              {/* Section */}
              <tr>
                <td colSpan="3" className="p-2 font-bold text-center bg-gray-100">
                  Academic / Admission
                </td>
              </tr>

              <tr>
                <td className="p-2 border">Dr. Alok Jain</td>
                <td className="p-2 border">Dean Academic</td>
                <td className="p-2 border">9425463116</td>
              </tr>
              <tr>
                <td className="p-2 border">Dr. Pramod Sharma</td>
                <td className="p-2 border">Proctor</td>
                <td className="p-2 border">9826515525</td>
              </tr>

              {/* Hostel */}
              <tr>
                <td colSpan="3" className="p-2 font-bold text-center bg-gray-100">
                  Hostel
                </td>
              </tr>

              <tr>
                <td className="p-2 border">Dr. Ravi Jain</td>
                <td className="p-2 border">Chief Warden</td>
                <td className="p-2 border">9893731008</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Map */}
        <div className="rounded-lg overflow-hidden shadow">
          <iframe
            title="map"
            src="https://www.google.com/maps?q=Samrat%20Ashok%20Technological%20Institute&output=embed"
            className="w-full h-full min-h-[400px] border-0"
            loading="lazy"
          ></iframe>
        </div>

      </div>

    </div>
  );
}

export default Contact;