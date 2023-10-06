import { useEffect, useCallback, useState } from "react";
import { useParams } from "react-router-dom";
import Title from "../components/commons/Title";
import { getRoom } from "../api/chatting";

const Room = () => {
    const initialInfo = {
        roomNo : '',
        roomNm : '',
        max : ''
    };
    const { roomNo } = useParams();
    const { roomInfo, setRoomInfo } = useState(initialInfo);

    return (
        <>
            <Title>{roomInfo.roomNm}({roomInfo.max ? `최대${roomInfo.max}명`: '무제한'})</Title>
        </>
    );
};

export default Room;