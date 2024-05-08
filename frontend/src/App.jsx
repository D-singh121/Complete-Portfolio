import './App.css'
import { Header, Footer } from "./components/index.js";
import { Heropage, Projects, TechStack, Contact } from './pages/index.js'

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import MainContact from './pages/MainContact.jsx';

const App = () => {
  return (
    <>
      {/* <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Heropage />} />
          <Route path='/techstack' element={<TechStack />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='*' element={<Heropage />} />
          <Route path='/contact' element={<MainContact />} />
        </Routes>
        <Contact />
        <Footer />
      </Router> */}

      <div className='main'> 
        <Header />
        <Heropage />
        <TechStack />
        <Projects />
        <Contact />
        <Footer />
      </div>

    </>
  )
}

export default App;