import React from 'react';
import { Title, Form } from './styles';

const SignIn: React.FC = () => {
    return (
        <>
        <Title>Login</Title>

        <Form> 
            <input
            placeholder="Digite seu email" />
            <input type="password" placeholder="Digite sua senha"/>
            <button type="submit">Login</button>
        </Form>

        </>
    );
}

export default SignIn;

