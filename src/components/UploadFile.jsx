import { useState } from 'react';
import {Peer} from 'peerjs';
import { useNavigate } from 'react-router-dom';
import './UploadFile.css';

function UploadFile({ setPeer }) {
    const [fileChosen, setFileChosen] = useState('No File Chosen.');
     
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
            <label htmlFor="file-upload" id="upload-file-button">Upload File</label>
            <input type="file" id="file-upload" hidden onChange={(e) => {
                setFileChosen(`${e.target.files[0].name} - ${e.target.files[0].size / 1000}Kb`);
            }} />
             {fileChosen}
        </div>
    )
}

export default UploadFile   ;