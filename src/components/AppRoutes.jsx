import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateRoom from "./CreateRoom";
import Room from "./Room";

function AppRoutes() {
    return (
        <main>
            <Routes>
                {/* Home Page */}
                <Route exact path="/" element={<CreateRoom />} />
                <Route exact path="room" element={<Room />} />
                {/* TODO: Add About, Rooms, and 404 pages */}
            </Routes>
        </main>
    )
}

export default AppRoutes;