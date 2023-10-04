import { useState } from 'react';
import ErrorMessage from '../components/commons/ErrorMessage';

const Login = () => {
    const [form, setForm] = useState({
        userId : '',
        userPw : '',
    });

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        form[e.target.name] = e.target.value;
        setForm({ ...form});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.userId.trim()) {
            setMessage("아이디를 입력하세요.");
            return;
        }

        if (!form.userPw.trim()) {
            setMessage("비밀번호를 입력하세요.");
            return;
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="userId" placeholder="아이디" onChange={handleChange} /><br />
            <input type="password" name="userPw" placeholder="비밀번호" onChange={handleChange} /><br />
            { message && <ErrorMessage>{message}</ErrorMessage>}
            <button type="submit">로그인</button>
        </form>
    )
};

export default Login;