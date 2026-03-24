import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import StickyMobileCallButton from './components/StickyMobileCallButton';
import Home from './pages/Home';
import Boilers from './pages/Boilers';
import BoilerInstallation from './pages/BoilerInstallation';
import BoilerServicing from './pages/BoilerServicing';
import BoilerServicePlans from './pages/BoilerServicePlans';
import BoilerRepairs from './pages/BoilerRepairs';
import Heating from './pages/Heating';
import GasFireRepairs from './pages/GasFireRepairs';
import AirSourceHeatPumps from './pages/AirSourceHeatPumps';
import RadiatorRepairs from './pages/RadiatorRepairs';
import PowerFlushing from './pages/PowerFlushing';
import HiveThermostats from './pages/HiveThermostats';
import BoilerCover from './pages/BoilerCover';
import GasEngineer from './pages/GasEngineer';
import HeatingEngineer from './pages/HeatingEngineer';
import GasLeak from './pages/GasLeak';
import UnderfloorHeating from './pages/UnderfloorHeating';
import Plumbing from './pages/Plumbing';
import EmergencyPlumber from './pages/EmergencyPlumber';
import PlumberRepairs from './pages/PlumberRepairs';
import TapRepairs from './pages/TapRepairs';
import ToiletRepairs from './pages/ToiletRepairs';
import HotWaterTanks from './pages/HotWaterTanks';
import ColdWaterTanks from './pages/ColdWaterTanks';
import CastIronPipes from './pages/CastIronPipes';
import LeadPipeReplacement from './pages/LeadPipeReplacement';
import ShowerRepairs from './pages/ShowerRepairs';
import Water2FilterInstallation from './pages/Water2FilterInstallation';
import BathroomInstallations from './pages/BathroomInstallations';
import Landlords from './pages/Landlords';
import GasSafetyCertificates from './pages/GasSafetyCertificates';
import LeadTesting from './pages/LeadTesting';
import LegionellaRiskAssessments from './pages/LegionellaRiskAssessments';
import PATTesting from './pages/PATTesting';
import PropertyManagers from './pages/PropertyManagers';
import PrivateLandlords from './pages/PrivateLandlords';
import AreasServed from './pages/AreasServed';
import About from './pages/About';
import Contact from './pages/Contact';
import BookingConfirmation from './pages/BookingConfirmation';
import Reviews from './pages/Reviews';
import FAQs from './pages/FAQs';
import Pricing from './pages/Pricing';
import Services from './pages/Services';
import PlumberGlasgowSouthside from './pages/PlumberGlasgowSouthside';
import PlumberBearsden from './pages/PlumberBearsden';
import PlumberPaisley from './pages/PlumberPaisley';
import PlumberEastKilbride from './pages/PlumberEastKilbride';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Layout>
        <StickyMobileCallButton />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/boilers" element={<Boilers />} />
          <Route path="/boilers/installation" element={<BoilerInstallation />} />
          <Route path="/boilers/servicing" element={<BoilerServicing />} />
          <Route path="/boilers/service-plans" element={<BoilerServicePlans />} />
          <Route path="/boilers/repairs" element={<BoilerRepairs />} />
          <Route path="/heating" element={<Heating />} />
          <Route path="/heating/boiler-cover" element={<BoilerCover />} />
          <Route path="/heating/gas-engineer" element={<GasEngineer />} />
          <Route path="/heating/heating-engineer" element={<HeatingEngineer />} />
          <Route path="/heating/gas-leak" element={<GasLeak />} />
          <Route path="/heating/underfloor-heating" element={<UnderfloorHeating />} />
          <Route path="/heating/gas-fire-repairs" element={<GasFireRepairs />} />
          <Route path="/heating/air-source-heat-pumps" element={<AirSourceHeatPumps />} />
          <Route path="/heating/radiator-repairs" element={<RadiatorRepairs />} />
          <Route path="/heating/power-flushing" element={<PowerFlushing />} />
          <Route path="/heating/hive-thermostats" element={<HiveThermostats />} />
          <Route path="/plumbing" element={<Plumbing />} />
          <Route path="/plumbing/emergency-plumber" element={<EmergencyPlumber />} />
          <Route path="/plumbing/plumber-repairs" element={<PlumberRepairs />} />
          <Route path="/plumbing/tap-repairs" element={<TapRepairs />} />
          <Route path="/plumbing/toilet-repairs" element={<ToiletRepairs />} />
          <Route path="/plumbing/hot-water-tanks" element={<HotWaterTanks />} />
          <Route path="/plumbing/cold-water-tanks" element={<ColdWaterTanks />} />
          <Route path="/plumbing/cast-iron-pipes-drainage" element={<CastIronPipes />} />
          <Route path="/plumbing/lead-pipe-replacement" element={<LeadPipeReplacement />} />
          <Route path="/plumbing/shower-repairs" element={<ShowerRepairs />} />
          <Route path="/plumbing/water2-filter-installation" element={<Water2FilterInstallation />} />
          <Route path="/bathroom-installations" element={<BathroomInstallations />} />
          <Route path="/landlords" element={<Landlords />} />
          <Route path="/landlords/gas-safety-certificates" element={<GasSafetyCertificates />} />
          <Route path="/landlords/lead-testing" element={<LeadTesting />} />
          <Route path="/landlords/legionella-risk-assessments" element={<LegionellaRiskAssessments />} />
          <Route path="/landlords/pat-testing" element={<PATTesting />} />
          <Route path="/landlords/property-managers" element={<PropertyManagers />} />
          <Route path="/landlords/private-landlords" element={<PrivateLandlords />} />
          <Route path="/areas-served" element={<AreasServed />} />
          <Route path="/areas/plumber-glasgow-southside" element={<PlumberGlasgowSouthside />} />
          <Route path="/areas/plumber-bearsden" element={<PlumberBearsden />} />
          <Route path="/areas/plumber-paisley" element={<PlumberPaisley />} />
          <Route path="/areas/plumber-east-kilbride" element={<PlumberEastKilbride />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking-confirmation" element={<BookingConfirmation />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
