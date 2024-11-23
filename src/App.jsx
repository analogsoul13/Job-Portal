import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar';
import Role from './pages/Role';
import Auth from './pages/Auth';
import Home from './pages/Home'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Routes, Route } from 'react-router-dom';

AOS.init();


function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/auth' element={<Auth/>}/>
      <Route path='/role' element={<Role/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
