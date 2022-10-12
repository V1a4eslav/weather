import React from 'react';
import './Header.scss';
import {LocationSelect} from "../LocationSelect";
import {Link} from "react-router-dom";

export const Header = () => {
    return (
        <header className="header">
            <div className="header__container _container">
                <div className="header__body">
                    <Link to={'/'} className="header__logo">
                        <img className="header__logo-img" src="./images/logo.png" alt="logo-img"/>
                        <span className="header__logo-text">React weather</span>
                    </Link>
                    <div className="header__actions">
                        <button className="header__theme-btn">
                            <img src="./images/drop.svg" alt=""/>
                        </button>
                        <LocationSelect />
                    </div>
                </div>
            </div>
        </header>
    );
};
