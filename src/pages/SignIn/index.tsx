import React, { useRef, useCallback, useContext } from 'react';
import { Container, Content, Background } from './styles';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { AuthContext } from '../../context/AuthContext';

interface SignInFormData {
    email: string;
    password: string;
}

const SignIn: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    
    const { signIn } = useContext(AuthContext);

    const handleSubmit = useCallback(
        async (data: SignInFormData) => {
      
            signIn({
                email: 'helton@gmail.com',
                password: '123456'
            });
    }, [signIn],
    );

    return (
        <Container>
            <Content>
                <Form ref={formRef} onSubmit={handleSubmit}> 
                    <h1>Faça seu login</h1>
                    <input placeholder="E-mail" />
                    <input type="password" placeholder="Password" />
                    <button type="submit">Entrar</button>
                </Form>
            </Content>
        </Container>
    );
}

export default SignIn;

