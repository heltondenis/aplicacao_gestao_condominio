import styled, {css} from 'styled-components';
import { shade } from 'polished';

interface FormProps {
    hasError: boolean;
}

export const Title = styled.h1`
    font-size: 28px;
    color: #3a3a3a;
`;

export const Form = styled.form<FormProps>`
    margin-top: 40px;
    max-width: 700px;
    display: flex;

    input {
        flex: 1;
        height: 50px;
        padding: 0 24px;
        border: 0px;
        border-radius: 5px 0 0 5px;
        color: '#a3a3a3';
        border: 2px solid #fff;
        border-right: 0;

        ${(props) => props.hasError && css`
            border-color: #c53030;
        `}

        &::placeholder{
            color: '#a8a8b3';
        }
    }

    button {
        width: 110px;
        height: 50px;
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

    #button-cadastrar{
        background: #FF5757;
        border-radius: 5px;
        border: 0px;
        color: white;
        font-weight: bold;
        transition: background-color 0.2s;

        &:hover {
            background: ${shade(0.2, '#FF5757')}
        }
    }
`;

export const Error = styled.span`
    display: block;
    color: #c53030;
    margin-top: 8px;
`;

export const Feed = styled.div`
    margin-top: 70px;
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

        p {
            font-size: 18px;
            color: '#A8A88B3';
            margin-top: 4px;
        }
    }

    svg {
        margin-left: auto;
        color: #cbcbd6;
    }
}
`;

export const Dialog = styled.div`
    h1 {
        color: #000000b8;
        margin-left: 10px;
        font-size: 20px;
        font-weight: bold;
    }

    span {
        font-size: 13px;
        font-weight: bold;
        color: #0000008c;
        margin-left: 10px;
    }   

    img {
        margin-top: 10px;
        width: 20px;
    }

    hr {
        margin-top: 5px;
        margin-bottom: 5px;
    }

    div#content-resident {
        margin-left: 9px;
    }

    hr#hr-resident {
        margin-right: 13px;
        color: red;
        bottom: 2px red;
        border-color: #1212121c;
    }

    h1#title-apartament {
        margin-top: -12px;
    }
   
    button {
        width: 251px;
        height: 30px;
        background: #57FF86;
        border-radius: 5px;
        border: 0px;
        color: white;
        font-weight: bold;
        -webkit-transition: background-color 0.2s;
        transition: background-color 0.2s;
        -webkit-align-self: center;
        -ms-flex-item-align: center;
        align-self: center;
        margin-left: 25px;
        margin-bottom: 10px;
        margin-top: 30px;

        &:hover {
            background: ${shade(0.2, '#57FF86')}
        }
    }

    .custom-ui {
        background: #F0F0F5;
        width: 300px;
        border-radius: 10px;
    }
}
`;
