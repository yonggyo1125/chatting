import { useEffect, useCallback, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import Title from "../components/commons/Title";
import NickNmForm from "../components/commons/chatting/NickNmForm";
import { getRoom, registerMessage } from "../api/chatting";


let webSocket;
const Room = () => {
    const inputEl = useRef();
    const buttonEl = useRef();

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
    const [ messages, setMessages] = useState([]);

    

    useEffect(() => {
        webSocket = new WebSocket(process.env.REACT_APP_WS_URL);
        webSocket.onopen = (e) => {
            console.log("연결 성공");
        };
        
        webSocket.onclose = (e) => {
            console.log("연결 종료");
        };

        getRoom(roomNo)
            .then((res) => setRoomInfo(res.data))
            .catch((err) => console.error(err));
    }, []);

    useEffect(() => {
        if (webSocket) {
            webSocket.onmessage = (message) => {
                const data = JSON.parse(message.data);
                if (data.roomNo === roomNo) { // 동일한 채팅 방에서만 메세지 출력
                    setMessages(messages.concat(data));
                }
            };
        }
    }, [webSocket, messages])
    

    
   const handleChange = useCallback((e) => {
        const params = {roomNo, nickNm : roomInfo.nickNm, message: e.target.value};
        setChatData(params);
        
        if (e.keyCode === 13) { // 엔터키 클릭시 
           buttonEl.current.click();
        }
   }, [roomInfo]);
   
   const handleClick = useCallback(() => {
        if (!webSocket) return;
        webSocket.send(JSON.stringify(chatData));
        inputEl.current.value = "";
        inputEl.current.focus();
        registerMessage(chatData); // 채팅 기록 서버 DB에 기록
   }, [chatData]);

   if (roomInfo && !roomInfo.nickNm) {
        return <NickNmForm roomInfo={roomInfo} setRoomInfo={setRoomInfo}/>
    }

   const lis = messages.map((m, index)=> (<li key={index}>[{m.nickNm}]{m.message}</li>))
    return (
        <>  
            {roomInfo && <Title>{roomInfo.roomNm}({roomInfo.max ? `최대${roomInfo.max}명`: '무제한'})</Title>}
            <ul>{lis}</ul>
            <input type="text" onKeyUp={handleChange} ref={inputEl} />
            <button type="button" onClick={handleClick} ref={buttonEl}>전송</button>
        </>
    );
};

export default Room;