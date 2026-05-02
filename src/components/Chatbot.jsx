// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Chatbot() {
//   const [input, setInput] = useState("");
//   const navigate = useNavigate();

//   const handleSearch = () => {
//     const text = input.toLowerCase();

//     if (text.includes("result")) {
//       navigate("/result");
//     } else if (text.includes("admission")) {
//       navigate("/admission");
//     } else if (text.includes("placement")) {
//       navigate("/placement");
//     } else {
//       alert("No page found");
//     }

//     setInput("");
//   };

//   return (
//     <div className="fixed bottom-5 right-5 bg-white shadow-lg rounded-lg p-4 w-72">
//       <h3 className="text-blue-900 font-bold mb-2">Chatbot</h3>

//       <input
//         type="text"
//         placeholder="Type like 'result'..."
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         className="w-full border px-3 py-2 rounded mb-2"
//       />

//       <button
//         onClick={handleSearch}
//         className="w-full bg-blue-900 text-white py-2 rounded"
//       >
//         Search
//       </button>
//     </div>
//   );
// }

// export default Chatbot;








import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Fuse from "fuse.js";

function Chatbot() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  // 🔹 React internal pages
  const internalPages = [
    { name: "result", path: "/result" },
    { name: "admission", path: "/admission" },
    { name: "placement", path: "/placement" }
  ];

  // 🔹 SATI website pages (external)
  const externalPages = [
    {
      title: "Hostel",
      path: "https://www.satiengg.in/campus-life/hostel",
      content: "hostel room mess stay accommodation"
    },
    {
      title: "Fees",
      path: "https://www.satiengg.in/admission/fee-structure",
      content: "fees fee structure payment cost charges"
    },
    {
      title: "AI Department",
      path: "https://www.satiengg.in/departments/artificial-intelligence",
      content: "ai artificial intelligence hod faculty teachers"
    },
    {
      title: "Student club",
      path: "https://www.satiengg.in/campus-life/student-life",
      content: "club for student"
    },
    {
      title: "Admission",
      path: "https://www.satiengg.in/Admission.aspx",
      content: "admission apply register eligibility form"
    }
  ];

  // 🔹 Fuse setup (smart search)
  const fuse = new Fuse(externalPages, {
    keys: ["title", "content"],
    threshold: 0.4
  });

  // 🔹 Search function
  const handleSearch = () => {
    const text = input.trim().toLowerCase();

    // ✅ Step 1: React pages
    for (let page of internalPages) {
      if (text.includes(page.name)) {
        navigate(page.path);
        setInput("");
        return;
      }
    }

    // ✅ Step 2: Smart search
    const result = fuse.search(text);

    if (result.length > 0) {
      window.location.href = result[0].item.path;
      setInput("");
      return;
    }

    // ✅ Step 3: Google fallback (MOST IMPORTANT 🔥)
    window.open(
      `https://www.google.com/search?q=site:satiengg.in ${text}`,
      "_blank"
    );

    setInput("");
  };

  return (
    <div className="fixed bottom-5 right-5 bg-white shadow-lg rounded-lg p-4 w-72">
      <h3 className="text-blue-900 font-bold mb-2">Smart Search</h3>

      <input
        type="text"
        placeholder="Search anything..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        className="w-full border px-3 py-2 rounded mb-2"
      />

      <button
        onClick={handleSearch}
        className="w-full bg-blue-900 text-white py-2 rounded"
      >
        Search
      </button>
    </div>
  );
}

export default Chatbot;





