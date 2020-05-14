import React, {useState, Props, useEffect, FormEvent} from 'react';
import { Title, Form, Feed, ButtonSwitchAdmin } from './styles';
import Switch from "react-switch";
import { useParams, Link } from 'react-router-dom';
import { Resident } from '../../models/resident.model';
import api from '../../services/api';

const Residents: React.FC = (props) => {
    let { id } = useParams();
    const [full_name, setFullName] = useState('');
    const [cpf, setCpf] = useState('');
    const [fone, setFone] = useState('');
    const [date, setDate] = useState('');
    const [email, setEmail] = useState('');
    const [residents, setResidents] = useState<Resident[]>([]);
    
    useEffect(() => {
        api.get(`residents/${id}`).then((response) => {
            setResidents(response.data.data);
        });
    }, []);

    async function handleAddResident(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
    
        try {
            const data = {
                id: id,
                full_name: full_name, 
                cpf: cpf,
                fone: fone,
                date: date,
                email: email,
            }

            api.post(`residents`, data)
            .then(res => {  
                setFullName('');
                setCpf('');
                setFone('');
                setDate('');
                setEmail('');
                serviceSetResidents();
            });
        } catch (error) {

        }
    }

    function handleDeleteResident(id:number) {
        
        try {
             api.delete(`residents/${id}`).then((response) => {
                serviceSetResidents();
             });
        } catch (error) {
           
        }
    }

    /** Generic function to search for residents */
    function serviceSetResidents() {
        api.get(`residents/${id}`).then((response) => {
            setResidents(response.data.data);
        });
    }
    
    async function teste() {    

    }

    return (
        <>
        <Title>Você está cadastrando moradores para o apartamento {id}.</Title>
        <Form onSubmit={handleAddResident}>
            <div>
                <input 
                value={full_name}
                onChange={(e) => setFullName(e.target.value)} 
                placeholder="Nome Completo" />

                <input
                type="number" 
                value={cpf}
                onChange={(e) => setCpf(e.target.value)} 
                placeholder="CPF"/>

                <input value={fone}
                onChange={(e) => setFone(e.target.value)} 
                id="telefone" placeholder="Telefone" />

                <input value={date}
                type="date"
                onChange={(e) => setDate(e.target.value)} 
                id="dtNascimento" placeholder="Data Nascimento"/>

                <input value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)} 
                id="email" placeholder="Email"/>
            </div>
            <button type="submit">Cadastrar</button>
            <hr />  
        </Form>

        <Title>Moradores Cadastrados.</Title>
        <Feed>
            {residents.map(resident => (
            <a key={resident.id}>
                <img src="https://www.pikpng.com/pngl/m/446-4465452_people-icon-png-font-awesome-user-svg-clipart.png" alt="" />
                <div>
                    <h3>{resident.full_name}</h3>
                    <p>Email: {resident.email}</p>
                    <p>: {resident.fone}</p>
                </div>
                
                <ButtonSwitchAdmin>
                    <p id="neat-label"><strong>ADM?</strong></p>
                </ButtonSwitchAdmin>
               
                <Switch
                className="react-switch"
                onChange={teste}
                checked
                onColor="#57FF86"
                aria-labelledby="neat-label"
                />
                
                <button>Editar</button>
                <button onClick={(e) => handleDeleteResident(resident.id)} id="btn-delete">Excluir</button>
            </a>
            ))} 
        </Feed>
        </>
    );
}

export default Residents;

