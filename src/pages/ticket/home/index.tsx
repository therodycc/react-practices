import Layout from "../../../components/layout";

const HomeTicket = () => {
    return <div>
        <Layout>
            <div className='row'>
                <div className='col-lg-6'>
                    <h1>Home page</h1>
                    <button className='btn btn-success p-5 mx-1'>
                        Public screen
                    </button>
                    <button className='btn btn-primary p-5 mx-1'>
                        Create ticket
                    </button>
                </div>
            </div>
        </Layout>
    </div>;
};

export default HomeTicket;

