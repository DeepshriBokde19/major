
import NotificationBar from "./components/NotificationBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ImportantSection from "./components/ImportantSection";
import CoursesSection from "./components/CoursesSection";
import InfrastructureSection from "./components/InfrastructureSection";
import GallerySection from "./components/GallerySection";
import Footer from "./components/footer";

import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Contact from "./pages/Contact";
import Chatbot from "./components/Chatbot";

// ✅ NEW PAGES IMPORT
import Result from "./pages/Result";
import Admission from "./pages/Admission";
import Placement from "./pages/Placement";

function App() {
  return (
    <Router>

      <TopBar />
      <Header />
      <Navbar />

      <Routes>

        {/* ✅ HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <ImportantSection />
              <CoursesSection />
              <InfrastructureSection />  
              <GallerySection />
              <Footer />
            </>
          }
        />

        {/* ✅ OTHER PAGES */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/result" element={<Result />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/placement" element={<Placement />} />

      </Routes>

      {/* ✅ Chatbot har page pe dikhega */}
      <Chatbot />

    </Router>
  );
}

export default App;