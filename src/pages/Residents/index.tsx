import React, {useState} from 'react';
import { Title, Form, Feed, ButtonSwitchAdmin } from './styles';
import Switch from "react-switch";

const Residents: React.FC = () => {
 
    async function teste() {

    }

    return (
        <>
        <Title>Você está cadastrando moradores para o apartamento 01.</Title>
        <Form>
            <div>
                <input placeholder="Nome Completo" />
                <input placeholder="CPF"/>
                <input id="telefone" placeholder="Telefone" />
                <input id="dtNascimento" placeholder="Data Nascimento"/>
                <input id="email" placeholder="Email"/>
            </div>
            <button type="submit">Cadastrar</button>
            <hr />  
        </Form>

        <Title>Moradores Cadastrados.</Title>
        <Feed>
            <a>
                <img src="https://images.vexels.com/media/users/3/157612/isolated/preview/b8c07826c517b2acde8e31979b7a0529---cone-de-apartamento-alto-by-vexels.png" alt="" />
                <div>
                    <strong>João Almeida</strong>
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
            </a>
        </Feed>
        </>
    );
}

export default Residents;

