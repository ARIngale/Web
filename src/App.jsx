import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Background from './components/Background'
import Home from './pages/Home'
import Events from './pages/Events'
import Board from './pages/Board'
import Blogs from './pages/Blogs'
import ContactUs from './pages/ContactUs'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="relative min-h-screen flex flex-col">
        <Background />
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/board" element={<Board />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App

