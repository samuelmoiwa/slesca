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
import SLeSCAStructure from './pages/SLeSCAStructure';
import SeedsAct from './pages/SeedsAct';

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
        <Route path="/about/structure" element={<SLeSCAStructure />} />
        <Route path="/about/seeds-act" element={<SeedsAct />} />
      </Routes>


      <Footer/>
    </>
  );
}

export default App;
