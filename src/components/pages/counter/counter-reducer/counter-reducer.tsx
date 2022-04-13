import { useReducer } from "react";
import { CounterState } from "../../../../interfaces/counter/counter.interface";
import { incrementAndDecrementAction, resetCounterAction } from "./actions/counter.action";
import { counterReducer } from "./reducers/counter.reducer";
import { INITIAL_STATE } from "./state";

const CounterReducer = () => {

    const [{ counter, changes, previous }, dispatch] = useReducer(counterReducer, INITIAL_STATE);

    const handleReset = () => {
        dispatch(resetCounterAction())
    }

    const handleChange = (value: number) => {
        dispatch(incrementAndDecrementAction(value))
    }

    return (
        <>
            <div className="row mt-3">
                <h4 className="text-info bg-white shadow-lg p-4">
                    Counter done with useReducer hook
                </h4>
                <div className="bg-white shadow-lg  rounded p-5  col-lg-4">
                    <h2 className="text-primary"> Counter {counter}</h2>

                    <div className="row mt-3">
                        <div className="col-sm-4">
                            <button className="btn btn-danger w-100" onClick={() => { handleChange(-1) }}>
                                -
                            </button>
                        </div>
                        <div className="col-sm-4">
                            <button className="btn btn-primary w-100" onClick={() => { handleChange(1) }}>
                                +
                            </button>
                        </div>
                        <div className="col-sm-4">
                            <button className="btn btn-warning w-100" onClick={() => { handleReset() }}>
                                Rst
                            </button>
                        </div>
                    </div>
                </div>
                <div
                    className={`bg-${(counter < 10 && counter > 0) ? 'warning' : counter < 1 ? 'danger' : 'success'} shadow-lg rounded p-5 col-lg-8 text-white row`}
                >
                    <div className="col-lg-4">
                        <h4>Previous</h4>
                        <h2 className="text-white fw-bolder"> {previous}</h2>
                    </div>
                    <div className="col-lg-4">
                        <h4>Changes</h4>
                        <h2 className="text-white fw-bolder">{changes}</h2>
                    </div>

                </div>
            </div>
        </>
    );
};

export default CounterReducer;
