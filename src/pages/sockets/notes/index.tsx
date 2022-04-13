import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { io } from 'socket.io-client';
import Button from '../../../components/common/button';
import Table from '../../../components/common/table';
import Layout from '../../../components/layout';
import { TableHeadersI } from '../../../interfaces/table/table.interface';
import { addNoteAction, deleteNoteAction } from '../../../redux/slices/notes.slices';



const END_POINT = 'http://localhost:5000'



const Notes = () => {


    useEffect(() => {
        const server = io(END_POINT)
        console.log(server);
    }, []);


    return (
        <>
            <Layout>

            </Layout>
        </>
    )
}

export default Notes