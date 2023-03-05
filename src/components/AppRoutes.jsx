import { Routes, Route } from "react-router-dom";
import CreateRoom from "./CreateRoom";
import About from "./About";
import NotFound from "./NotFound";
import Room from "./Room";

function AppRoutes({ peer, setPeer }) {
    return (
        <main>
            <Routes>
                {/* Home Page */}
                <Route exact path="/" element={<CreateRoom setPeer={setPeer} />} />

                {/* About Page */}
                <Route exact path="/about" element={<About />} />

                {/* TODO: Add room page */}
                <Route exact path="/room/:id" element={<Room peer={peer} />} />

                {/* TODO: Add 404 page */}
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </main>
    )
}

export default AppRoutes;