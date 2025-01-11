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
import SeedLicenseProcedures from './pages/SeedLicenseProcedures';
import RenewalOfSeedLicense from './pages/RenewalOfSeedLicense';
import RecentProjects from './pages/RecentProjects';
import SeedQualityCertification from './pages/SeedQualityCertification';
import RegulatoryCompliance from './pages/RegulatoryCompliance';
import TrainingWorkshops from './pages/TrainingWorkshops';

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
        <Route path="/about/license-procedures" element={<SeedLicenseProcedures />} />
        <Route path="/about/renewal-license" element={<RenewalOfSeedLicense />} />
        <Route path="/about/recent-projects" element={<RecentProjects />} />
        <Route path="/services/quality-certification" element={<SeedQualityCertification />} />
        <Route path="/services/regulatory-compliance" element={<RegulatoryCompliance />} />
        <Route path="/services/training-workshops" element={<TrainingWorkshops />} />
      </Routes>


      <Footer/>
    </>
  );
}

export default App;
