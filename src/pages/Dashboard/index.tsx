import React, { useState, FormEvent } from 'react';
import { Title, Form, Feed } from './styles';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

interface Apartament {
    id: number,
    first_name: string,
    email: string
}

const Dashboard: React.FC = () => {
    const [newApartament, setNewApartament] = useState('');
    const [apartaments, setApartaments] = useState<Apartament[]>([]);
    
    async function handleAddApartament(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
       
        const responseNewApartament = await api.get(`users/${newApartament}`);
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
            <button id="button-cadastrar" type="submit">Cadastrar</button>
        </Form>

        <Feed>
            
            {apartaments.map(apartament => (
            <a key={apartament.id} href="teste">
                <img src="https://images.vexels.com/media/users/3/157612/isolated/preview/b8c07826c517b2acde8e31979b7a0529---cone-de-apartamento-alto-by-vexels.png" alt="" />
                <div>
                    <strong>{apartament.first_name}</strong>
                    <p>{apartament.email}</p>
                </div>
                <FiChevronRight size={20} />
            </a>
            ))} 
        </Feed>
        </>
    );
}

export default Dashboard;

