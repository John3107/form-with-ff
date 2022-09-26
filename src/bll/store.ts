import {combineReducers, legacy_createStore as createStore} from 'redux';
import {formReducer} from "./form-reducer";

export const rootReducer = combineReducers({
    form: formReducer
})
export const store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>
