import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import Button from '../../../components/common/button';
import Table from '../../../components/common/table';
import Layout from '../../../components/layout';
import { TableHeadersI } from '../../../interfaces/table/table.interface';

const Notes = () => {

    const [notes, setNotes] = useState(null);

    useEffect(() => {
        const socket = io(`http://localhost:5000/notes`, {
            reconnection: true,
            reconnectionDelay: 500,
            reconnectionAttempts: 10,
            transports: ["websocket"],
        });
        console.log({ socket });
        socket.on('server:load_notes', (socketsNotes) => {
            console.log(socketsNotes);
            setNotes(socketsNotes)
        })
    }, []);

    const notesHeader: TableHeadersI[] = [
        {
            title: 'Title',
            key: "title"
        },
        {
            title: 'Description',
            key: "description"
        },
        {
            title: 'Id',
            key: "id"
        },
        {
            title: 'Actions',
            key: "",
            render: ({ item, index }: any) => {
                return (
                    <>
                        <Button title={'Delete'} action={() => {

                        }} bgClass={'danger'} />
                    </>
                )
            }
        }
    ]

    return (
        <>
            <Layout>
                <div className="m-5">
                    <Table
                        headers={notesHeader}
                        items={notes} />
                </div>
            </Layout>
        </>
    )
}

export default Notes