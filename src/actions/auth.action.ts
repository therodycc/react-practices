import { types } from "../types";

export const login = (uuid: string, name: string) => {
    return {
        type: types.LOGIN,
        payload: {
            uuid,
            name
        }
    }
}