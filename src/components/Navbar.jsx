import './Navbar.css';

function Navbar() {
    return (
        <header className="navbar">
            {/* Navbar Links */}
            <ul className="links">
                <li>
                    <a href="" target="_blank">Home</a>
                </li>
                <li>
                    <a href="" target="_blank">About</a>
                </li>
                <li>
                    <a href="https://github.com/Columbium41/HackTheHill" target="_blank">Github</a>
                </li>
            </ul>
        </header>
    )
}

export default Navbar;