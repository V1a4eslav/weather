import {createSlice} from '@reduxjs/toolkit';

export interface IWeatherData {
    "coord": {
        "lon": number,
        "lat": number
    },
    "weather": [
        {
            "id": number,
            "main": string,
            "description": string,
            "icon": string
        }
    ],
    "base": string,
    "main": {
        "temp": number,
        "feels_like": number,
        "temp_min": number,
        "temp_max": number,
        "pressure": number,
        "humidity": number,
        "sea_level": number,
        "grnd_level": number
    },
    "visibility": number,
    "wind": {
        "speed": number,
        "deg": number,
        "gust": number
    },
    "clouds": {
        "all": number
    },
    "dt": number,
    "sys": {
        "country": string,
        "sunrise": number,
        "sunset": number
    },
    "timezone": number,
    "id": number,
    "name": string,
    "cod": number

}
export interface IWeatherReducer {
    data: IWeatherData | null,
    isLoading: boolean
}
export const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        data: null,
        isLoading: false,
    },
    reducers: {
        setWeather: (state, action) => {
            state.data = action.payload;
        },
        setLoader: (state, action) => {
            state.isLoading = action.payload;
        }
    }
});

export const {setWeather, setLoader} = weatherSlice.actions;
export default weatherSlice.reducer;