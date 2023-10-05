import { useEffect, useState } from "react";
import { getRooms } from "../api/chatting";
import ErrorMessage from '../components/commons/ErrorMessage';

const Rooms = () => {
    const [rooms, setRooms] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        getRooms()
            .then((data) => {
                console.log(data);
                setRooms(data)
            })
            .catch((err) => {
                console.error(err);
                setMessage("방목록 조회 실패...");
            });
    }, []);

    return (
        <>
           {message && <ErrorMessage>{message}</ErrorMessage>}
           
        </>
    );
};

export default Rooms;