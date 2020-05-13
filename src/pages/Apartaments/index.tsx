import React, { FormEvent, useState, useEffect } from 'react';
import { Title, Form, Feed } from './styles';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { Apartament } from '../../models/apartament.model';

const Repository: React.FC = () => {
    const [block, setNewBlock] = useState('');
    const [number, setNewNumber] = useState('');
    const [apartaments, setApartaments] = useState<Apartament[]>([]);
    
    useEffect(() => {
        api.get("apartaments").then((response) => {
            setApartaments(response.data);
        });
      }, []);

    async function handleAddApartament(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        
        try {
            api.post(`apartaments`, { block: block, number: number })
            .then(res => {  
                setNewBlock('');
                setNewNumber('');
                api.get("apartaments").then((response) => {
                    setApartaments(response.data);
                });
            });
        } catch (error) {
           
        }
    }

    return (
        <>
        <Title>Cadastro de apartamento.</Title>

        <Form onSubmit={handleAddApartament}>
            <div>
                <input
                value={block}
                onChange={(e) => setNewBlock(e.target.value)} 
                placeholder="Bloco" />

                <input
                type="number" 
                value={number}
                onChange={(e) => setNewNumber(e.target.value)} 
                placeholder="Número"/>
            </div>
                <button type="submit">Cadastrar</button>
            <hr />  
        </Form>

        <Title>Cadastrar moradores, escolha o apartamento.</Title>
        <Feed>
            {apartaments.map(apartament => (
            <a key={apartament.id}>
                <img src="https://images.vexels.com/media/users/3/157612/isolated/preview/b8c07826c517b2acde8e31979b7a0529---cone-de-apartamento-alto-by-vexels.png" alt="" />
                <div>
                    <h3>Apartamento{apartament.number}</h3>
                    <p>Bloco: {apartament.block}</p>
                </div>
                <Link to={{pathname: `Residents/${apartament.number}`}}>
                <button>Cadastrar</button>
                </Link>
                <button id="btn-delete">Excluir</button>
            </a>
            ))} 
        </Feed>
        </>
    );
}

export default Repository;

