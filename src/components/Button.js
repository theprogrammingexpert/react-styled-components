import styled, {css} from 'styled-components';


export const ButtonContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
`;


export const Button = styled.button`
    outline: none;
    border: .15rem solid #FF4754;

    ${
        props => props.primary ? 
        css`
            background: #FF4754;
            color: #040404;
        `
        :
        css`
            background: transparent;
            color: #FF4754;
        `
    }

    font-size: 1rem;
    user-select: none;

    padding: .8rem 1.8rem;
    border-radius: .2rem;

    transition: opacity .2s;

    &:hover {
        opacity: .4;
        cursor: pointer;
    }
`;