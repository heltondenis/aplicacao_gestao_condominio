import React, { FormEvent, useState, useEffect } from 'react';
import { Title, Form } from './styles';
import { useParams } from 'react-router-dom';
import api from '../../../services/api';
import { Resident } from '../../../models/resident.model';
import { ToastContainer, toast } from 'react-toastify';

const EditResident: React.FC = (props) => {
    let { id } = useParams();
    const [full_name, setFullName] = useState('');
    const [cpf, setCpf] = useState('');
    const [fone, setFone] = useState('');
    const [date, setDate] = useState('');
    const [email, setEmail] = useState('');
    const [residents, setResidents] = useState<Resident[]>([]);
    
    useEffect(() => {
        api.get(`residents/people/${id}`).then((response) => {
            setFullName(response.data.data.full_name);
            setCpf(response.data.data.cpf);
            setFone(response.data.data.fone);
            setDate(response.data.data.date);
            setEmail(response.data.data.email);
        });
    }, []);

    async function handleEditResident(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

        try {
            api.put(`residents/people/${id}`, { 
                full_name: full_name,
                cpf: cpf,
                fone: fone,
                date: date,
                email: email
             })
            .then(res => {  
                serviceSetResidents();
                toast.dark(`✔️ Os dados foram alterados com sucesso!`, {hideProgressBar: true,});
            });
        } catch (error) {
            
        }
    }

    function handleHistoryBack() {
        window.history.back()
    }

    /** Generic function to search for apartments */
    function serviceSetResidents() {
        api.get(`resident/${id}`).then((response) => {
            setResidents(response.data.data);
        });
    }

    return (
        <>
        <Title>Você está editando o residente <span> {full_name}</span>.</Title>
        {residents.map((resident => (
            <a key={resident.id}>
                <img src="https://images.vexels.com/media/users/3/157612/isolated/preview/b8c07826c517b2acde8e31979b7a0529---cone-de-apartamento-alto-by-vexels.png" alt="" />
                <div>
                    <h3>x {resident.id}</h3>
                    <p>x {resident.id}</p>
                </div>
            </a>
            )))} 
        <Form onSubmit={handleEditResident}>
            <div>
            <input 
                value={full_name}
                onChange={(e) => setFullName(e.target.value)} 
                placeholder="Nome Completo" required/>

                <input
                type="number" 
                value={cpf}
                onChange={(e) => setCpf(e.target.value)} 
                placeholder="CPF" required/>

                <input value={fone}
                onChange={(e) => setFone(e.target.value)} 
                id="telefone" placeholder="Telefone" required/>

                <input value={date}
                type="date"
                onChange={(e) => setDate(e.target.value)} 
                id="dtNascimento" placeholder="Data Nascimento" required/>

                <input value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)} 
                id="email" placeholder="Email" required/>
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

export default EditResident;

