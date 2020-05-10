import React from 'react';
import { Title, Form, Feed } from './styles';
import { FiChevronRight } from 'react-icons/fi';

const Dashboard: React.FC = () => {
    return (
        <>
        <Title>Encontre apartamentos e <br/> moradores.</Title>

        <Form>
            <input placeholder="Faça sua busca aqui..." />
            <button type="submit">Buscar</button>
            <button id="button-cadastrar" type="submit">Cadastrar</button>
        </Form>

        <Feed>
            <a href="teste">
                <img src="https://images.vexels.com/media/users/3/157612/isolated/preview/b8c07826c517b2acde8e31979b7a0529---cone-de-apartamento-alto-by-vexels.png" alt="" />
                <div>
                    <strong>Apartamento 01</strong>
                    <p>xxx</p>
                </div>
                <FiChevronRight size={20} />
            </a>
            <a href="teste">
                <img src="https://images.vexels.com/media/users/3/157612/isolated/preview/b8c07826c517b2acde8e31979b7a0529---cone-de-apartamento-alto-by-vexels.png" alt="" />
                <div>
                    <strong>Apartamento 01</strong>
                    <p>xxx</p>
                </div>
                <FiChevronRight size={20} />
            </a>
        </Feed>
        </>
    );
}

export default Dashboard;

