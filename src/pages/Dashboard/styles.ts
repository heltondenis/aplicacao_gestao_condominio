import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
    font-size: 38px;
    color: #3a3a3a;
`;

export const Form = styled.form`
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
