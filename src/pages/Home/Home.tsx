import React from 'react';
import {Header} from "./components/Header/Header";
import {Now} from "./components/Now/Now"

export const Home = () => {
    return (
        <div className="home">
            <Header/>
            <Now />
        </div>
    );
};
