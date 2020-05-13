import React, { createContext, useCallback } from 'react';
import api from '../services/api';

interface SignInCredencials {
    email: string;
    password: string;
}

interface AuthContextData {
    name: string;
    signIn(credentials: SignInCredencials): Promise<void>;
}

const AuthContext = createContext<AuthContextData>(
    {} as AuthContextData,
);

const AuthProvider: React.FC = ({ children }) => {

    const signIn = useCallback(async ({email, password}) => {

        const data = {
            email: email,
            password: password
          };

          api.post(`apartaments`, { data })
            .then(res => {
              console.log(res);
              console.log(res.data);
            });

    }, []);

    return (
        <AuthContext.Provider value={{name: 'Helton', signIn }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider};
