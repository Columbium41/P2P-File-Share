import {Peer} from 'peerjs';
import './UploadFile.css';
import download from 'downloadjs';

function UploadFile({ peer, setPeer, file, setFile, generatedLink, setGeneratedLink }) {
    // Function that runs whenever the 'Create Room' button is created
    const createRoom = () => {
        if (peer === null && file !== null && !generatedLink) {
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
    
                    conn.on("open", () => {
                        file.arrayBuffer().then(buffer => {
                            const chunksize = 8 * 1024;
                            conn.send({size: Math.ceil(buffer.byteLength / chunksize), type: "size"});
                            console.log(buffer.byteLength);
                            conn.send({fileName: file.name});
                            while (buffer.byteLength) {
                                const chunk = buffer.slice(0, chunksize);
                                // if (chunksize > buffer.byteLength) {
                                //     conn.send(buffer.slice(0, buffer.byteLength));
                                //     break;
                                // } else {
                                buffer = buffer.slice(chunksize, buffer.byteLength);
                                console.log(buffer.byteLength);
                                console.log("sending chunks");
                                conn.send(chunk);
                                // }
                            }
                        })

                        // conn.send({
                        //     file: blob,
                        //     filename: file.name,
                        //     filetype: file.type
                        //   })
                        // console.log(file);
                        // conn.send(file);
                    })
                });
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