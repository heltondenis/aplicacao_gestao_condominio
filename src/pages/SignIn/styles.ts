import styled from "styled-components";
import SignInBackground from "../../assets/logo.png";
import {shade} from 'polished';

export const Container = styled.div`
 height: 100vh;
 display: flex;
 align-items: stretch;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    place-content: center;

    width: 100%;
    max-width: 700px;

    form {
        margin:80px 0;
        width: 340px;
        text-align: center;

        h1 {
            margin-bottom: 24px;
        }

        input {
            background: #232129;
            border-radius: 10px;
            border: 2px solid #232129;
            padding: 16px;
            width: 100%;

            & + input {
                margin-top: 8px;
            }
        }

        button {
            background: grey;
            height: 56px;
            border-radius: 10px;
            border: 0;
            padding: 16px;
            color: white;
            width: 100%;
            font-weight: 500;
            margin-top: 16px;
            transition: background-color 0.2s;

            &:hover {
                background: ${shade(0.2, 'grey')}
            }
        }
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${SignInBackground}) no-repeat center;
    background-size: cover;
`;