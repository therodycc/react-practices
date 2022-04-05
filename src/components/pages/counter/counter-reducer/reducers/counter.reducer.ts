import { CounterState } from "../../../../../interfaces/counter/counter.interface";
import { CounterActionType } from "../types/counter.type";



export const counterReducer = (state: CounterState , action: CounterActionType): CounterState => {
    switch (action.type) {
        case 'reset':
            return {
                counter: 0,
                previous: 0,
                changes: 0,
            }
        case 'increaseBy':
            return {
                counter: action.payload.value + state.counter,
                previous: state.counter,
                changes: state.changes + 1
            }
        default:
            return state
    }
};
