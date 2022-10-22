import {call, put, delay, takeEvery} from 'redux-saga/effects';
import {setWeather} from "../../store/weather/weatherSlice";

const fetchWeather = async (city: string) => {
    try {
        const KEY = '6bf82fbba693abc9355a8191dd684238';
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`;
        const response = await fetch(URL);
        const responseJSON = await response.json();
        return responseJSON;
    } catch (error) {
        console.warn('fetchWeather', error);
        return null;
    }
}

function* workerGetWeather({payload}: { type: string; payload: string }) {
    try {
        yield  delay(500);
        // @ts-ignore
        const weather = yield call(fetchWeather, payload);
        console.log(weather)
        yield put(setWeather(weather));
    } catch (error) {
        console.warn('workerGetWeather', error);
        return null;
    }
}

export function* watcherGetWeather() {
    yield takeEvery('@saga/GET_WEATHER', workerGetWeather);
}