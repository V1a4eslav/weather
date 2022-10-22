import {IStore} from "../store";

export const selectWeather = (state:IStore)=>state.weather.data;
export const selectIsWeatherLoading = (state: IStore) => state.weather.isLoading;