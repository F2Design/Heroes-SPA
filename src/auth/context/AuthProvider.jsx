import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";
import { types } from '../types/types';

// const initialSatate = {
//     logged: false,
// }

/* Inicial el estado */
const init = () => {
    const user = JSON.parse (localStorage.getItem( 'user' ));

    return {
        logged: !!user,
        user: user,
    }
}

export const AuthProvider = ({ children }) => {

    const [ authState, dispatch ] = useReducer( authReducer, {}, init );

    const login = async( name = '' ) => {

        /* Este es el user */
        const user = { id: 'ABC', name }

        const action = {
            type: types.login,
            /* Este es el usuario que envio al reducer o el state, aqui es donde se almacena el usuario */
            payload: user
        }

        /* Donde voy a grabar el local storage, almacenar el usuario */
        localStorage.setItem( 'user', JSON.stringify( user ) );

        dispatch( action );
    }

    /* Logout */
    const logout = () => {
        localStorage.removeItem('user');
        const action = { types: types.logout };
        dispatch(action);
    }

    return (
        <AuthContext.Provider value={{
            ...authState,
            login: login,
            logout: logout
        }}>
            { children }
        </AuthContext.Provider>
    );
}
