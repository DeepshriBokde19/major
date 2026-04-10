
// function Header() {
//   return (
//     <div className="flex items-center px-6 py-3 bg-white border-b">

//       {/* LOGO */}
//       <img
//         src="/logo_sati.jpg"
//         alt="logo"
//         className="w-40 h-40 mr-4 object-contain"
//       />

//       {/* TEXT */}
//       <div className="flex flex-col gap-1 leading-tight">

//         <h2 className=" text-3xl font-medium text-blue-800">
//           सम्राट अशोक अभियांत्रिकीय संस्थान
//         </h2>

//         <h1 className="text-4xl font-bold text-blue-900">
//           Samrat Ashok Technological Institute
//         </h1>

//         <p className="text-l text-black-700">
//           A grant-in-aid Autonomous Engineering College Estd. in 1960
//         </p>

//         <p className="text-l text-black-600">
//           (Approved from AICTE and affiliated to RGPV & BU, Bhopal)
//         </p>

//         <p className="text-l text-black-600">
//           NBA Accredited (B.Tech. Civil, Mech., E&I, CSE) and NAAC Accredited
//         </p>

//       </div>

//     </div>





    
//   );
// }

// export default Header;

import { FaComments } from "react-icons/fa";
function Header() {
  return (
    <div className="flex justify-between items-center px-6 py-3 bg-white border-b">

      {/* LEFT SIDE (Logo + Text) */}
      <div className="flex items-center">

        <img
          src="/logo_sati.jpg"
          alt="logo"
          className="w-40 h-40 mr-4 object-contain"
        />

        <div className="flex flex-col gap-1 leading-tight">

          <h2 className="text-3xl font-medium text-blue-800">
            सम्राट अशोक अभियांत्रिकीय संस्थान
          </h2>

          <h1 className="text-3xl font-bold text-blue-900">
            Samrat Ashok Technological Institute
          </h1>

          <p className="text-l text-black-700">
            A grant-in-aid Autonomous Engineering College Estd. in 1960
          </p>

          <p className="text-l text-black-600">
            (Approved from AICTE and affiliated to RGPV & BU, Bhopal)
          </p>

          <p className="text-l text-black-600">
            NBA Accredited (B.Tech. Civil, Mech., E&I, CSE) and NAAC Accredited
          </p>

        </div>
      </div>

      {/* RIGHT SIDE BUTTONS */}
      <div className="flex flex-col gap-3">

        {/* Grievance */}
        <div className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-3 py-1 rounded-full shadow-md cursor-pointer
        hover:scale-105 hover:shadow-xl hover:from-blue-600 hover:to-blue-800 transition duration-300">


          <span className="bg-white p-2 rounded-full">
          <FaComments className="text-red-500 text-lg" />
         </span>

          <div>
            <p className="text-sm font-semibold">
              For Student Grievance Redressal
            </p>
            <p className="text-xs opacity-90">Click Here</p>
          </div>

        </div>

        {/* Admission */}
        <div className="flex items-center gap-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-3 py-1 rounded-full shadow-md cursor-pointer
        hover:scale-105 hover:shadow-xl hover:from-blue-600 hover:to-blue-800 transition duration-300">

          <span className="bg-white p-2 rounded-full">
             <FaComments className="text-red-500 text-lg" />
            </span>

          <div>
            <p className="text-sm font-semibold">
              For Admission Enquiries
            </p>
            <p className="text-xs opacity-90">
              +91-7999810576 Click Here
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Header;