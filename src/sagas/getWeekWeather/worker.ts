// @ts-ignore
import {delay, takeEvery, call, put} from "redux-saga/effects";
import {setWeekWeather} from '../../store/tabNavigation/tabNavigationSlice'

// @ts-ignore
const fetchWeekWeather = async ({lat, lon}) => {
    try {
        const KEY = 'f6b02255e6c50d695f296995071f4aed';
        const URL = `https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${lat}&lon=${lon}&appid=${KEY}`
        const response = await fetch(URL);
        const responseJSON = await response.json();
        return responseJSON;
    } catch (error) {
        console.warn('fetchWeekWeather', error)
    }
}

// @ts-ignore
function* workerGetWeekWeather({payload}) {
    try {
        yield  delay(1000);
        // @ts-ignore
        const weather = yield  call(fetchWeekWeather, payload);
        // @ts-ignore
        yield put(setWeekWeather(weather))
    } catch (error) {
        console.warn('workerGetWeekWeather', error);
        return null;
    }
}

// @ts-ignore
export function* watchGetWeekWeather() {
    // @ts-ignore
    yield takeEvery('@saga/GET_WEEK_WEATHER', workerGetWeekWeather)
}