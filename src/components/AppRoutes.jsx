import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateRoom from "./CreateRoom";

function AppRoutes() {
    return (
        <main>
            <Routes>
                {/* Home Page */}
                <Route exact path="/" element={<CreateRoom />} />

                {/* TODO: Add About, Rooms, and 404 pages */}
            </Routes>
        </main>
    )
}

export default AppRoutes;