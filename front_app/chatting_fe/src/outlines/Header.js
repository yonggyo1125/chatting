import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MdHome } from 'react-icons/md';

const OuterBox = styled.header`
    display: flex;
    justify-content: space-between;
    
`;

const Header = () => {
    return (
        <OuterBox>
            <Link to="/"><MdHome /></Link>
            
            <div className="btns">
                <Link to="/rooms">방 목록</Link>
                <Link to="/join">회원가입</Link>
                <Link to="/login">로그인</Link>
            </div>
        </OuterBox>
    );
};

export default Header;