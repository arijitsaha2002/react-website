import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Tools from './Components/Tools';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Faqs from './Components/FAQ';
import Base from './Components/Base';
import Product from './Components/Product';
import { Technology, Techs } from './Components/Technology';
import { useContext } from 'react';
import { AppContext } from './Components/ContextStates';

function App() {

    const prom = useContext(AppContext).prom;
    console.log(prom)

    const Blank = () => {
        return (
            <br />
        )
    }

    return (prom >= 5) ? (
        <>
            <div className='d-flex flex-column justify-content-between min-vh-100 w-100'>
                <div className='sticky-top'>
                    <NavBar />
                </div>

                <div>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/about-us' element={<Base Com={About} Bottom={Blank} />} />
                        <Route path='/contact-us' element={<Contact />} />
                        <Route path='/tools/:col' element={<Tools />} />
                        <Route path='/technology' element={<Base Com={Technology} Bottom={Techs} />} />
                        <Route path='/faqs' element={<Base Com={Faqs} Bottom={Blank} />} />
                        <Route path='/products/:id' element={<Product />} />
                    </Routes>
                </div>

                <div>
                    <Footer />
                </div>
            </div>
        </>
    ) : (<> Not Fetched </>);
}

export default App;
