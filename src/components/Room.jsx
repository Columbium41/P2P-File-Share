import './Room.css';
import {Peer} from 'peerjs';
import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

function Room({ peer }) {
    const peerId = useParams().id;

    const [otherPeer, setOtherPeer] = useState('');

    useEffect(() => {
        if (peer !== null) {
            // Set other peer
            peer.on('connection', function(conn) {
                console.log("connected to " + conn.peer);
                setOtherPeer(conn.peer);
            });

            // Answer call and listen for stream event
            peer.on('call', function(call) {
                call.answer();
                console.log(call);
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
        <div className="about text-section">
            <h2>Room</h2>
            <p>
                Share this Link:&nbsp;
                {`http://localhost:5173/${peerId}`}
            </p>
        </div>
    )
}

export default Room;