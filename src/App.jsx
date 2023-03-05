import './App.css'
import Navbar from './components/Navbar';
import AppRoutes from './components/AppRoutes';
import Footer from './components/Footer';
import { BrowserRouter as Router } from 'react-router-dom'; 
import { useState } from "react";

function App() {
  const [peer, setPeer] = useState(null);
  const [file, setFile] = useState(null);
  const [generatedLink, setGeneratedLink] = useState(false);

  return (
    <div className="App">
      <Router>
        {/* Navbar */}
        <Navbar></Navbar>

        {/* Main Content */}
        <AppRoutes peer={peer} setPeer={setPeer} file={file} setFile={setFile} generatedLink={generatedLink} setGeneratedLink={setGeneratedLink} ></AppRoutes>

        {/* TODO: Add Footer */}
        <Footer></Footer>
      </Router>
    </div>
  )
}

export default App
