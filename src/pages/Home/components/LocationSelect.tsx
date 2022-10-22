import React from 'react';
import Select from 'react-select'
import {useDispatch, useSelector} from "react-redux";
import {citiesList, selectCity} from "../../../store/cities/selectors";
import {setLabel} from '../../../store/cities/citiesSlice'

const colourStyles = {
    control: (styles: any) => ({
        ...styles,
        backgroundColor: 'rgba(71, 147, 255, 0.2)',
        borderRadius: '10px',
        fontWeight: '500',
        fontSize: '16px',
        lineHeight: '20px',
        color: '#000',
        width: '194px',
    }),
    option: (styles: any) => ({
        ...styles,
        backgroundColor: 'rgba(71, 147, 255, 0.2)',
        fontWeight: '500',
        fontSize: '16px',
        lineHeight: '20px',
        color: '#000',
        width: '194px',
    }),
}

export const LocationSelect = () => {
    const selectedCity = useSelector(selectCity);
    const cities = useSelector(citiesList);
    const dispatch = useDispatch();

    const onSelectCity = (city:any) => {
        dispatch(setLabel(city))
    }
    return (
        <Select defaultValue={selectedCity} styles={colourStyles} options={cities}
                onChange={value => onSelectCity(value)}/>
    );
};
