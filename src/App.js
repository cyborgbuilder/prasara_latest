import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Sustainability from './components/Sustainability';
import Footer from './components/Footer';
import SocialBooth from './components/SocialBooth';
import Brands from './components/Brands'
import ScrollToTop from './components/ScrollToTop';
import PdfViewer from './components/PdfViewer';
function App() {
  // let component
   // eslint-disable-next-line default-case
  //  switch (window.location.pathname) {
  //    case "/":
  //      component = <Home />
  //      break;
  //    case "/about":
  //      component = <About />
  //      break;
  //    case "/Careers":
  //      component = <Careers />
  //     break;
  //    case "/Contact":
  //      component = <Contact />
  //     break;  
  //    case "/page":
  //      component = <Page />
  //      break;
  //  }
  return (
    <div className="App">
      {/* <Navbar />
      {component} */}

      <BrowserRouter >
      <Navbar />
      <SocialBooth />
      <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/brands' element={<Brands />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/sustainability' element={<Sustainability />} />
        </Routes>
        <Footer />
        
      </BrowserRouter>
    </div>
  );
}

export default App;
