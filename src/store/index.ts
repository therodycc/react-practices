import { createStore, combineReducers } from 'redux'
import { AuthReducer } from '../reducers/auth.reducer'

const reducers = combineReducers({
    auth: AuthReducer
})

export const store = createStore(
    reducers
)