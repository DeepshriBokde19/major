import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Chatbot() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    const text = input.toLowerCase();

    if (text.includes("result")) {
      navigate("/result");
    } else if (text.includes("admission")) {
      navigate("/admission");
    } else if (text.includes("placement")) {
      navigate("/placement");
    } else {
      alert("No page found");
    }

    setInput("");
  };

  return (
    <div className="fixed bottom-5 right-5 bg-white shadow-lg rounded-lg p-4 w-72">
      <h3 className="text-blue-900 font-bold mb-2">Chatbot</h3>

      <input
        type="text"
        placeholder="Type like 'result'..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
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