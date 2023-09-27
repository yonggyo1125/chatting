import { Outlet } from "react-router-dom";

const Rooms = () => {
    return (
        <>
            <h1>방 목록</h1>
            <Outlet />
        </>
    );
};

export default Rooms;