import { CounterActionType } from "../types/counter.type"

export const incrementAndDecrementAction = (value: number): CounterActionType => ({
    type: 'increaseBy',
    payload: { value }
})

export const resetCounterAction = (): CounterActionType => ({
    type: 'reset'
})