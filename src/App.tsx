import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Reservations from "./components/Reservations";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ShowTell from "./components/ShowTell";
import FullGalleryView from "./components/FullGalleryView";
import EventDetail from "./components/EventDetail";


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-jigger-gold p-5">
        <img
          src="/Logo Combination Mark (short).svg"
          alt="Logo"
          className=" filter invert brightness-0"
        />
      </div>
    );
  }

  return (
    <Router>
      <div className="min-h-screen bg-jigger-dark">
        <Navbar />
        <Routes>
          <Route path="/" element={<>
            <Hero />
            <About />
            <ShowTell />
            <Reservations />
            <Contact />
          </>} />
          <Route path="/gallery" element={<FullGalleryView />} />
          <Route path="/event/:eventId" element={<EventDetail />} /> {/* Dynamic route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
