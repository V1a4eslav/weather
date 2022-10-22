import {createSlice} from "@reduxjs/toolkit";

export interface ITabNavigation {
    // tabNavigation: any;
    label: string;
    days: any
}

export const tabNavigationSlice = createSlice({
    name: 'tabNavigation',
    initialState: {
        label: 'На 4 дня',
        days: null
    },
    reducers: {
        saveFilterLabel: (state, action) => {
            state.label = action.payload;
        },
        setWeekWeather: (state, action) => {
            state.days = action.payload;
        },
    }
});

export const {saveFilterLabel, setWeekWeather} = tabNavigationSlice.actions;
export default tabNavigationSlice.reducer;