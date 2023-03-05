import {Peer} from 'peerjs';
import './UploadFile.css';

function UploadFile({ peer, setPeer, file, setFile, generatedLink, setGeneratedLink }) {
    // Function that runs whenever the 'Create Room' button is created
    const createRoom = () => {
        if (peer === null && file !== null && !generatedLink) {
            const newPeer = new Peer();
            setPeer(newPeer);

            newPeer.on("open", () => {
                setGeneratedLink(true);
            })

            newPeer.on("connection", (conn) => {
                console.log("connected to ", conn.peer);
            });
        }
    }

    return (
        <div className="upload-file-container">
            <label htmlFor="file-upload" id="upload-file-button">Upload File</label>
            <input 
              type="file" 
              id="file-upload" 
              hidden 
              onChange={(e) => {setFile(e.target.files[0]);}} 
              disabled={generatedLink} 
            />
            {file !== null && <p>{`${file.name} - ${file.size / 1000}Kb`}</p>}
            {file === null && <p>No File Chosen.</p>}

            <button className="generate-link" onClick={() => {createRoom()}}>Generate Link</button>

            {generatedLink && peer._id !== null &&
            <div>
                <p>{`Share this link: https://hth-watchparty.netlify.app/room/${peer._id}`}</p>
            </div>}
        </div>
    )
}

export default UploadFile;