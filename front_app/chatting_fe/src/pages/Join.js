import { Navigate } from "react-router-dom";

const Join = () => {
    const isLogin = true;
    if (isLogin) {
        return <Navigate to="/" replace={true} />
    }

    return <h1>회원가입</h1>;
}

export default Join;