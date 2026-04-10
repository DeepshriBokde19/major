
function ImportantSection() {
  const notices = [
    "Mid_Sem_Notice 05-04-2026",
    "Quotation for Supply of Electrical Material / Fixtures for the Financial Year 2026-27 02-04-2026",
    "Notice for Ph.D. Course Work Exam 02-04-2026",
    "Exam Form Notice Urgent 01-04-2026",
    "TECHNOVISION – 2026 03-02-2026",
    "Students Representative Council 21-01-2026",
    "Important Information for Scholarship 21-01-2026",
    "Faculty Recruitment 2026 (Contract) 19-01-2026",
    "On-line Fees Notice for BTech/MCA/MTech students 31-12-2025",
    "Off-line Fees Notice for MBA/MSC/BBA student 31-12-2025",
  ];

  const tabs = [
    "All",
    "Academic",
    "Examination",
    "Admission",
    "Events",
    "Tender",
    "Recruitment",
    "Libraries",
  ];

  return (
    <div className="bg-gray-100 py-12 px-8">

      {/* Heading */}
      <div className="text-center mb-10">
        <p className="text-gray-600 text-lg">
          <span className="border-b-2 border-red-500 px-3">
            Welcome to
          </span>
        </p>

        <h1 className="text-3xl font-bold mt-2">
          Samrat Ashok Technological Institute (SATI)
        </h1>
      </div>

      {/* Layout */}
      <div className="grid grid-cols-2 gap-10">

        {/* LEFT */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Important Notices
          </h2>

          {/* Tabs */}
          
          <div className="bg-white text-gray-900 font-semibold rounded-full flex flex-wrap gap-2 px-3 py-2 mb-3 shadow-md">
            {tabs.map((tab, index) => (
              <span
                key={index}
                className={`px-4 py-1 text-sm cursor-pointer rounded-full transition 
                ${
                  index === 0
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                    : "hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white"
                }`}
              >
                {tab}
              </span>
            ))}
          </div>

          {/* Notices */}
          <div className="bg-white rounded-xl shadow p-5 h-[350px] overflow-y-auto">

            {notices.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 py-2"
              >
                {/* Arrow */}
                <span className="text-blue-600 text-sm mt-1">
                  ➤
                </span>

                {/* Text */}
                <p className="text-gray-700 text-sm leading-relaxed">
                  {item}
                </p>
              </div>
            ))}

          </div>
        </div>

        {/* RIGHT */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Message from the Director
          </h2>

          <div className="bg-white p-5 rounded-xl shadow flex gap-4">

            {/* Image */}
            <img
              src="/director.jpeg"
              alt="director"
              className="w-36 h-36 object-cover rounded"
            />

            {/* Text */}
            <div>
              <p className="text-gray-700 text-[15px] leading-10 font-normal text-justify">
                It is my privilege to welcome you and introduce you 
                "SAMRAT ASHOK TECHNOLOGICAL INSTITUTE (SATI), 
                a Grant in Aid Autonomous Institute located at Vidisha (M.P.) 
                I am feeling proud to put on record that the institute 
                which was established in..."It is my privilege to welcome you and introduce you 
                "SAMRAT ASHOK TECHNOLOGICAL INSTITUTE (SATI), 
                a Grant in Aid Autonomous Institute located at Vidisha (M.P.). 
                
              </p>

              {/* Buttons */}
              <div className="flex gap-4 mt-4">
                <button className="bg-blue-900 text-white px-4 py-2 text-sm rounded-full hover:bg-blue-700 transition">
                  ▶ READ MORE
                </button>

                <button className="bg-blue-900 text-white px-4 py-2 text-sm rounded-full hover:bg-blue-700 transition">
                  ▶ VIDEO MESSAGE
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}

export default ImportantSection;