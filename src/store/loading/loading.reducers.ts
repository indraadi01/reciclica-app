<<<<<<< HEAD
import { Action, createReducer, on } from "@ngrx/store";
import { hide, show } from "./loading.action";
import { LoadingState } from "./LoadingState";

const initialStates: LoadingState = {
    show: false
}
const reducer = createReducer(initialStates,
    on(show, () =>{
        return{show: true};
    }),
    on(hide, () =>{
        return{show: false};
    })
);

export function loadingReducer(state: LoadingState, action: Action<string>){
    return reducer(state, action);
}
=======
import { Action, createReducer } from "@ngrx/store";
import { hide, show } from "./loading.action";
import { on } from "@ngrx/store";
import { LoadingState } from "./LoadingState";

const initialState: LoadingState = {
  show: false
}


const reducer = createReducer(
  initialState,
  on(show, () => {
    return {show: true};
   }),
  on(hide, () => {
    return {show: false};
   })
);

export function loadingReducer(state: LoadingState, action: Action<string>) {
  return reducer(state, action);
}
>>>>>>> ce0a256d1543d5f6ac66a3ddc769c755a058d782
