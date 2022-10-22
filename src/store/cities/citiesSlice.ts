import {createSlice} from "@reduxjs/toolkit";

export interface ICities {
    cities: string[];
    city: string
};

const CITIES = [
    {value: 'city-1', label: 'Dnipro'},
    {value: 'city-2', label: 'Lviv'},
    {value: 'city-3', label: 'Odessa'}
];

export const citiesSlice = createSlice({
    name: 'cities',
    initialState: {
        cities: CITIES,
        city: CITIES[0]
    },
    reducers: {
        setLabel: (state, action) => {
            state.city = action.payload;
        }
    }
});

export const {setLabel} = citiesSlice.actions;
export default citiesSlice.reducer;