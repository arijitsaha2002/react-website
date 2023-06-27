import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Tools from './Components/Tools';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Faqs from './Components/FAQ';

function App() {
    return (
        <>
            <div className='d-flex flex-column justify-content-between min-vh-100 w-100'>
                <div className='sticky-top'>
                    <NavBar />
                </div>

                <div>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about-us' element={<About />} />
                    <Route path='/contact-us' element={<Contact />} />
                    <Route path='/tools' element={<Tools />} />
                    <Route path='/faqs' element={<Faqs/>} />
                </Routes>
                </div>

                <div>
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default App;
