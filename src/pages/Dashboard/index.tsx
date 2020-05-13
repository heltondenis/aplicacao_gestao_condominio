import React, { useState, FormEvent } from 'react';
import { Title, Form, Feed } from './styles';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';
import { Apartament } from '../../models/apartament.model';

const Dashboard: React.FC = () => {
    const [newApartament, setNewApartament] = useState('');
    const [apartaments, setApartaments] = useState<Apartament[]>([]);
    
    async function handleAddApartament(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
     
        const responseNewApartament = await api.get(`apartaments/${newApartament}`);
        const apartament = responseNewApartament.data.data;
        
        setApartaments([apartament]);
        setNewApartament('');
       
    }

    return (
        <>
        <Title>Encontre apartamentos e <br/> moradores.</Title>

        <Form onSubmit={handleAddApartament}> 
            <input
            value={newApartament}
            onChange={(e) => setNewApartament(e.target.value)} 
            placeholder="Busque pelo número do apartamento..." />
            <button type="submit">Buscar</button>
            
            <Link to="Apartaments">
                <button id="button-cadastrar" >Cadastrar</button>
            </Link>
        </Form>

        <Feed>
            {apartaments.map(apartament => (
            <a key={apartament.id}>
                <img src="https://images.vexels.com/media/users/3/157612/isolated/preview/b8c07826c517b2acde8e31979b7a0529---cone-de-apartamento-alto-by-vexels.png" alt="" />
                <div>
                    <h3>Apartamento {apartament.number}</h3>
                    <p>Bloco {apartament.block}</p>
                </div>
                <FiChevronRight size={20} />
            </a>
            ))} 
        </Feed>
        </>
    );
}

export default Dashboard;

