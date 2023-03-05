import { useState } from 'react';
import {Peer} from 'peerjs';
import './UploadFile.css';
import download from 'downloadjs';

function UploadFile({ peer, setPeer }) {
    const [file, setFile] = useState(null);
    const [generatedLink, setGeneratedLink] = useState(false);
    const [otherPeer, setOtherPeer] = useState(null);
     
    // Function that runs whenever the 'Create Room' button is created
    const createRoom = () => {
        if (file !== null) {
            const newPeer = new Peer();
            setPeer(newPeer);

            newPeer.on("open", () => {
                setGeneratedLink(true);
                newPeer.on("connection", (conn) => {
                    console.log("connected to ", conn);
                    // file.arrayBuffer().then(buffer => {
                    //     conn.send(buffer);
                    //     console.log(buffer);
                    //     console.log('zent');
                    //     download(new Blob([buffer]));
                    // })
                    conn.on("error", (err) => {
                        console.log(err);
                    });
    
                    const blob = new Blob([file], { type: file.type })
                    conn.on("open", () => {
                        // conn.send({
                        //     file: blob,
                        //     filename: file.name,
                        //     filetype: file.type
                        //   })
                        console.log(file);
                        conn.send(file);
                    })
                });
            })

            newPeer.on("error", (err) => console.log(err));
        }
    }

    return (
        <div className="upload-file-container">
            {/* Create Room Button */}
            <label htmlFor="file-upload" id="upload-file-button">Upload File</label>
            <input type="file" id="file-upload" hidden onChange={(e) => {
                setFile(e.target.files[0]);
            }} />
            {file !== null && <p>{`${file.name} - ${file.size / 1000}Kb`}</p>}
            {file === null && <p>No File Chosen.</p>}

            <button className="generate-link" onClick={() => {createRoom()}}>Generate Link</button>

            {generatedLink && 
            <div>
                <p>{`Share this link: localhost:5173/room/${peer._id}`}</p>
            </div>}
        </div>
    )
}

export default UploadFile;