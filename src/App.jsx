import './App.css'
import Navbar from './components/Navbar';
import AppRoutes from './components/AppRoutes';
import Footer from './components/Footer';
import { BrowserRouter as Router } from 'react-router-dom'; 
import { useState } from 'react';

function App() {
  const [peer, setPeer] = useState(null);

  return (
    <div className="App">
      <Router>
        {/* Navbar */}
        <Navbar></Navbar>

        {/* Main Content */}
        <AppRoutes peer={peer} setPeer={setPeer}></AppRoutes>

        {/* TODO: Add Footer */}
        <Footer></Footer>
      </Router>
    </div>
  )
}

export default App
