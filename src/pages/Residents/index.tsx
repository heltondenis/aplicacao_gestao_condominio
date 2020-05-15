import React, {useState, useEffect, FormEvent} from 'react';
import { Title, Form, Feed } from './styles';
import { ToastContainer, toast } from 'react-toastify';
import { useParams, Link } from 'react-router-dom';
import { Resident } from '../../models/resident.model';
import api from '../../services/api';
import { FiDelete } from 'react-icons/fi';
import { FiEdit } from 'react-icons/fi';
import 'react-toastify/dist/ReactToastify.css';

const Residents: React.FC = () => {
    let { id } = useParams();
    const [full_name, setFullName] = useState('');
    const [cpf, setCpf] = useState('');
    const [fone, setFone] = useState('');
    const [date, setDate] = useState('');
    const [email, setEmail] = useState('');
    const [admin_status, setAdminStatus] = useState('');
    const [residents, setResidents] = useState<Resident[]>([]);
    
    useEffect(() => {
        api.get(`residents/${id}`).then((response) => {
            setResidents(response.data.data);
            setAdminStatus(response.data.data.admin_status);
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
                toast.dark(`✔️ O morador ${full_name} foi adicionado com sucesso!`, {hideProgressBar: true,});
            });
        } catch (error) {

        }
    }
    

    function handleDeleteResident(id:number) {
        
        try {
             api.delete(`residents/${id}`).then((response) => {
                serviceSetResidents();
                toast.dark('🥺 O morador foi excluído!', {hideProgressBar: true,});
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

    function setToggleAdminStatus(id:number) {
        api.put(`/administrative/verify-check/${id}`, {});
        toast.dark(`✔️ O adminstrador foi alterado!`, {hideProgressBar: true,});
        setResidents([]);
        setTimeout(() => {
            serviceSetResidents();
          }, 500);
       
    }

    function handleHistoryBack() {
        window.history.back()
    }

    return (
        <>
        <Title>Você está cadastrando moradores para o apartamento {id}.</Title>
        <Form onSubmit={handleAddResident}>
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
            <div>
                <button id="btn-back" onClick={(e) => handleHistoryBack()}>Voltar</button>
                <button type="submit">Cadastrar</button>
            </div>
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
                    <p>Tel: {resident.fone}</p>
                    <p>CPF: {resident.cpf}</p>
                </div>
                
                <Link id="link" to={{pathname: ""}}>
                <input
                    className="form-check-input"
                    type="checkbox"
                    value={resident.id}
                    onClick={() => setToggleAdminStatus(resident.id)}
                    checked={resident.admin_status ? true : false}
                />
                    <span id="span-adm">Adm?</span>
                </Link>
                
                <Link id="link" to={{pathname: `../edit-resident/${resident.id}`}}>
                    <FiEdit size={20} />
                    <span>Editar</span>
                </Link>
                
                <Link id="link" to={{pathname: ""}} onClick={(e) => handleDeleteResident(resident.id)}>
                    <FiDelete size={20} />
                    <span>Deletar</span>
                </Link>
            </a>
            ))} 
        </Feed>
        </>
    );
}

export default Residents;

