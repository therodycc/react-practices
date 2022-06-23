import { useState } from "react";
import Button from "../../components/common/button";
import ListGroup from "../../components/common/ListGroup";
import Layout from "../../components/layout";
import { ListItemProps } from "../../interfaces/listItem/ListItem.interface";
import { todoData } from "../../settings/todo/todo-data";

const Todo = () => {
    const [data, setData] = useState<Array<ListItemProps>>(todoData);

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
                        <Button title="Select all" bgClass="primary" action={handleSelectAll} customClass="col-lg-3 " />
                        <Button title="Reset" bgClass="danger" action={handleReset} customClass="col-lg-3 mx-1" />
                        <Button title="Send" bgClass="success" action={handleSend} customClass="col-lg-3" />
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
                </div>

            </Layout>
        </>
    );
};

export default Todo;
