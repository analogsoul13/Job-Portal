import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar';
import Role from './pages/Role';
import Auth from './pages/Auth';
import Home from './pages/Home'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Routes, Route } from 'react-router-dom';
import CandidateProfile from './components/CandidateProfile';
import RecruiterProfile from './components/RecruiterProfile';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CandidateDashboard from './components/Dashboard/CandidateDashboard';
import RecruiterDashboard from './components/Dashboard/RecruiterDashboard';
import Jobs from './components/Jobs';

AOS.init();


function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/auth' element={<Auth/>}/>
      <Route path='/role' element={<Role/>}/>
      <Route path='/candidateprofile' element={<CandidateProfile/>} />
      <Route path='/recruiterprofile' element={<RecruiterProfile/>} />
      <Route path='/cdashboard' element={<CandidateDashboard/>}/>
      <Route path='/rdashboard' element={<RecruiterDashboard/>}/>
      <Route path='/jobs' element={<Jobs/>} />
    </Routes>
    <ToastContainer/>
    <Footer/>
    </>
  )
}

export default App
