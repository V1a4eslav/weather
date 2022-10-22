import {configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import {IWeatherReducer, weatherSlice} from "./weather/weatherSlice";
import rootSaga from "../sagas/saga";
import {ICities, citiesSlice} from "./cities/citiesSlice";
import {ITabNavigation, tabNavigationSlice} from "./tabNavigation/tabNavigationSlice";

const saga = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        cities:citiesSlice.reducer,
        weather: weatherSlice.reducer,
        tabNavigation:tabNavigationSlice.reducer
    },
    middleware: [saga]
})

saga.run(rootSaga)

export interface IStore {
    weather: IWeatherReducer;
    cities:ICities;
    labelTab:ITabNavigation
};
