import './Room.css';
import {Peer} from 'peerjs';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import download from 'downloadjs';

function Room({ peer }) {
    const peerId = useParams().id;
    const [otherPeer, setOtherPeer] = useState(null);
    const [downloadedFile, setDownloadedFile] = useState(null);
    const [fileName, setFileName] = useState('');

    const fileChunks = [];
    var fileSize=999;

    useEffect(() => {
        if (peer !== null) {
            // Set other peer
            peer.on('connection', function(conn) {
                console.log("connected to " + conn.peer);
                setOtherPeer(conn.peer);
            });
        }
        // Watcher entered the lobby, create new peer and connect
        else {
            peer = new Peer();
            peer.on("open", () => {
                setOtherPeer(peer.connect(peerId));
            });

        }
    }, [peer])

    useEffect(() => {
        if (otherPeer !== null) {
            otherPeer.on('data', (data) => {
                if (data.type === "size") {
                    fileSize = data.size;
                }
                else if (data.fileName) {
                    setFileName(data.fileName);
                } else {
                    fileChunks.push(data);
                    if (fileSize !== null && fileChunks.length === fileSize) {
                        const file = new Blob(fileChunks);
                        setDownloadedFile(file);
                    }
                }
            });
        }
    }, [otherPeer]);

    return (
        <div className="room">
                <h2>Room</h2>

                <button className="download-button" onClick={() => {
                    if (downloadedFile !== null) {
                        download(downloadedFile, fileName);
                    }
                }}>
                    Download
                </button>

                <div>
                    <p>File Name</p>    
                    <progress value="0" max="100"></progress>
                </div>
        </div>
    )
}

export default Room;