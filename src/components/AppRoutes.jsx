import { Routes, Route } from "react-router-dom";
import UploadFile from "./UploadFile";
import About from "./About";
import NotFound from "./NotFound";
import Room from "./Room";

function AppRoutes({ peer, setPeer, file, setFile, generatedLink, setGeneratedLink }) {
    return (
        <main>
            <Routes>
                {/* Home Page */}
                <Route exact path="/" element={<UploadFile peer={peer} setPeer={setPeer} file={file} setFile={setFile} generatedLink={generatedLink} setGeneratedLink={setGeneratedLink} />} />

                {/* About Page */}
                <Route exact path="/about" element={<About />} />

                {/* TODO: Add room page */}
                <Route exact path="/room/:id" element={<Room peer={peer} />} />

                {/* TODO: Add 404 page */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </main>
    )
}

export default AppRoutes;