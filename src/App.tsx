import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeServices from './components/HomeServices';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import About from './components/About';
import Testimonials from './components/Testimonials';
import HomeTeam from './components/HomeTeam';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Team from './components/Team';
import HomeContact from './components/HomeContact';

function HomePage() {
  return (
    <>
      <Hero />
      <HomeServices />
      <HowItWorks />
      <About />
      <Testimonials />
      <HomeTeam />
      <HomeContact />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/why-om" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}