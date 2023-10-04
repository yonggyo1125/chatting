import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MdHome } from 'react-icons/md';
import fontSizes from '../styles/fontSizes';

const OuterBox = styled.header`
    display: flex;
    justify-content: space-between;
    background: #000;
    color: #fff;
    height: 50px;
    align-items: center;
    padding: 0 15px;
    * {
        color: #fff;
        font-size: ${props => props.fontSize ? fontSizes[props.fontSize] : '1rem'};
    }
    .btns {
        a {
            border: 1px solid #fff;
            border-radius: 5px; 
            padding: 5px 10px;
            transition: all 0.5s;
        }
        a+a { 
            margin-left: 5px; 
        }
        a:hover {
            background: #fff;
            color: #000;
        }
    }
    
`;

const Header = () => {
    return (
        <OuterBox fontSize="medium">
            <Link to="/"><MdHome /></Link>
            
            <div className="btns">
                <Link to="/room">방 목록</Link>
                <Link to="/join">회원가입</Link>
                <Link to="/login">로그인</Link>
            </div>
        </OuterBox>
    );
};

export default Header;