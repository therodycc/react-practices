import React from "react";
import { ListGroupPropsI } from "../../interfaces/ListGroup/ListGroup.interface";
import ListItem from "./ListItem";
import { v4 as uuidV4 } from 'uuid'

const ListGroup = ({ items, action, withCheck }: ListGroupPropsI) => {

    return (
        <>
            <div className="list-group my-3">
                {items.map((item) => (
                    <>
                        <ListItem
                            key={uuidV4()}
                            id={item.id}
                            title={item.title}
                            active={item.active}
                            action={action}
                            withCheck={withCheck}
                        />
                    </>
                ))}
            </div>
        </>
    );
};

export default ListGroup;
