import { useCallback, useState } from 'react';
import ErrorMessage from '../commons/ErrorMessage';
import { TextBox } from '../commons/InputStyle';
import { StyleButton } from '../commons/Buttons';

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
            <TextBox type="text" align="center" placeholder="닉네임 입력" value={nickNm} onChange={handleChange} />
            <StyleButton type="button" onClick={handleClick} width='100%' margin="10px 0">방 입장하기</StyleButton>
            {message && <ErrorMessage>{message}</ErrorMessage>}
        </>
    )
};

export default NickNmForm;