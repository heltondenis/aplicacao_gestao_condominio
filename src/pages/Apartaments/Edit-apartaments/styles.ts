import styled from "styled-components";
import { shade } from 'polished';

export const Title = styled.h1`
font-size: 28px;
color: #3a3a3a;
    span {
        color: #ff5757;
    }
`;

export const Form = styled.form`
    margin-top: 40px;
    max-width: 700px;
    display: flex;
    flex-direction: column;

    input + input {
        margin-left: 25px;
    }

    input {
        height: 40px;
        width: 320px;
        padding: 0 24px;
        border: 0px;
        border-radius: 5px 5px 5px 5px;
        color: '#a3a3a3';

        &::placeholder{
            color: '#a8a8b3';
        }
    }

    hr {
        margin-left: 10px;
        margin-right: 25px;
        margin-bottom: 30px;
        margin-top: 30px;
    }

    button {
        width: 300px;
        height: 45px;
        background: #57FF86;
        border-radius: 5px;
        border: 0px;
        color: white;
        font-weight: bold;
        transition: background-color 0.2s;
        align-self: center;
        margin-left: 20px;

        &:hover {
            background: ${shade(0.2, '#57FF86')}
        }
    }

    button#btn-back {
        background: #cacaca;
    }
`;
