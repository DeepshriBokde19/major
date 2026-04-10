
function Footer() {
  return (
    <div className="text-white">

      {/* TOP */}
      <div className="grid grid-cols-3">

        {/* LEFT SIDE (Important + Useful) */}
        <div className="bg-[#1b3764] col-span-2 px-12 py-12 grid grid-cols-2 gap-10">

          {/* IMPORTANT LINKS */}
          <div>
            <h2 className="text-2xl font-bold mb-1">
              Important Links
            </h2>

            <div className="grid grid-cols-2 gap-x-10 text-[15px] text-white-300">
              {[
                "Exam Time Table",
                "Recruitment",
                "Right to Information",
                "Alumni",
                "Student Registration",
                "Scholarship Facility",
                "Need Help?",
                "Web Information Manager",
                "Feedback Facility of Students and Faculty Available in AICTE Web Portal",
                "Wiki Club SATI",
                "Result",
                "Intranet",
                "Anti Ragging",
                "Student Login",
                "Forgot Password",
                "FAQ's",
                "Report Your Failed Transaction",
                "NSS UNIT SATI",
                "Startup Cell"
              ].map((item, i) => (
                <p key={i} className="flex gap-2 mb-2 hover:text-white cursor-pointer">
                  <span>›</span> {item}
                </p>
              ))}
            </div>
          </div>

          {/* USEFUL LINKS */}
          <div>
            <h2 className="text-2xl font-bold mb-6">
              Useful Links
            </h2>

            <div className="text-[15px] text-white-800">
              {[
                "AICTE, India",
                "R.G.P.V., Bhopal",
                "DTE, Madhya Pradesh",
                "UGC, India",
                "Barkatullah University, Bhopal",
                "NAAC, India",
                "NBA, India",
              ].map((item, i) => (
                <p key={i} className="flex gap-2 mb-3 hover:text-white cursor-pointer">
                  <span>›</span> {item}
                </p>
              ))}
            </div>
          </div>

        </div>

        {/* RIGHT SIDE (CONTACT) */}
        <div className="bg-[#0f3b6f] px-10 py-12">

          <h2 className="text-2xl font-bold mb-6">
            Get in touch with us
          </h2>

          <div className="space-y-4 text-[15px] text-gray-300">

  {/* Address */}
  <p className="flex gap-3 items-start">
    <i className="fa-solid fa-location-dot mt-1"></i>
    Samrat Ashok Technological Institute – Civil Lines, Vidisha (M.P.) 464001, INDIA
  </p>

  {/* Email */}
  <p className="flex gap-3 items-center">
    <i className="fa-solid fa-envelope"></i>
    sati@satiengg.in
  </p>

  {/* Phone */}
  <p className="flex gap-3 items-center">
    <i className="fa-solid fa-phone"></i>
    +91-7592-250121
  </p>

  {/* Phone 2 */}
  <p className="flex gap-3 items-center">
    <i className="fa-solid fa-phone"></i>
    +91-9977380564 (Registrar)
  </p>

</div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="bg-[#132f57] border-t border-gray-500 px-10 py-4 flex justify-between text-sm text-gray-300">

        <p>© 2026. S.A.T.I. Vidisha. All Rights Reserved.</p>

        <p>Disclaimer / Privacy Policy / Sitemap</p>

        <p>Website Managing Committee</p>

      </div>

    </div>
  );
}

export default Footer;