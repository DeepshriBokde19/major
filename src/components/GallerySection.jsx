

// // 0000
// import { useState, useEffect } from "react";

// function GallerySection() {

//   const images = [
//     "/g1.jpeg",
//     "/g2.jpg",
//     "/g3.jpeg",
//     "/g7.jpg",
//     "/g5.jpeg",
//     "/g6.png",
//     "/g8.jpg"
//   ];

//   const logos = [
//     "/logo1.jpg",
//     "/logo2.jpg",
//     "/logo3.jpg",
//     "/logo4.jpg",
//     "/logo5.jpg",
//     "/logo6.jpg",
//   ];

//   const [index, setIndex] = useState(0);

//   // ✅ Smooth auto change (gallery)
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % images.length);
//     }, 3500);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="bg-gray-100 py-14 px-10">

//       {/* TOP SECTION */}
//       <div className="flex gap-10 ">

//         {/* LEFT - GALLERY */}
//         <div className="w-[70%]">

//           <h1 className="text-3xl font-semibold mb-6">
//             Explore College Gallery
//           </h1>

//           <div className="flex gap-4">

//             {[0,1,2].map((i) => (
//               <div
//                 key={i}
//                 className="w-[280px] h-[220px] border-[5px] border-black bg-white p-[6px]"
//               >
//                 <img
//                   src={images[(index + i) % images.length]}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             ))}

//           </div>
//         </div>

//         {/* RIGHT - FACEBOOK */}
//         <div className="w-[30%] bg-white rounded shadow p-4">

//           <h2 className="text-xl font-semibold mb-4">
//             SATI@Facebook
//           </h2>

//           {/* Header */}
//           <div className="flex items-center gap-3 mb-3">
//             <img src="/v_img.jpg" className="w-10 h-10 rounded-full" />
//             <div>
//               <p className="text-sm font-medium">
//                 Samrat Ashok Technological Institute
//               </p>
//               <p className="text-xs text-gray-500">1,588 followers</p>
//             </div>
//           </div>

//           {/* Follow Button */}
//           <button className="bg-gray-200 text-sm px-3 py-1 rounded mb-4">
//             👍 Follow Page
//           </button>

//           {/* Post */}
//           <div className="text-sm text-gray-700 leading-relaxed">
//             <p className="font-medium mb-1">
//               Plantation Drive Organized
//             </p>

//             <p>
//               The Department of Electrical Engineering organized a plantation
//               drive dated 9th April under its social outreach program near
//               Rangai Temple. Students actively participated in the plantation...
//             </p>
//           </div>

//         </div>

//       </div>

//       {/* BOTTOM SECTION */}
//       <div className="mt-12">

//         <h1 className="text-3xl font-semibold mb-6">
//           Accreditation & Rankings
//         </h1>

//         {/* LOGO STRIP */}
//         <div className="overflow-hidden bg-white py-4 px-2">

//           <div className="flex gap-6 animate-scroll">

//             {[...logos, ...logos].map((logo, i) => (
//               <div
//                 key={i}
//                 className="min-w-[200px] h-[90px] flex items-center justify-center border"
//               >
//                 <img
//                   src={logo}
//                   className="h-[55px] object-contain"
//                 />
//               </div>
//             ))}

//           </div>

//         </div>

//       </div>

//     </div>
//   );
// }

// export default GallerySection;






// 1

// import { useState, useEffect } from "react";

// function GallerySection() {

//   const images = [
//     "/g1.jpeg",
//     "/g2.jpg",
//     "/g3.jpeg",
//     "/g7.jpg",
//     "/g5.jpeg",
//     "/g6.png",
//     "/g8.jpg"
//   ];

//   const logos = [
//     "/logo1.jpg",
//     "/logo2.jpg",
//     "/logo3.jpg",
//     "/logo4.jpg",
//     "/logo5.jpg",
//     "/logo6.jpg",
//   ];

//   const [index, setIndex] = useState(0);

//   // ✅ Smooth auto slide
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % images.length);
//     }, 4000); // slow & smooth

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="bg-gray-100 py-14 px-10">

//       {/* TOP SECTION */}
//       <div className="flex gap-10 items-start">

//         {/* LEFT - GALLERY */}
//         <div className="w-[65%]">

//           <h1 className="text-3xl font-semibold mb-6">
//             Explore College Gallery
//           </h1>

//           <div className="overflow-hidden">
//             <div
//               className="flex gap-4 transition-transform duration-700 ease-in-out"
//               style={{
//                 transform: `translateX(-${index * 294}px)`
//               }}
//             >

//               {images.map((img, i) => (
//                 <div
//                   key={i}
//                   className="min-w-[280px] h-[220px] border-[5px] border-black bg-white p-[6px]"
//                 >
//                   <img
//                     src={img}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               ))}

//             </div>
//           </div>
//         </div>

