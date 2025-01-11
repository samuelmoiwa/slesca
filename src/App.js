import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import About from './pages/About';
import Services from './pages/Services';
import OurTeam from './pages/OurTeam';
import PublicNotice from './pages/PublicNotice';
import ContactUs from './pages/ContactUs';
import FAQ from './pages/FAQ';

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<OurTeam />} />
        <Route path="/public-notices" element={<PublicNotice />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/faqs" element={<FAQ />} />
      </Routes>


      <Footer/>
    </>
  );
}

export default App;
