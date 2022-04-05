export type CounterActionType =
    | {
        type: "increaseBy";
        payload: { value: number };
    }
    | { type: "reset" };
