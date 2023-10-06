import { useEffect, useCallback, useState } from "react";
import { useParams } from "react-router-dom";
import Title from "../components/commons/Title";
import { getRoom } from "../api/chatting";

let webSocket;
const Room = () => {
    const initialInfo = {
        roomNo : '',
        roomNm : '',
        max : ''
    };
    const { roomNo } = useParams();
    const [ roomInfo, setRoomInfo ] = useState(initialInfo);
    
    useEffect(() => {
        webSocket = new WebSocket(process.env.REACT_APP_WS_URL);
        webSocket.onopen = (e) => {
            console.log("연결 성공");
        };
        
        webSocket.onclose = (e) => {
            console.log("연결 종료");
        };

        webSocket.onmessage = (data) => {
            console.log(data);
        };

        getRoom(roomNo)
            .then((res) => setRoomInfo(res.data))
            .catch((err) => console.error(err));
    }, [])

   
  

    return (
        <>  
            {roomInfo && <Title>{roomInfo.roomNm}({roomInfo.max ? `최대${roomInfo.max}명`: '무제한'})</Title>}
        </>
    );
};

export default Room;