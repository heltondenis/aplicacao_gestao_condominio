import React, { useState, FormEvent } from 'react';
import { Title, Form, Feed, Error, Dialog } from './styles';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';
import { Apartament } from '../../models/apartament.model';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import { Resident } from '../../models/resident.model';

const Dashboard: React.FC = () => {
    const [newApartament, setNewApartament] = useState('');
    const [apartaments, setApartaments] = useState<Apartament[]>([]);
    const [residents, setResidents] = useState<Resident[]>([]);
    const [inputError, setInputError] = useState('');

    async function handleAddApartament(event: FormEvent<HTMLFormElement>,): Promise<void> {
        event.preventDefault();

        if(!newApartament) {
            setInputError('Digite o nome do apartamento');
            return;
        }
            
        try {
            const response = await api.get(`apartaments/${newApartament}`);

            const apartament = response.data.data;
            console.log(apartament);
                setApartaments([apartament]);
                setNewApartament('');
                setInputError('');

        } catch (error) {
            setInputError('Não encontramos o apartamento :(');
        }
    }

    async function detailsApartament(id:string) {

        const responseResidents = await api.get(`residents/${id}`);
        const residents: any[] = responseResidents.data.data;

        console.log(apartaments);

        confirmAlert({
            customUI: ({ onClose }) => {
                /** Render Apartament */
                return (
                <Dialog>
                  <div className='custom-ui'>
                    <h1></h1>
                    {apartaments.map((apartament => (
                        <a key={apartament.id}> 
                        <br />
                            <h1 id="title-apartament">Apartamento</h1>
                            <div>
                                <span>Número: </span>
                                <b>{apartament.number}</b>
                                <span>Bloco: </span>
                                <b>{apartament.block}</b>
                            </div>
                            
                        </a>
                        )))} 
                        <hr></hr>
                        <h1>Moradores</h1>
                        {residents.map((resident => (
                           <a key={resident.id}>
                               <div id="content-resident">
                                   <div>
                                   <img src="https://www.pikpng.com/pngl/m/446-4465452_people-icon-png-font-awesome-user-svg-clipart.png" alt="" />
                                   <h4>{resident.full_name}</h4>
                                   </div>
                                    <p>Email: {resident.email}</p>
                                    <p>Tel: {resident.fone}</p>
                                    <p>CPF: {resident.cpf}</p>
                                    <hr id="hr-resident"></hr>
                               </div>
                           </a>
                        )))} 
                    <button onClick={onClose}>Voltar</button>
                  </div>
                  </Dialog>
                );
              }
          });
    }

    return (
        <>
        <Title>Encontre apartamentos e <br/> moradores.</Title>

        <Form hasError={Boolean(inputError)} onSubmit={handleAddApartament}> 
            <input
            value={newApartament}
            onChange={(e) => setNewApartament(e.target.value)} 
            placeholder="Busque pelo número do apartamento..." />
            <button type="submit">Buscar</button>
            
            <Link to="Apartaments">
                <button id="button-cadastrar" >Cadastrar</button>
            </Link>
        </Form>

        { inputError && <Error>{inputError}</Error> }
        
        <Feed>
            {apartaments.map((apartament => (
            <a key={apartament.id}>
                <img src="https://images.vexels.com/media/users/3/157612/isolated/preview/b8c07826c517b2acde8e31979b7a0529---cone-de-apartamento-alto-by-vexels.png" alt="" />
                <div>
                    <h3>Apartamento {apartament.number}</h3>
                    <p>Bloco {apartament.block}</p>
                </div>
                <FiChevronRight size={40} onClick={(e) => detailsApartament(apartament.number)}/>
            </a>
            )))} 
        </Feed>
        </>
    );
}

export default Dashboard;

