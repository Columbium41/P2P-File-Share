import {useRef, useState} from 'react';    

const servers = {
    iceServers: [
      {
        urls: ['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302'],
      },
    ],
    iceCandidatePoolSize: 10,
};

function Room () {
    // const [videoSrc, setSrc] = useState();
    const ref = useRef(null);

    const handleClick = async () => {
        console.log(ref.current);
        const stream = await navigator.mediaDevices.getDisplayMedia(
            {
                audio: true,
                video: true
            }
        )
        console.log(stream);
        ref.current.srcObject = stream;
    }

    return (
        <div>
            <button onClick={handleClick}>Start</button>
            {/* <button onClick={() => setSrc()}>Stop</button> */}
            <video width={400} height={400} ref={ref} autoPlay></video>
        </div>
    );
}
export default Room