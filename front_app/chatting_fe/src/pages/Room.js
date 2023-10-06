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

    const initialChatData = {
        nickNm : '',
        roomNo : '',
        message : '',
    };

    const { roomNo } = useParams();
    const [ roomInfo, setRoomInfo ] = useState(initialInfo);
    const [ chatData, setChatData] = useState(initialChatData);

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

   const handleChange = useCallback((e) => {
        setChatData({roomNo, nickNm : '', message: e.target.value});
   }, []);
   
   const handleClick = useCallback(() => {
        if (!webSocket) return;
        webSocket.send(JSON.stringify(chatData));
   }, []);

    return (
        <>  
            {roomInfo && <Title>{roomInfo.roomNm}({roomInfo.max ? `최대${roomInfo.max}명`: '무제한'})</Title>}
            <ul></ul>
            <input type="text" onChange={handleChange} />
            <button type="button" onClick={handleClick}>전송</button>
        </>
    );
};

export default Room;