import Layout from '../../components/layout';
import CounterHook from '../../components/pages/counter/counter-hook/counter-hook';
import CounterReducer from '../../components/pages/counter/counter-reducer/counter-reducer';

const Counter = () => {


    return (
        <>
            <Layout>
                <div className="p-5">
                    <CounterHook />
                    <CounterReducer />
                </div>
            </Layout>
        </>
    )
}

export default Counter