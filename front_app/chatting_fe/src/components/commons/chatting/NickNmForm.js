import { useCallback, useState } from 'react';
import ErrorMessage from '../ErrorMessage';

const NickNmForm = ({ roomInfo, setRoomInfo }) => {
    const [message, setMessage] = useState('');
    const [nickNm, setNickNm] = useState('');

    const handleChange = useCallback((e) => {
        setNickNm(e.target.value);
    }, []);

    const handleClick = useCallback(() => {
        if (!nickNm || !nickNm.trim()) {
            setMessage("닉네임을 입력하세요.");
            return;
        }

        setRoomInfo({...roomInfo, nickNm })
    }, [nickNm]);
    return (
        <>
            <input type="text" placeholder="닉네임 입력" value={nickNm} onChange={handleChange} />
            <button type="button" onClick={handleClick}>방 입장하기</button>
            {message && <ErrorMessage>{message}</ErrorMessage>}
        </>
    )
};

export default NickNmForm;