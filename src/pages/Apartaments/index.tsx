import React from 'react';
import { Title, Form, Feed } from './styles';
import { Link } from 'react-router-dom';

const Repository: React.FC = () => {
    return (
        <>
        <Title>Cadastro de apartamento.</Title>

        <Form>
            <div>
                <input
                placeholder="Bloco" />
                <input placeholder="Número"/>
            </div>
                <button type="submit">Cadastrar</button>
            <hr />  
        </Form>

        <Title>Cadastrar moradores, escolha o apartamento.</Title>
        <Feed>
            <a>
                <img src="https://images.vexels.com/media/users/3/157612/isolated/preview/b8c07826c517b2acde8e31979b7a0529---cone-de-apartamento-alto-by-vexels.png" alt="" />
                <div>
                    <strong>Apartamento01</strong>
                    <p>Bloco 01</p>
                </div>
                <Link to="Residents">
                <button>Cadastrar</button>
                </Link>
            </a>
        </Feed>
        </>
    );
}

export default Repository;

