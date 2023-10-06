/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useCallback } from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getRooms } from "../api/chatting";
import ErrorMessage from '../components/commons/ErrorMessage';
import Title from '../components/commons/Title';
import { StyleButton } from "../components/commons/Buttons";
import { registerRoom } from "../api/chatting";

const RoomBox = styled.li`
    box-shadow: 2px 2px 5px #212121;
    padding: 10px 20px;
    border-radius: 5px;
    a {
        display: flex;
        justify-content: space-between;
    }
`;

const FormBox = styled.form`
    input {
        display: block;
        border: 1px solid #d5d5d5;
        height: 45px;
        border-radius: 3px;
        margin-bottom: 5px;
        width: 100%;
        text-align: center;
    }
    
    input:focus {
        border-color: #000; 
    }

    button { 
        margin-bottom: 20px;
    }
`;

const Rooms = () => {
    const [form, setForm] = useState({roomNm: '', max : ''})
    const [rooms, setRooms] = useState([]);
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(true);

    const updateRooms = useCallback(() => {
        getRooms()
            .then((res) => {
                setRooms(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setMessage("방목록 조회 실패...");
                setLoading(false);
            });
    }, [])

    useEffect(() => updateRooms(), []);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        try {
            if (!form.roomNm) {
                e.target.roomNm.focus();

                throw new Error("방 이름을 입력하세요.");
            }

            registerRoom(form)
                .then(() => {
                    setForm({roomNm: '', max: ''});
                    updateRooms();
                })
                .catch((err) => console.error(err));
                
        } catch(err) {
            setMessage(err.message);
        }

    },[]);

    const handleChange = useCallback((e) => {
        form[e.target.name] = e.target.value.trim();
        setForm({ ...form});
    }, []);

    let lis = null;
    if (rooms && rooms.length > 0) {
        lis = rooms.map(r => {
            const link = `/room/${r.roomNo}`;
            return (
                <RoomBox key={r.roomNo}>
                    <Link to={link}>
                        <div className='left'>{r.roomNm}</div>
                        <div className='right'>최대 인원수 : {r.max}명</div>
                    </Link>
                </RoomBox>)
            });
    }
    
    return (
        <>
            <Title>방 등록</Title>
           <FormBox autoComplete="off" onSubmit={handleSubmit}>
            <input type="text" name="roomNm" value={form.roomNm} placeholder="방이름 입력" onChange={handleChange} />
            <input type="number" name="max" value={form.max} placeholder="최대 인원수" onChange={handleChange} />
            <StyleButton type='submit' width="100%">등록하기</StyleButton>
           </FormBox>

           {message && <ErrorMessage>{message}</ErrorMessage>}
           { loading && rooms.length === 0 && <div>로딩중....</div> }
            <Title>방 목록</Title>
            <ul>
                {lis}
            </ul>
        </>
    );
};

export default Rooms;