import React from 'react'
import { ListItemProps } from '../../interfaces/listItem/ListItem.interface'

const ListItem = ({ title, active, id, action, withCheck }: ListItemProps) => {

    const handleClick = () => {
        if (action) action(id)
    }
    const stylesImg = {
        width: '100px',
        height: '100%'
    }

    return (
        <>
            <a
                onClick={handleClick}
                className={`list-group-item list-group-item-action ${active && 'active'} `}>
                {
                    withCheck && (
                        <input className="form-check-input mx-3" type="checkbox" checked={active} />
                    )
                }
                {title}
            </a>
        </>
    )
}

export default ListItem
