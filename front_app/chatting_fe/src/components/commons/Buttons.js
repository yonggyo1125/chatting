import styled, {css} from 'styled-components';

export const StyleButton = styled.button`
    width: ${props => props.width || '300px'};
    height: 50px;
    background: ${props => props.bg || 'black'};
    border: 0;
    color: #fff;

    ${props => props.border && css`
      border: 10px solid blue;
      border-radius: 5px;
    `}

    ${props => props.margin && css`
      margin: ${props.margin};
    `}

    &:hover {
      background: gray;
    }

    i {
      font-size: 2rem;
      color: orange;
    }
`;