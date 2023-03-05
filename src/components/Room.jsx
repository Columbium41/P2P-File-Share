import './Room.css';
import {Peer} from 'peerjs';
import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import download from 'downloadjs';

function Room({ peer }) {
    const peerId = useParams().id;
    const [otherPeer, setOtherPeer] = useState(null);

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
            console.log(otherPeer);
            otherPeer.on('data', (data) => {
                download(new File([data], "download"));
                // const file = new Blob([data]);
                // console.log('recieved');
                // download(file);
            });
        }
    }, [otherPeer]);

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