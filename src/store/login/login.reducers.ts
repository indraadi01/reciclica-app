<<<<<<< HEAD
import { createReducer, on, Action } from "@ngrx/store";
import { loginSuccess, loginFail, recoverPassword, recoverPasswordFail, recoverPasswordSuccess } from "./login.actions";
import { LoginState } from "./LoginState";
import { AppInitialState } from "../AppInitialState";
import { login } from "./login.actions";

const initialState: LoginState = AppInitialState.login;
=======
import { Action, createReducer, on } from "@ngrx/store";
import { AppInitialState } from "../AppInitialState";
import { login, loginFail, loginSuccess, recoverPassword, recoverPasswordFail, recoverPasswordSuccess } from "./login.action";
import { LoginState } from "./LoginState";

const initialState: LoginState = AppInitialState.login
>>>>>>> ce0a256d1543d5f6ac66a3ddc769c755a058d782

const reducer = createReducer(initialState,
    on(recoverPassword, currentState => {
        return {
            ...currentState,
<<<<<<< HEAD
            isRecoveringPassword: true,
            isRecoveredPassword: false
        };
=======
        error: null,
        isReCoveredPassword: false,
        isRecoveringPassword: true
    };
>>>>>>> ce0a256d1543d5f6ac66a3ddc769c755a058d782
    }),
    on(recoverPasswordSuccess, currentState => {
        return {
            ...currentState,
<<<<<<< HEAD
            error: null,
            isRecoveringPassword: false,
            isRecoveredPassword: true
        };
=======
        error: null,
        isReCoveredPassword: true,
        isRecoveringPassword: false};
>>>>>>> ce0a256d1543d5f6ac66a3ddc769c755a058d782
    }),
    on(recoverPasswordFail, (currentState, action) => {
        return {
            ...currentState,
<<<<<<< HEAD
            error: action.error,
            isRecoveredPassword: false,
            isRecoveringPassword: false
        };
=======
        error: action.error,
        isReCoveredPassword: false,
        isRecoveringPassword: false};
>>>>>>> ce0a256d1543d5f6ac66a3ddc769c755a058d782
    }),
    on(login, currentState => {
        return {
            ...currentState,
<<<<<<< HEAD
            isLoggingIn: true,
            isLoggedIn: false
        };
=======
            error: null,
            isLoggedIn: false,
            isLoggingIn: true
        }
>>>>>>> ce0a256d1543d5f6ac66a3ddc769c755a058d782
    }),
    on(loginSuccess, currentState => {
        return {
            ...currentState,
            isLoggedIn: true,
            isLoggingIn: false
        }
    }),
    on(loginFail, (currentState, action) => {
        return {
            ...currentState,
            error: action.error,
            isLoggedIn: false,
            isLoggingIn: false
        }
    })
<<<<<<< HEAD
)

export function loginReducer(state: LoginState, action: Action<string>) {
    return reducer(state, action);
=======

    )
export function loginReducer(state: LoginState, action: Action){
    return reducer(state, action)
>>>>>>> ce0a256d1543d5f6ac66a3ddc769c755a058d782
}
