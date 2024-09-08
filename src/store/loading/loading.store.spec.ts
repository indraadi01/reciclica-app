<<<<<<< HEAD
import { loadingReducer } from "./loading.reducers";
import { LoadingState } from "./LoadingState";
import { hide, show } from "./loading.action";
import { createAction } from "@ngrx/store";

describe('Loading store', () => {

    it('show', () => {
        const initialStates: LoadingState = {
            show: false};

        const newState = loadingReducer(initialStates, show());

        expect(newState).toEqual({show: true});
    })

    it('hide', () => {
        const initialStates: LoadingState = {
            show: true};

        const newState = loadingReducer(initialStates, hide());

        expect(newState).toEqual({show: false});
    })

    it('should keep state if action is unknown', () => {
        const initialStates: LoadingState = {
            show: true};

        const action = createAction("UNKNOWN");
        const newState = loadingReducer(initialStates, action);

        expect(newState).toEqual({show: true});
    })

})
=======
import { createAction } from "@ngrx/store";
import { show, hide} from "./loading.action";
import { loadingReducer } from "./loading.reducers";
import { LoadingState } from "./LoadingState";

describe('LoadingStore', () => {
  it('show', () => {
    const initialState: LoadingState = {
      show: false
    };
    const newState = loadingReducer(initialState, show());
    expect(newState).toEqual({show: true});
  })
  it('hide', () => {
    const initialState: LoadingState = {
      show: true
    };
    const newState = loadingReducer(initialState, hide());
    expect(newState).toEqual({show: false}); 
  })
  it('should keep state if action is unknown', () => {
    const initialState: LoadingState = {show: true};
    const action = createAction("UNKNOWN");
    const newState = loadingReducer(initialState, action);

    expect(newState).toEqual({show: true});
  })
})
>>>>>>> ce0a256d1543d5f6ac66a3ddc769c755a058d782
