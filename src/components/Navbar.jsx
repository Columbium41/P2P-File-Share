import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <header className="navbar">
            {/* Navbar Links */}
            <ul className="links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <a href="https://github.com/Columbium41/HackTheHill" target="_blank">Github</a>
                </li>
            </ul>
        </header>
    )
}

export default Navbar;