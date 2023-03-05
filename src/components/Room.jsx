import './Room.css';
import {Peer} from 'peerjs';
import {useEffect, useState, useRef} from 'react';
import { useParams } from 'react-router-dom';

function Room({ peer }) {
    const peerId = useParams().id;

    const [otherPeer, setOtherPeer] = useState('');
    const videoRef = useRef(null);

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
                
                call.on('stream', function(stream) {
                    // `stream` is the MediaStream of the remote peer.
                    // Here you'd add it to an HTML video/canvas element.
                    console.log(stream);
                    videoRef.current.srcObject = stream;
                });
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
            <video ref={videoRef}></video>
            <button onClick={ async () => {
                let mediaStream = await navigator.mediaDevices.getDisplayMedia({
                    audio: true,
                    video: true
                });
                videoRef.current.srcObject = mediaStream;
                peer.call(otherPeer, mediaStream);
            }}>share screen</button>
        </div>
    )
}

export default Room;