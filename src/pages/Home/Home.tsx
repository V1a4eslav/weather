import React from 'react';
import {Header} from "./components/Header/Header";
import {Now} from "./components/Now/Now"
import {Tabs} from "./components/Tabs/Tabs";

export const Home = () => {
    return (
        <div className="home">
            <Header/>
            <Now/>
            <Tabs/>
        </div>
    );
};
