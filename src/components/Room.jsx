import './Room.css';
import {Peer} from 'peerjs';
import {useEffect} from 'react';
import { useParams } from 'react-router-dom';

function Room({ peer }) {
    const peerId = useParams().id;

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
                peer.connect(peerId);
                setOtherPeer(peerId);
                console.log(peer);
            });
        }
    }, [peer])

    return (
        <div className="room">
            <h2>Room</h2>

            <button className="download-button" onClick={() => {}}>
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