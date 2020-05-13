import styled from "styled-components";
import { shade } from 'polished';

export const Title = styled.h1`
font-size: 28px;
color: #3a3a3a;
`;

export const Form = styled.form`
    margin-top: 40px;
    max-width: 700px;
    display: flex;
    flex-direction: column;

    input {
        height: 40px;
        width: 320px;
        padding: 0 24px;
        border: 0px;
        border-radius: 5px 5px 5px 5px;
        color: '#a3a3a3';
        margin: 10px;

        &::placeholder{
            color: '#a8a8b3';
        }
    }

    input#telefone {
        width: 210px;
    }
    
    input#dtNascimento {
        width: 210px;
    }

    input#email {
        width: 200px;
    }

    hr {
        margin-left: 10px;
        margin-right: 25px;
        margin-bottom: 30px;
        margin-top: 30px;
    }

    button {
        width: 300px;
        margin-top: 20px;
        height: 45px;
        background: #57FF86;
        border-radius: 5px;
        border: 0px;
        color: white;
        font-weight: bold;
        transition: background-color 0.2s;
        align-self: center;

        &:hover {
            background: ${shade(0.2, '#57FF86')}
        }
    }
`;

export const Feed = styled.div`
    margin-top: 50px;
    max-width: 700px;

    /** Style after first element */
    a + a {
        margin-top: 16px;
    }

    strong {
        color: #3a3a3a;
        margin-right: 5px;
    }

    h3 {
        color: #3a3a3a;
        margin-left: 10px;
    }

    p {
        margin-left: 10px;
    }

    a {
        background: #fff;
        border-radius: 5px;
        width: 100%;
        padding: 24px;
        display: block;
        text-decoration: none;

        display: flex;
        align-items: center;
        transition: transform 0.2s;

        &:hover {
            transform: translateX(10px);
        }

        img {
        width: 44px;
        height: 44px;
        border-radius: 50%;
    }

    button {
        margin-left: 10px;
        color: white;
        background: #cacaca;
        border-radius: 5px;
        border: 0px;
        font-weight: bold;
        -webkit-transition: background-color 0.2s;
        transition: background-color 0.2s;
        width: 70px;
        height: 40px;
    }

    button#btn-delete {
        background: #ff5757;
    }

}
`;

export const ButtonSwitchAdmin = styled.div`
    margin-left: auto;
`;
