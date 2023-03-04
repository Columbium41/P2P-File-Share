import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateRoom from "./CreateRoom";

function AppRoutes() {
    return (
        <main>
            <Router>
                {/* Home Page */}
                <Routes>
                    <Route exact path="/" element={<CreateRoom />} />
                </Routes>

                {/* TODO: Add About, Rooms, and 404 pages */}
            </Router>
        </main>
    )
}

export default AppRoutes;