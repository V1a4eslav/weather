// @ts-ignore

import {createSlice} from '@reduxjs/toolkit';

export const apiSlice = createSlice({
    name: 'wather',
    initialState: {
        api: [],
        isLoading: false,
    },
    reducers: {
        getWatherFetch: (state) => {
            state.isLoading = true;
        },
        getWatherSuccess:(state,action)=>{
            state.api = action.payload;
            state.isLoading = false;
        },
        getWatherFailure:(state)=>{
            state.isLoading = false;
        }
    }
});

export const {getWatherFetch,getWatherSuccess,getWatherFailure} = apiSlice.actions;
export default  apiSlice.reducer;