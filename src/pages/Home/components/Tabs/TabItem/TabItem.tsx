import React from 'react';

export const TabItem = () => {
    return (
        <div className="weather-day__item">
            <div className="weather-day__item-title">Сегодня</div>
            <div className="weather-day__item-data">28 авг</div>
            <div className="weather-day__item-weather-icon">
                <img src="#" alt="weather"/>
            </div>
            <div className="weather-day__item-deg-day">+18°</div>
            <div className="weather-day__item-deg-night">+15°</div>
            <div className="weather-day__item-weather-description">Облачно</div>
        </div>
    );
};
