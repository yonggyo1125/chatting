import { useEffect, useState } from "react";
import { getRooms } from "../api/chatting";
import ErrorMessage from '../components/commons/ErrorMessage';

const Rooms = () => {
    const [rooms, setRooms] = useState([]);
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getRooms()
            .then((data) => {
                console.log(data);
                setRooms(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setMessage("방목록 조회 실패...");
                setLoading(false);
            });
    }, []);

    let lis = null;
    if (rooms && rooms.length > 0) {
        lis = rooms.map(r => (<li key={r.roomNo}>{r.roomNm}</li>));
    }
    
    return (
        <>
           {message && <ErrorMessage>{message}</ErrorMessage>}
           { loading && rooms.length === 0 && <div>로딩중....</div> }
           <ul>
                {lis}
            </ul>
        </>
    );
};

export default Rooms;