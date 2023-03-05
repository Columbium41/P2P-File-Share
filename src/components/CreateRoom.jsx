import { useState } from 'react';
import {Peer} from 'peerjs';
import { useNavigate } from 'react-router-dom';
import './CreateRoom.css';

function CreateRoom({ setPeer }) {
    let navigate = useNavigate();

    // Function that runs whenever the 'Create Room' button is created
    const createRoom = async () => {
        const newPeer = await new Peer();
        setPeer(newPeer);

        newPeer.on("open", () => {
            navigate(`/room/${newPeer._id}`);
        })
    }

    return (
        <div className="create-room-container">
            {/* Create Room Button */}
            <button className="create-room-button" onClick={createRoom}>
                <h2>Create Room</h2>
            </button>
        </div>
    )
}

export default CreateRoom;