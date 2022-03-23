import React from 'react';

const Dropdown = ({ options, name, onChange }: any) => {
    return <>
        <select className="form-select" onChange={(e) => { onChange(e) }} >
            <option value="">Select</option>
            {
                options.map((item: any) => (
                    <>
                        <option style={{padding:'10px', height:'20px'}} value={item.value}>{item.title}</option>
                    </>
                ))
            }
        </select>
    </>;
};

export default Dropdown;
