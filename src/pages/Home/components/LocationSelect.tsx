import React from 'react';
import Select from 'react-select'

const options = [
    {value: 'city-1', label: 'Dnipro'},
    {value: 'city-2', label: 'Lviv'},
    {value: 'city-3', label: 'Odessa'}
];

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
    return (
        <Select defaultValue={options[0]} styles={colourStyles} options={options}/>
    );
};
