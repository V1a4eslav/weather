import {call, put, takeEvery} from 'redux-saga/effects';
import {getWatherSuccess} from "../store/slice/apiSlice";

function* workWatherFetch() {
    const wather =yield call(() => fetch(`https://api.openweathermap.org/data/2.5/weather?q=dnipro&appid=6bf82fbba693abc9355a8191dd684238`));
    const formattedWather = yield wather.json();
    yield  put(getWatherSuccess(formattedWather));
}

function* watherSaga() {
    yield takeEvery('wather/getWatherFetch', workWatherFetch);
}

export default  watherSaga;