import React, { FormEvent, useState, useEffect } from 'react';
import { Title, Form, Feed } from './styles';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { Apartament } from '../../models/apartament.model';
import { FiEdit } from 'react-icons/fi';
import { FiDelete } from 'react-icons/fi';
import { FiPlusCircle } from 'react-icons/fi';
import { ToastContainer, toast } from 'react-toastify';


const Apartaments: React.FC = () => {
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
                serviceSetApartaments();
                toast.dark(`✔️ O apartamento ${number} foi adicionado com sucesso!`, {hideProgressBar: true,});
            });
        } catch (error) {
           
        }
    }

    function handleDeleteApartament(id:number) {
        
        try {
             api.delete(`apartaments/${id}`).then((response) => {
                toast.dark('🥺 O apartamento foi excluído!', {hideProgressBar: true,});
                serviceSetApartaments();
             });
        } catch (error) {
            toast.error('🥺 Não foi possível excluir o apartamento!', {hideProgressBar: true,});
        }
    }

    /** Generic function to search for apartments */
    function serviceSetApartaments() {
        api.get("apartaments").then((response) => {
            setApartaments(response.data);
        });
    }

    function handleHistoryBack() {
        window.history.back();
    }

    return (
        <>
        <Title>Cadastro de apartamento.</Title>

        <Form onSubmit={handleAddApartament}>
            <div>
                <input
                value={block}
                onChange={(e) => setNewBlock(e.target.value)} 
                placeholder="Bloco" required/>

                <input
                type="number" 
                value={number}
                onChange={(e) => setNewNumber(e.target.value)} 
                placeholder="Número" required/>
            </div>
            <div>
                <button id="btn-back" onClick={(e) => handleHistoryBack()}>Voltar</button>
                <button type="submit">Cadastrar</button>
            </div>
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
                <Link id="link" to={{pathname: `Residents/${apartament.number}`}}>
                <FiPlusCircle size={20} />
                <span> Cadastrar</span>
                </Link>
                
                <Link id="link" to={{pathname: `edit-apartament/${apartament.id}/${apartament.number}/${apartament.block}`}}>
                <FiEdit size={20} />
                <span> Editar</span>
                </Link>

                <Link onClick={(e) => handleDeleteApartament(apartament.id)} id="link" to={{pathname: ''}}>  
                <FiDelete onClick={(e) => handleDeleteApartament(apartament.id)} size={20} />
                <span> Deletar</span>
                </Link>
            </a>
            ))} 
        </Feed>
        </>
    );
}

export default Apartaments;

