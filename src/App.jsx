import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar';
import Auth from './pages/Auth';
import Home from './pages/Home'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Routes, Route } from 'react-router-dom';
import RecruiterProfile from './components/Recruiter/RecruiterProfile';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CandidateDashboard from './components/Dashboard/CandidateDashboard';
import RecruiterDashboard from './components/Dashboard/RecruiterDashboard';
import Jobs from './components/Jobs';
import ApplyJob from './components/Candidate/ApplyJob';
import { useState } from 'react';
import Unauthorized from './pages/Unauthorized';
import ProtectedRoute from './components/ProtectedRoute';
import { Slide } from 'react-toastify';

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
        <Route path='/unauthorized' element={<Unauthorized />} />
        <Route path='/recruiterprofile' element={<RecruiterProfile />} />

        <Route path='/cdashboard' element={
          <ProtectedRoute role="candidate">
            <CandidateDashboard activeSection={activeSection} setActiveSection={setActiveSection} />
          </ProtectedRoute>
        } />
        <Route path='/rdashboard' element={
          <ProtectedRoute role="recruiter">
            <RecruiterDashboard />
          </ProtectedRoute>} />

        <Route path='/jobs' element={<Jobs />} />
        <Route path='/applyjob' element={<ApplyJob />} />
      </Routes>
      <ToastContainer
        position="bottom-center"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Slide}
      />
      <Footer />
    </>
  )
}

export default App
