import { useNavigate } from 'react-router-dom';
import './CreateRoom.css';

function CreateRoom() {
    // Function that runs whenever the 'Create Room' button is created
    let navigate = useNavigate();
    const createRoom = () => {
        console.log("Clicked Created Room");
        navigate("/room");
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