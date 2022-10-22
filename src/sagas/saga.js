import {watcherGetWeather} from "./getWeather/worker";
import {spawn} from 'redux-saga/effects';
import {watchGetWeekWeather} from "./getWeekWeather/worker";

export default function* rootSaga() {
    try {
        yield  spawn(watcherGetWeather);
        yield  spawn(watchGetWeekWeather)
    } catch (error) {
        console.warn('rootSaga: ', error);
    }
}