function NotificationBar() {
  return (
    <div className="flex items-center">

      {/* LEFT BLUE BOX */}
      <div className="bg-indigo-900 text-white px-6 py-3 flex items-center gap-2 relative overflow-hidden">

        <span className="text-lg">🔔</span>

        <span className="font-semibold">NOTIFICATIONS</span>

        {/* Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shine"></div>
      </div>

      {/* RIGHT RED MOVING TEXT */}
      <div className="bg-red-600 text-white w-full overflow-hidden">
        <div className="whitespace-nowrap animate-marquee px-4 py-3">
          🎓 Scholarship for MMVY and MPTASS_SC_ST_OBC session 2025 &nbsp;&nbsp; | &nbsp;&nbsp;
          📢 Admission Enquiry @ SATI &nbsp;&nbsp; | &nbsp;&nbsp;
          📝 Student Grievance Redressal &nbsp;&nbsp; | &nbsp;&nbsp;
        </div>
      </div>

    </div>
  );
}

export default NotificationBar;