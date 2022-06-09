import Link from "next/link";
import React, { useEffect, useState } from "react";
import { SidebarOptionPropsI } from "../../../interfaces/asidebar/asidebar.interface";
import { sidebarOptions } from "../../../settings/sidebar";
import Router from "next/router";
import { v4 as GxUUID } from 'uuid'

const Sidebar = () => {
    const [asideBarOptions, setAsideBarOptions] = useState<SidebarOptionPropsI[]>([]);

    useEffect(() => {
        handleChange(Router.pathname);
    }, []);

    const handleChange = (path: string) => {
        setAsideBarOptions(
            sidebarOptions?.map((item, i) => {
                item.route === path ? (item.active = true) : (item.active = false);
                // (item.route !== path) && (item.subOptsActive = false);
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

    const handleSubOptionActive = (path: string) => {
        sidebarOptions.map((item) => {
            return {
                ...item,
                subOptions: item?.subOptions.map((sub, index) => {
                    sub.route === path ? (sub.active = true) : (sub.active = false);
                    return sub;
                }),
            };
        });
    };

    const handleMenu = (path: string) => {
        handleChange(path)
        handleSubOptionActive(path)
    }

    return (
        <>
            <ul className="nav nav-pills flex-column mx-2 my-2" style={{ overflow: 'auto' }}  >
                {asideBarOptions.map((option, index) => (
                    <div
                        key={GxUUID()}
                    >
                        <li
                            className="nav-item">
                            <Link
                                href={option.route}>
                                <p
                                    key={GxUUID()}
                                    onClick={() => handleMenu(option.route)}
                                    className={`nav-link my-1 shadow-lg d-flex justify-content-between align-items-center p-3  ${option.active ? "active active-border" : "bg-white"
                                        }`}
                                    style={{ borderLeft: "3px solid #396afc " }}
                                >
                                    <span>{option.name}</span>
                                    {option.subOptions.length > 0 && (
                                        <>
                                            {/* <FontAwesomeIcon icon={facheve} /> */}
                                            <i
                                                className={`fas fa-chevron-${option.subOptsActive ? "up" : "down"
                                                    } active-i`}
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
                            <ul className={`animate__animated`}>
                                {option.subOptions.map((subOption, index) => (
                                    <Link key={GxUUID()} href={subOption.route}>
                                        <li
                                            className={`nav-link my-1 p-2 ${subOption.active ? "active active-border" : "bg-white"
                                                }`}
                                            onClick={() => { handleMenu(subOption.route) }}
                                        >
                                            <i className="fas fa-road mx-2"></i>
                                            {subOption.name}
                                        </li>
                                    </Link>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </ul>
        </>
    );
};

export default Sidebar;
