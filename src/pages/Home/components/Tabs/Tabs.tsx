import React, {useEffect} from 'react';
import './Tabs.scss';
import {TabItem} from "./TabItem/TabItem";
import {useDispatch, useSelector} from "react-redux";
import {filterLabel} from "../../../../store/tabNavigation/selectors";
import {saveFilterLabel} from "../../../../store/tabNavigation/tabNavigationSlice";
import {getWeekWeather} from "../../../../sagas/getWeekWeather/actions";
import {selectWeather} from "../../../../store/weather/selectors";

export const Tabs = () => {
    const dispatch = useDispatch();
    const label = useSelector(filterLabel);
    const weather = useSelector(selectWeather);

    const onClickFilterButton = (label: string) => {
        dispatch(saveFilterLabel(label));
    }

    const buttonArray = [
        {label: 'На 4 дня', className: "tabs__btn"},
        {label: 'На месяц', className: "tabs__btn"},
        {label: 'На 10 дней', className: "tabs__btn"}
    ]

    useEffect(() => {
        // @ts-ignore
        dispatch(getWeekWeather({
            lat: weather?.coord.lat,
            lon: weather?.coord.lon
        }))
    }, [weather]);


    return (
        <div className="tabs">
            <div className="tabs__container _container">
                <div className="tabs__inner">
                    <div className="tabs__buttons">
                        {buttonArray.map((button) => (
                            <button key={button.label}
                                    onClick={() => onClickFilterButton(button.label)}
                                    className={[button.className, label === button.label ? "_active" : null].join(' ')}>
                                {button.label}
                            </button>
                        ))}
                    </div>
                    <div className="tabs__body weather-day">
                        <TabItem/>
                    </div>
                </div>
            </div>
        </div>
    );
};
