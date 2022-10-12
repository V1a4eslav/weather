import React, {useCallback, useEffect} from 'react';
import './Now.scss';
import {useDispatch, useSelector} from "react-redux";
import {getWatherFetch} from "../../../../store/slice/apiSlice";

export const Now = () => {
    // @ts-ignore
    const wather = useSelector(state => state.wather.api);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getWatherFetch())
    }, [dispatch]);
    console.log(new Date().toLocaleString())


    return (
        <div className="now">
            <div className="now__container _container">
                <div className="now__body">
                    <div className="now__main-details main-details">
                        <div className="main-details__inner">
                            <p className="main-details__today-text">
                                <span className="main-details__deg">20°</span>
                                <span className="main-details__day">Сегодня</span>
                            </p>
                            <div className="main-details__icon">
                                <img src="./images/sun.svg" alt="wather-icon"/>
                            </div>
                        </div>
                        <div className="main-details__time">Время:
                            <span> 21:00</span>
                        </div>
                        <div className="main-details__city">Город: <span>Dnipro</span></div>
                    </div>
                    <div className="now__details-more details-more">
                        <ul className="details-more__list">
                            <li className="details-more__item">
                                <div className="details-more__item-wrapper">
                                    <img className="details-more__item-img" src="./images/detailsWather/temp.png"
                                         alt=""/>
                                </div>
                                <span className="details-more__item-label">Температура</span>
                                <span className="details-more__item-info">20° - ощущается как 17°</span>
                            </li>
                            <li className="details-more__item">
                                <div className="details-more__item-wrapper">
                                    <img className="details-more__item-img" src="./images/detailsWather/pressure.png"
                                         alt=""/>
                                </div>
                                <span className="details-more__item-label">Давление </span>
                                <span className="details-more__item-info">765 мм ртутного столба - нормальное</span>
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
                                <span className="details-more__item-info">3 м/с юго-запад - легкий ветер</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
