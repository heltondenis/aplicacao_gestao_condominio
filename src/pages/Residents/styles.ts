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
        height: 45px;
        margin-top: 20px;
        background: #57FF86;
        border-radius: 5px;
        border: 0px;
        color: white;
        font-weight: bold;
        transition: background-color 0.2s;
        align-self: center;
        margin-left: 25px;

        &:hover {
            background: ${shade(0.2, '#57FF86')}
        }
    }

    button#btn-back {
        background: #cacaca;
    }
`;


export const Feed = styled.div`
    margin-top: 50px;
    max-width: 700px;

    /** Style after first element */
    a + a {
        margin-top: 16px;
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

    div {
        margin-left: 16px;

        strong {
            font-size: 20px;
            color: '#3D3D4D';
        }
        
        h3 {
            color: #3a3a3a;
        }

        p {
            font-size: 18px;
            color: '#A8A88B3';
            margin-top: 4px;
        }
        
        b {
            color: #3a3a3a;
        }
    }

    button {
        margin-left: auto;
        color: white;
        background: #57FF86;
        border-radius: 5px;
        border: 0px;
        font-weight: bold;
        -webkit-transition: background-color 0.2s;
        transition: background-color 0.2s;
        width: 130px;
        height: 40px;
    }

    input.form-check-input {
        top: 0;
        left: 0;
        height: 20px;
        width: 20px;
        margin-top: 5px;
        background-color: #eee;
        border-radius: 50%;
    }

    button#btn-delete {
        background: #ff5757;
        margin-left: 6px;
    }
    
    button#btn-edit {
        background: #cacaca;
        margin-right: 5px;
    }

    span#span-adm {
        margin-top: 2px;
    }
    
    a#link {
        padding: 0;
        margin: 0;
        vertical-align: baseline;
        list-style: none;
        border: 0;
        width: max-content;
        margin: auto;
        color: #3a3a3a;

        &:hover {
            transform: translateX(0px);
        }

        span {
            margin-left: 5px;
        }
    }
}
`;

export const ButtonSwitchAdmin = styled.div`
    margin-left: auto;
`;
