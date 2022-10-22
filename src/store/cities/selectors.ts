import {IStore} from "../store";

export const selectCity = (state:IStore)=> state.cities.city;
export const citiesList = (state:IStore)=>state.cities.cities;