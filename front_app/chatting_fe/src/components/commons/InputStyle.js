import styled from 'styled-components';

export const TextBox = styled.input`
    height: 45px;
    border: 1px solid #ccc;
    border-radius: 3px; 
    padding: 0 10px;
    width: 100%;
    text-align: ${props => props.align || 'left'};
`;