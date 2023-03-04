import './App.css'
import Navbar from './components/Navbar';
import AppRoutes from './components/AppRoutes';

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar></Navbar>

      {/* Main Content */}
      <AppRoutes></AppRoutes>

      {/* TODO: Add Footer */}
    </div>
  )
}

export default App
