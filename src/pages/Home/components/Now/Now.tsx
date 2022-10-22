import React, {useEffect} from 'react';
import './Now.scss';
import {useDispatch, useSelector} from "react-redux";
import {selectWeather} from "../../../../store/weather/selectors";
import {getWeather} from "../../../../sagas/getWeather/actions";
import {selectCity} from "../../../../store/cities/selectors";

export const Now = () => {
    const weather = useSelector(selectWeather);
    const selectedCity = useSelector(selectCity);
    // @ts-ignore
    const {label} = selectedCity;
    const dispatch = useDispatch();

    const countCelsiusDegFromKelvin = (temp: number) => {
        return (temp - 273.15).toFixed()|| 0;
    }

    useEffect(() => {
        dispatch(getWeather(label))
    }, [selectedCity]);

    return (
        <div className="now">
            <div className="now__container _container">
                <div className="now__body">
                    <div className="now__main-details main-details">
                        <div className="main-details__inner">
                            <p className="main-details__today-text">
                                <span
                                    className="main-details__deg">{weather ? countCelsiusDegFromKelvin(weather.main.temp) : '0'}°</span>
                                <span className="main-details__day">Сегодня</span>
                            </p>
                            <div className="main-details__icon">
                                <img src="./images/sun.svg" alt="weather-icon"/>
                            </div>
                        </div>
                        <div className="main-details__time">Время:
                            <span> {new Date().getHours()}:{new Date().getMinutes()}</span>
                        </div>
                        <div className="main-details__city">Город: <span>{weather?.name}</span></div>
                    </div>
                    <div className="now__details-more details-more">
                        <ul className="details-more__list">
                            <li className="details-more__item">
                                <div className="details-more__item-wrapper">
                                    <img className="details-more__item-img" src="./images/detailsWather/temp.png"
                                         alt=""/>
                                </div>
                                <span className="details-more__item-label">Температура</span>
                                <span
                                    className="details-more__item-info">{weather ? countCelsiusDegFromKelvin(weather?.main.temp) : '0'}° - ощущается как {weather ? countCelsiusDegFromKelvin(weather?.main.feels_like) : '0'}°</span>
                            </li>
                            <li className="details-more__item">
                                <div className="details-more__item-wrapper">
                                    <img className="details-more__item-img" src="./images/detailsWather/pressure.png"
                                         alt=""/>
                                </div>
                                <span className="details-more__item-label">Давление </span>
                                <span className="details-more__item-info">{weather ? weather?.main?.pressure : '0'} мм ртутного столба - нормальное</span>
                            </li>
                            <li className="details-more__item">
                                <div className="details-more__item-wrapper">
                                    <img className="details-more__item-img"
                                         src="./images/detailsWather/precipitation.png" alt=""/>
                                </div>
                                <span className="details-more__item-label">Осадки</span>
                                <span className="details-more__item-info">Без осадков</span>
                            </li>
                            <li className="details-more__item">
                                <div className="details-more__item-wrapper">
                                    <img className="details-more__item-img" src="./images/detailsWather/wind.png"
                                         alt=""/>
                                </div>
                                <span className="details-more__item-label">Ветер</span>
                                <span className="details-more__item-info">{weather?.wind.speed} м/с юго-запад - легкий ветер</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
