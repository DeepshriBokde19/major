
import NotificationBar from "./NotificationBar";
import { useState, useEffect, useRef } from "react";

function Hero() {
  const images = [
    "/sati_d.jpg",
    "/sati_e.jpeg",
    "/sati_ncc.jpg",
    "/collegepicture1.png",
    "/collegepicture2.png",
    "/sati_gathering.jpeg",
  ];

  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  // ✅ Start Auto Slide
  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
  };

  // ✅ Stop Auto Slide
  const stopAutoSlide = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  // ✅ Next
  const nextSlide = () => {
    stopAutoSlide(); // 🔥 important
    setCurrent((prev) => (prev + 1) % images.length);
    startAutoSlide();
  };

  // ✅ Prev
  const prevSlide = () => {
    stopAutoSlide(); // 🔥 important
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
    startAutoSlide();
  };

  return (
    <div className="relative w-full h-[400px] overflow-hidden">

      {/* Slider */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="slider"
            className="w-full h-[350px] object-cover flex-shrink-0"
          />
        ))}
      </div>

      {/* Left */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full hover:bg-black"
      >
        ❮
      </button>

      {/* Right */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full hover:bg-black"
      >
        ❯
      </button>

      {/* 🔥 YAHI ADD KARNA HAI */}
    <div className="absolute bottom-0 w-full z-10">
      <NotificationBar />
    </div>

    </div>
  );
}

export default Hero;





// import { useState, useEffect } from "react";

// function Hero() {
//   const images = [
//     "/sati_d.jpg",
//     "/sati_e.jpeg",
//     "/sati_ncc.jpg",
//     "/collegepicture1.png",
//     "/collegepicture2.png",
//     "/sati_gathering.jpeg",
//   ];

//   const [current, setCurrent] = useState(0);

//   // ✅ Auto Slide
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % images.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   // ✅ Next
//   const nextSlide = () => {
//     setCurrent((prev) => (prev + 1) % images.length);
//   };

//   // ✅ Prev
//   const prevSlide = () => {
//     setCurrent((prev) =>
//       prev === 0 ? images.length - 1 : prev - 1
//     );
//   };

//   return (
//     <div className="relative w-full h-[400px] overflow-hidden">

//       {/* 🔥 Images (Fade Effect) */}
//       {images.map((img, index) => (
//         <img
//           key={index}
//           src={img}
//           alt="slider"
//           className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
//             index === current ? "opacity-100" : "opacity-0"
//           }`}
//         />
//       ))}

//       {/* ✅ Left Button */}
//       <button
//         onClick={prevSlide}
//         className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full z-10 hover:scale-110 transition"
//       >
//         ❮
//       </button>

//       {/* ✅ Right Button */}
//       <button
//         onClick={nextSlide}
//         className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full z-10 hover:scale-110 transition"
//       >
//         ❯
//       </button>

//     </div>
//   );
// }

// export default Hero;