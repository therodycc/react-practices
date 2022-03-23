import Card from '../../../components/common/card';
import Layout from '../../../components/layout';

const ScreenTurn = () => {
    return <div>
        <Layout>
            <div className='row col-lg-12  h-100' >
                <div className='col-lg-8 shadow bg-white d-flex justify-content-center align-item-center' >
                    <div className='m-auto w-25'>
                        <h1>Here is</h1>
                        <p>Welcome to next </p>
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className="d-flex flex-column align-items-evenly justify-content-between h-100">
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
            </div>
        </Layout>
    </div>;
};

export default ScreenTurn;
