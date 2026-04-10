

import { useState, useEffect } from "react";

function InfrastructureSection() {
  const data = [
    {
      title: "VVNCC",
      desc: "Computer Lab of 120 latest configured computers with internet...",
      icon: "fa-building-columns",
    },
    {
      title: "Alumni Associations",
      desc: "The SATI local Alumni Associations has been formed in various cities...",
      icon: "fa-handshake",
    },
    {
      title: "Guest House",
      desc: "One guest House is available in the institute...",
      icon: "fa-house",
    },
    {
      title: "Games & Sports",
      desc: "The college provides excellent facilities for practically all...",
      icon: "fa-baseball",
    },
    {
      title: "Central Library",
      desc: "The Library has a rich collection of all kinds of text...",
      icon: "fa-book",
    },
    {
      title: "Bank & Post Office",
      desc: "A full-fledged branch of SBI along with ATM facility...",
      icon: "fa-building-columns",
    },
    {
      title: "Medical / Dispensary",
      desc: "A dispensary providing students and staff with basic medical...",
      icon: "fa-hospital",
    },
    {
      title: "Canteen",
      desc: "Newly constructed canteen exists adjoining to Alumni Transit Home...",
      icon: "fa-utensils",
    },
    {
      title: "College Hostel",
      desc: "The Institute has three Boy's and three Girls Hostels...",
      icon: "fa-hotel",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [index]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 3) % data.length);
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? data.length - 3 : prev - 3
    );
  };

  const visibleCards = data.slice(index, index + 3);

  if (visibleCards.length < 3) {
    visibleCards.push(...data.slice(0, 3 - visibleCards.length));
  }

  return (
    <div className="bg-gray-100 py-16 px-10">

      <h1 className="text-2xl font-bold mb-10">
        Infrastructure and Facilities
      </h1>

      <div className="flex gap-8">

        {/* LEFT SIDE */}
        <div className="flex flex-col gap-6">

          {/* Cards */}
          <div className="flex gap-6">
            {visibleCards.map((item, i) => (
              <div
                key={i}
                className="group bg-white rounded-xl shadow-md w-[260px] p-6 text-center transition duration-300 hover:bg-red-500 hover:text-white hover:scale-105"
              >
                {/* ✅ ICON FIX */}
                <div className="text-4xl mb-4 text-blue-700 group-hover:text-white">
                  <i className={`fa-solid ${item.icon}`}></i>
                </div>

                <h2 className="text-xl font-semibold mb-2">
                  {item.title}
                </h2>

                <p className="text-sm opacity-80 group-hover:text-white">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-4 justify-center">
            <button
              onClick={prevSlide}
              className="bg-blue-900 text-white w-10 h-10 rounded-full"
            >
              ◀
            </button>

            <button
              onClick={nextSlide}
              className="bg-blue-900 text-white w-10 h-10 rounded-full"
            >
              ▶
            </button>
          </div>

        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="relative w-[40%]">
          <img
            src="/v_img.jpg"
            className="rounded-xl w-full h-full object-cover"
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-white/70 rounded-full flex items-center justify-center text-2xl">
              ▶
            </div>
          </div>

          
        </div>

      </div>
    </div>
  );
}

export default InfrastructureSection;