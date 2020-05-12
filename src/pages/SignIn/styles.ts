import styled from "styled-components";
import { shade } from 'polished';

export const Title = styled.h1`
font-size: 38px;
color: #3a3a3a;
`;

export const Form = styled.form`
    margin-top: 40px;
    max-width: 700px;
    display: flex;
    flex-direction: column;

    input {
        height: 50px;
        padding: 0 24px;
        border: 0px;
        border-radius: 5px 0 0 5px;
        color: '#a3a3a3';
        margin: 10px;

        &::placeholder{
            color: '#a8a8b3';
        }
    }

    button {
        margin-left: 10px;
        height: 45px;
        background: #57FF86;
        border-radius: 5px;
        border: 0px;
        color: white;
        font-weight: bold;
        transition: background-color 0.2s;

        &:hover {
            background: ${shade(0.2, '#57FF86')}
        }
    }
`;