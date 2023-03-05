import './Room.css';
import {Peer} from 'peerjs';
import {useEffect, useState, useRef} from 'react';

function Room() {
    const [id, setId] = useState("");
    const [peer, setPeer] = useState(null);
    const [cPeer, setCpeer] = useState([]);
    const videoRef = useRef(null);

    useEffect(() => {
        setPeer(new Peer());
        console.log(peer);
    }, [])

    useEffect(() => {
        if (peer !== null) {
            peer.on('open', function(id) {
                console.log('My peer ID is: ' + id);
            });
            peer.on('connection', function(conn) {
                setCpeer(conn.peer);
                // console.log("connected to " + conn.peer);
                // console.log(conn);
            });
            peer.on('call', function(call) {
                call.answer();
                // console.log("works");
                console.log(call);
                call.on('stream', function(stream) {
                    // `stream` is the MediaStream of the remote peer.
                    // Here you'd add it to an HTML video/canvas element.
                    console.log(stream);
                    videoRef.current.srcObject = stream;
                  });
            });
            console.log("set peer connect");
        }
    }, [peer])

    return (
        <div className="about text-section">
            <h2>Room</h2>
            <input onChange={e => setId(e.target.value)} value={id}></input>
            <button onClick={() => {
                peer.connect(id);
                setCpeer(id);
            }}>connect</button>
            <video ref={videoRef}></video>
            <button onClick={ async () => {
                let mediaStream = await navigator.mediaDevices.getDisplayMedia({
                    audio: true,
                    video: true
                });
                videoRef.current.srcObject = mediaStream;
                peer.call(cPeer, mediaStream);
            }}>share screen</button>
        </div>
    )
}

export default Room;