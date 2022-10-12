import {configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import {apiSlice} from "./slice/apiSlice";
import watherSaga from "../sagas/apiSaga";

const saga = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        wather: apiSlice.reducer
    },
    middleware: [saga]
})

saga.run(watherSaga)