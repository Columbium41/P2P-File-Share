import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateRoom from "./CreateRoom";
import About from "./About";

function AppRoutes() {
    return (
        <main>
            <Routes>
                {/* Home Page */}
                <Route exact path="/" element={<CreateRoom />} />

                {/* About Page */}
                <Route exact path="/about" element={<About />} />

                {/* TODO: Add room page */}
                <Route exact path="/room" element={<></>} />

                {/* TODO: Add 404 page */}
                <Route path="*" element={<></>} />
            </Routes>
        </main>
    )
}

export default AppRoutes;