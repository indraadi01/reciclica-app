import { StoreModule } from "@ngrx/store";
import { loadingReducer } from "./loading/loading.reducers";
import { loginReducer } from "./login/login.reducers";
import { EffectsModule } from "@ngrx/effects";
import { LoginEffects } from "./login/login.effects";
<<<<<<< HEAD
import { registerReducer } from "./register/register.reducers";
import { RegisterEffects } from "./register/register.effects";
=======
>>>>>>> ce0a256d1543d5f6ac66a3ddc769c755a058d782

export const AppStoreModule = [
    StoreModule.forRoot([]),
    StoreModule.forFeature('loading', loadingReducer),
    StoreModule.forFeature("login", loginReducer),
<<<<<<< HEAD
    StoreModule.forFeature("register", registerReducer),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([
        LoginEffects,
        RegisterEffects
    ])
]
=======
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([
        LoginEffects
    ])
]
>>>>>>> ce0a256d1543d5f6ac66a3ddc769c755a058d782
