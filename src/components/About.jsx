import './About.css';

function About() {
    return (
        <div className="about text-section">
            <h2>About</h2>
            <p>
                FileShare is a web application that allows users to share files using WebRTC. This web application was made during&nbsp;
                <a href="https://hackthehill.com/" target="_blank" className="text-link">Hack the Hill</a>, an annual
                hackathon held at the University of Ottawa.
            </p>
        </div>
    )
}

export default About;