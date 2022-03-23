import { types } from "../types";

const initialState = {
    uuid: '2kk3-234m',
    name: 'Ramon'
}

export const AuthReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case types.LOGIN:
            return {
                uuid: action.payload.uuid,
                name: action.payload.name
            }
        case types.LOGOUT:
            return {}

        default:
            return state
            break;
    }
}