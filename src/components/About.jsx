import './About.css';
import {Peer} from 'peerjs';
import {useEffect, useState, useRef} from 'react';

function About() {
    const [id, setId] = useState("");
    const [peer, setPeer] = useState(null);
    const [cPeer, setCpeer] = useState(null);
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
            <h2>About</h2>
            <p>
                WatchParty is a web application that allows users to host/join a room where people can
                screenshare their screens. This web application was made during&nbsp;
                <a href="https://hackthehill.com/" target="_blank" className="text-link">Hack the Hill</a>, an annual
                hackathon held at the University of Ottawa.
            </p>
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

export default About;