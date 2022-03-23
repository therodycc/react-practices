// import { io } from "socket.io-client";
import { app } from '../../config';
import Layout from '../../components/layout';
const SocketApp = ({ children }: any) => {
    // const socket = io(app.url)
    // socket.on('connection', (client) => {
    //     console.log({ client });
    // })
    return <>
        <Layout>
            {children}
        </Layout>
    </>;
};

export default SocketApp;
