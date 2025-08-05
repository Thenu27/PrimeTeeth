import { Route, Routes } from 'react-router-dom';
import './App.css'
import LandingPage from './pages/LandingPage/LandingPage';
import ServicesPage from './pages/ServicesPage/ServicesPage';
import ContactPage from './pages/ContactPage/contactPage';
import NavBar from './components/Navbar/Navbar';
import AboutPage from './pages/AboutPage/AboutPage';
import Footer from './components/Footer/Footer';
import GalleryPage from './pages/GalleryPage/GalleryPage';
import GalleryCarousel from './pages/GalleryCarousal/GalleryCarousal';

function App() {
  return (
    <>
      <div>
        <NavBar/>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/services' element={<ServicesPage/>}/>
          <Route path='/contact' element={<ContactPage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/gallery' element={<GalleryCarousel/>}/>
        </Routes>
        <Footer/>
      </div>
    </>
  )
}

export default App
