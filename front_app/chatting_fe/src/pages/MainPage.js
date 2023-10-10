import { Navigate } from "react-router-dom";

const MainPage = () => {
    return <Navigate to="/room" replace={true} />
};

export default MainPage;