import './App.css'
import Navbar from './components/Navbar';
import AppRoutes from './components/AppRoutes';
import { BrowserRouter as Router } from 'react-router-dom'; 


function App() {
  return (
    <div className="App">
      <Router>
        {/* Navbar */}
        <Navbar></Navbar>

        {/* Main Content */}
        <AppRoutes></AppRoutes>

        {/* TODO: Add Footer */}
      </Router>
    </div>
  )
}

export default App