//         {/* RIGHT - FACEBOOK (BIGGER) */}
//         <div className="w-[35%] bg-white rounded shadow p-5 h-fit">

//           <h2 className="text-2xl font-semibold mb-4">
//             SATI@Facebook
//           </h2>

//           <div className="flex items-center gap-3 mb-3">
//             <img src="/v_img.jpg" className="w-12 h-12 rounded-full" />
//             <div>
//               <p className="text-sm font-medium">
//                 Samrat Ashok Technological Institute
//               </p>
//               <p className="text-xs text-gray-500">1,588 followers</p>
//             </div>
//           </div>

//           <button className="bg-gray-200 text-sm px-4 py-1 rounded mb-4">
//             👍 Follow Page
//           </button>

//           <div className="text-sm text-gray-700 leading-relaxed">
//             <p className="font-semibold mb-1">
//               Plantation Drive Organized
//             </p>

//             <p>
//               The Department of Electrical Engineering organized a plantation
//               drive dated 9th April under its social outreach program near
//               Rangai Temple. Students actively participated in the plantation...
//             </p>
//           </div>

//         </div>

//       </div>

//       {/* BOTTOM SECTION */}
//       <div className="mt-12 w-[65%]">

//         <h1 className="text-3xl font-semibold mb-6">
//           Accreditation & Rankings
//         </h1>

//         {/* LOGO SLIDER */}
//         <div className="overflow-hidden bg-white py-3 px-2 rounded">

//           <div className="flex gap-6 animate-scrollSlow">

//             {[...logos, ...logos].map((logo, i) => (
//               <div
//                 key={i}
//                 className="min-w-[180px] h-[80px] flex items-center justify-center border rounded"
//               >
//                 <img
//                   src={logo}
//                   className="h-[50px] object-contain"
//                 />
//               </div>
//             ))}

//           </div>

//         </div>

//       </div>

//     </div>
//   );
// }

// export default GallerySection;




import { useEffect } from "react";

function GallerySection() {

  const images = [
    "/g1.jpeg",
    "/g2.jpg",
    "/g3.jpeg",
    "/g7.jpg",
    "/g5.jpeg",
    "/g6.png",
    "/g8.jpg"
  ];

  const logos = [
    "/logo1.jpg",
    "/logo2.jpg",
    "/logo3.jpg",
    "/logo4.jpg",
    "/logo5.jpg",
    "/logo6.jpg",
  ];

  return (
    <div className="bg-gray-100 py-14 px-10">

      {/* TOP SECTION */}
      <div className="flex gap-10 items-stretch">

        {/* LEFT - GALLERY */}
        <div className="w-[65%] overflow-hidden">

          <h1 className="text-3xl font-semibold mb-6">
            Explore College Gallery
          </h1>

          {/* 🔥 SMOOTH SLIDER */}
          <div className="overflow-hidden">

            <div className="flex gap-4 animate-gallery">

              {[...images, ...images].map((img, i) => (
                <div
                  key={i}
                  className="min-w-[280px] h-[220px] border-[5px] border-black bg-white p-[6px]"
                >
                  <img
                    src={img}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}

            </div>

          </div>
        </div>

        {/* RIGHT - FACEBOOK */}
        <div className="w-[35%] bg-white rounded shadow p-5 flex flex-col justify-between">

          <div>
            <h2 className="text-2xl font-semibold mb-4">
              SATI@Facebook
            </h2>

            {/* Header */}
            <div className="flex items-center gap-3 mb-3">
              <img src="/v_img.jpg" className="w-12 h-12 rounded-full" />
              <div>
                <p className="text-sm font-medium">
                  Samrat Ashok Technological Institute
                </p>
                <p className="text-xs text-gray-500">1,588 followers</p>
              </div>
            </div>

            {/* Follow */}
            <button className="bg-gray-200 text-sm px-4 py-1 rounded mb-4">
              👍 Follow Page
            </button>

            {/* Post */}
            <div className="text-sm text-gray-700 leading-relaxed">
              <p className="font-semibold mb-1">
                Plantation Drive Organized
              </p>

              <p>
                The Department of Electrical Engineering organized a plantation
                drive dated 9th April under its social outreach program near
                Rangai Temple. Students actively participated in the plantation...
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* BOTTOM SECTION */}
      <div className="mt-12 w-[65%]">

        <h1 className="text-3xl font-semibold mb-6">
          Accreditation & Rankings
        </h1>

        {/* LOGO SLIDER */}
        <div className="overflow-hidden bg-white py-3 px-2 rounded">

          <div className="flex gap-6 animate-scrollSlow">

            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="min-w-[180px] h-[80px] flex items-center justify-center border rounded"
              >
                <img
                  src={logo}
                  className="h-[50px] object-contain"
                />
              </div>
            ))}

          </div>

        </div>

      </div>

    </div>
  );
}

export default GallerySection;