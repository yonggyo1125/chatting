import styled from 'styled-components';
import fontSizes from '../styles/fontSizes';

const OuterBox = styled.footer`
    background: #d5d5d5;
    height: 45px;
    position: fixed;
    width: 100%;
    left: 0;
    bottom: 0;
    text-align: center;
    color: #000;
    line-height: 45px;
    font-size: ${props => props.fontSize ? fontSizes[props.fontSize] : '1rem'}
`;

const Footer = () => {
    return (
        <OuterBox fontSize="medium">
            Chatting Service
        </OuterBox>
    )
};

export default Footer;