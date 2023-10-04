import { useParams } from "react-router-dom";

const Room = () => {
    const { roomNo } = useParams();
    return <h1>채팅방{roomNo}</h1>;
};

export default Room;