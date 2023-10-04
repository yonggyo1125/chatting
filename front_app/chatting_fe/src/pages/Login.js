import { useNavigate } from 'react-router-dom';

const Login = () => {
    const isLogin = true;
    const navigate = useNavigate();
    if (isLogin) {
        navigate("/");
    }

    return <h1>로그인</h1>;
};

export default Login;