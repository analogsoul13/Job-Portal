import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar';
import Role from './pages/Role';
import Auth from './pages/Auth';
import Home from './pages/Home'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Routes, Route } from 'react-router-dom';
import CandidateProfile from './components/Candidate/CandidateProfile';
import RecruiterProfile from './components/Recruiter/RecruiterProfile';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CandidateDashboard from './components/Dashboard/CandidateDashboard';
import RecruiterDashboard from './components/Dashboard/RecruiterDashboard';
import Jobs from './components/Jobs';
import AppliedJobList from './components/Candidate/AppliedJobList';
import ApplyJob from './components/Candidate/ApplyJob';
import { useState } from 'react';

AOS.init();


function App() {
  // State to track active section // State Lifting
  const [activeSection, setActiveSection] = useState('dashboard')

  return (
    <>
      <Navbar onOptionSelect={setActiveSection} activeId={activeSection} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/role' element={<Role />} />
        <Route path='/candidateprofile' element={<CandidateProfile />} />
        <Route path='/recruiterprofile' element={<RecruiterProfile />} />
        <Route path='/cdashboard' element={<CandidateDashboard activeSection={activeSection} setActiveSection={setActiveSection} />} />
        <Route path='/rdashboard' element={<RecruiterDashboard />} />
        <Route path='/jobs' element={<Jobs />} />
        <Route path='/appliedlist' element={<AppliedJobList />} />
        <Route path='/applyjob' element={<ApplyJob />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </>
  )
}

export default App
