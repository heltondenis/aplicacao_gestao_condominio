import React, { FormEvent, useState, useEffect } from 'react';
import { Title, Form } from './styles';
import { useParams } from 'react-router-dom';
import api from '../../../services/api';
import { Apartament } from '../../../models/apartament.model';


const EditApartament: React.FC = (props) => {
    let { number, block, id } = useParams();
    const [newBlock, setNewBlock] = useState('');
    const [newNumber, setNewNumber] = useState('');
    const [apartaments, setApartaments] = useState<Apartament[]>([]);

    async function handleEditApartament(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    
        try {
            api.put(`apartaments/${number}`, { block: newBlock, number: newNumber, id: id })
            .then(res => {  
                serviceSetApartaments();
                window.history.back()
            });
        } catch (error) {
            
        }
    }

    function handleHistoryBack() {
        window.history.back()
    }

    /** Generic function to search for apartments */
    function serviceSetApartaments() {
        api.get(`apartaments/${number}`).then((response) => {
            setApartaments(response.data.data);
        });
    }

    return (
        <>
        <Title>Você está editando o apartamento <span>número {number}</span>,<br></br> <span>bloco {block}</span>.</Title>
        
        <Form onSubmit={handleEditApartament}>
            <div>
                <input
                type="number" 
                value={newNumber}
                onChange={(e) => setNewNumber(e.target.value)} 
                placeholder="Alterar número" required/>

                <input
                value={newBlock}
                onChange={(e) => setNewBlock(e.target.value)} 
                placeholder="Alterar bloco" required/>
            </div>
            <hr />  
            <div>
                <button id="btn-back" onClick={(e) => handleHistoryBack()}>Voltar</button>
                <button type="submit">Alterar</button>
            </div>
        </Form>
        </>
    );
}

export default EditApartament;

