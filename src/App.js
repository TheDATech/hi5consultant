import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Component/Pages/Home';
import { Navbar } from './Component/Navbar/Navbar';
import { Footer } from './Component/Footer/footer';
import { ContactLine } from './Component/InnerComponent/ContactLine';
import { Service } from './Component/Pages/Service';
import { Capabilities } from './Component/Pages/Capabilities';
import { FAQ } from './Component/Pages/FAQ';
import { Development } from './Component/Pages/Development';
import { Recruiting } from './Component/Pages/Recruiting';
import { Jobs } from './Component/Pages/Jobs';
import { Contact } from './Component/Pages/Contact';
import { JobDetail } from './Component/Pages/JobDetail';
import { RecruitingDetail } from './Component/Pages/RecruitingDetail';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/services" element={<Service/>}/>
      <Route path="/capabilities" element={<Capabilities/>}/>
      <Route path="/faq" element={<FAQ/>}/>
      <Route path="/development" element={<Development/>}/>
      <Route path="/development/:slug" element={<RecruitingDetail/>}/>
      <Route path="/recruiting" element={<Recruiting/>}/>
      <Route path="/recruiting/:slug" element={<RecruitingDetail/>}/>
      <Route path="/job-openings" element={<Jobs/>}/>
      <Route path="/jobs/:slug" element={<JobDetail/>}/>
      <Route path="/contact-us" element={<Contact/>}/>
    </Routes>
    <ContactLine/>
    <Footer/>
    </>
  );
}

export default App;
