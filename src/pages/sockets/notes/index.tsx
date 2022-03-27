import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import Button from '../../../components/common/button';
import Table from '../../../components/common/table';
import Layout from '../../../components/layout';
import { TableHeadersI } from '../../../interfaces/table/table.interface';



const END_POINT = 'http://localhost:5000'



const Notes = () => {
    const [notes, setNotes] = useState<any>();


    useEffect(() => {
        const server = io(END_POINT)
        console.log(server);
    }, []);

    const getAllNotes = () => {

    }



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
            title: 'Actions',
            key: "",
            render: ({ item }: any) => {
                return (
                    <>
                        <Button title={'Delete'} action={() => {
                            console.log({ item });
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
                    <code contentEditable={false}>
                        Here the data
                        {JSON.stringify(notes)}
                    </code>
                    <Table
                        headers={notesHeader}
                        items={notes?.data} />
                </div>
            </Layout>
        </>
    )
}

export default Notes