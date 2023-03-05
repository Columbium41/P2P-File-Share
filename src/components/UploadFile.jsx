import {Peer} from 'peerjs';
import { useNavigate } from 'react-router-dom';
import './UploadFile.css';

function UploadFile({ setPeer }) {
    let navigate = useNavigate();

    // Function that runs whenever the 'Create Room' button is created
    const createRoom = async () => {
        const newPeer = await new Peer();
        setPeer(newPeer);

        newPeer.on("open", () => {
            navigate(`/room/${newPeer._id}`);
        })
    }

    return (
        <div className="upload-file-container">
            {/* Create Room Button */}
            <button className="upload-file-button" onClick={createRoom}>
                <h2>Upload File</h2>
            </button>
        </div>
    )
}

export default UploadFile   ;