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
    </Routes>
    <Footer/>
    </>
  )
}

export default App
