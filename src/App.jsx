
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

        {/* ✅ CONTACT PAGE */}
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </Router>
  );
}

export default App;