import Link from "next/link";
import React, { useEffect, useState } from "react";
import { SidebarOptionPropsI } from "../../../interfaces/asidebar/asidebar.interface";
import { sidebarOptions } from "../../../settings/sidebar";
import Router from "next/router";

const Sidebar = () => {
    const [asideBarOptions, setAsideBarOptions] = useState<SidebarOptionPropsI[]>(
        []
    );

    useEffect(() => {
        handleChange(Router.pathname);
    }, []);

    const handleChange = (path: string) => {
        setAsideBarOptions(
            sidebarOptions?.map((item, i) => {
                item.route === path ? (item.active = true) : (item.active = false);
                return item;
            })
        );
        // handleSubOptionActive(10)
    };

    const handleToggleMenu = (index: number) => {
        const newData = asideBarOptions?.map((item, i) => {
            i === index && (item.subOptsActive = !item.subOptsActive);
            return item;
        });
        setAsideBarOptions(newData);
    };

    const handleSubOptionActive = (_index: number) => {
        sidebarOptions.map((item) => {
            return {
                ...item,
                subOptions: item?.subOptions.map((sub, index) => {
                    _index === index ? (sub.active = true) : (sub.active = false);
                    return sub;
                }),
            };
        });
    };

    return (
        <>
            <ul className="nav nav-pills flex-column mx-2 my-2">
                {asideBarOptions.map((option, index) => (
                    <>
                        <li className="nav-item">
                            <Link key={option.name + index} href={option.route}>
                                <p
                                    onClick={() => handleChange(option.route)}
                                    className={`nav-link my-1 shadow-lg d-flex justify-content-between align-items-center p-3  ${option.active ? "active" : "bg-white"
                                        }`}
                                    style={{ borderLeft: "3px solid #396afc " }}
                                >
                                    <span>{option.name}</span>
                                    {option.subOptions.length > 0 && (
                                        <>
                                            {/* <FontAwesomeIcon icon={facheve} /> */}
                                            <i
                                                className={`fas fa-chevron-${option.subOptsActive ? "up" : "down"
                                                    } `}
                                                onClick={() => {
                                                    handleToggleMenu(index);
                                                }}
                                            ></i>
                                        </>
                                    )}
                                </p>
                            </Link>
                        </li>
                        {option?.subOptsActive && (
                            <ul className="animate__animated  animate__bounceInLeft">
                                {option.subOptions.map((subOption, index) => (
                                    <>
                                        <Link key={subOption.name + index} href={subOption.route}>
                                            <li
                                                className={`nav-link my-1 ${subOption.active ? "active" : "bg-white"
                                                    }`}
                                                onClick={() => { handleSubOptionActive(index) }}
                                            >
                                                <i className="fas fa-road mx-2"></i>
                                                {subOption.name}
                                            </li>
                                        </Link>
                                    </>
                                ))}
                            </ul>
                        )}
                    </>
                ))}
            </ul>
        </>
    );
};

export default Sidebar;
