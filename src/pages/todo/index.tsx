import { useState } from "react";
import Button from "../../components/common/button";
import ListGroup from "../../components/common/ListGroup";
import Layout from "../../components/layout";
import { ListItemProps } from "../../interfaces/listItem/ListItem.interface";

const Todo = () => {
    const [data, setData] = useState<Array<ListItemProps>>([
        {
            id: "02e7f1a0-444b-492d-851c-1fef05f53d2c",
            title: "Do the homework",
            active: false,
        },
        {
            id: "32cd5a0d-a0b9-4185-b931-138ba8c95af0",
            title: "Do the lunch",
            active: false,
        },
        {
            id: "fe0aab78-8687-4264-bb60-a89aeb423deb",
            title: "Pay the car",
            active: false,
        },
        {
            id: "467077e0-c7ba-43ce-af90-40a7c6d79b57",
            title: "Pay the house",
            active: false,
        },
    ]);

    const [selectedItems, setSelectedItems] = useState<Array<ListItemProps>>([]);

    const handleClick = (id: string) => {
        setData(_prev => _prev.map((item) => {
            item.id === id && (item.active = !item.active);
            return item;
        }));
    };

    const handleSelectAll = () => {
        setData(_prev => _prev.map((item) => ({
            ...item,
            active: true
        })));
    };

    const handleSend = () => {
        const selected = data.filter(item => item.active === true);
        const finishedSelected = selected.map(item => ({
            ...item,
            active: false
        }))
        setSelectedItems(finishedSelected);
    };

    const handleReset = () => {
        setSelectedItems([])
        setData(_prev => _prev.map((item) => ({
            ...item,
            active: false
        })));
    }

    return (
        <>
            <Layout>
                <div className="mx-5">

                    <div className="col-lg-6 mt-5">
                        <Button title="Select all" bgClass="primary" action={handleSelectAll} size="sm" />
                        <Button title="Reset" bgClass="danger" action={handleReset} size="sm" />
                    </div>

                    <div className="row">
                        <div className="col-lg-6">
                            <ListGroup
                                action={handleClick}
                                items={data}
                                withCheck={true} />
                        </div>
                        <div className="col-lg-6">
                            <ListGroup
                                items={selectedItems}
                                withCheck={false}
                            />
                        </div>
                    </div>
                    <Button title="Send" bgClass="success" action={handleSend} />
                </div>

            </Layout>
        </>
    );
};

export default Todo;
