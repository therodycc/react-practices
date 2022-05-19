import React from "react";
import { navOptions } from "../../../settings/nav";
import { v4 as GxUUID } from "uuid";

const Nav = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <div className="d-flex">
                        <div className="logo ">
                            <img
                                src="/assets/images/logo.svg"
                                alt=""
                                style={{ width: "50px" }}
                            />
                        </div>
                        <h5 className="text-white m-3 pt-1">React Practices</h5>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav me-auto">
                            {navOptions.map((option) => (
                                <li key={GxUUID()} className="nav-item">
                                    <a
                                        className={`nav-link ${option?.active && "active"}`}
                                        href="#"
                                    >
                                        {option?.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Nav;
