import React from 'react';
import './App.scss';
import {RootRouter} from "../router/rootRouter";

export const App = () => {
    return (
        <div className="App">
           <RootRouter />
        </div>
    );
}

