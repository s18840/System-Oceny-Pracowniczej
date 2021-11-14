import React, {useEffect, useState} from 'react';
import {ClockWrapper, TimeView, DateView} from '../../styles/DashboardStyles';
import {HighlightText} from '../../styles/GlobalStyle';
import {useTranslation} from 'react-i18next';

const addZero = n => n < 10 ? '0' + n : n;

function Clock() {
  const [time, setTime] = useState({time: "00:00:00", date: "date"});

  const startClock = () => {
    setTime(getTime)
    setInterval(() => setTime(getTime), 1000);
  };

  const getTime = () => {
    let date, hour, minute, second, time;
    let dayOfWeek, dayOfMonth, month, year, dateInfo;

    date = new Date();
    hour = addZero(date.getHours());
    minute = addZero(date.getMinutes());
    second = addZero(date.getSeconds());
    time = hour + ':' + minute + ':' + second;

    dayOfWeek = date.getDay();
    dayOfMonth = addZero(date.getDate());
    month = addZero(date.getMonth());
    year = date.getFullYear();

    dayOfWeek = getDayOfWeekString(dayOfWeek)
    dateInfo = `<HighlightText> ${dayOfWeek} </HighlightText>, ${dayOfMonth}.${month}.${year}`
    //TODO fix string with html tags

    return {
      time: time,
      date: dateInfo
    };

  };

  const {t} = useTranslation();

  const getDayOfWeekString = (dayOfWeek) => {
    switch(dayOfWeek){
      case 0:
        return t('DAY_7')
      case 1:
        return t('DAY_1')
      case 2:
        return t('DAY_2')
      case 3:
        return t('DAY_3')
      case 4:
        return t('DAY_4')
      case 5:
        return t('DAY_5')
      case 6:
        return t('DAY_6')
    }
  };

  useEffect(() => {
    startClock();
  }, []);

  return (
    <ClockWrapper>
      <TimeView>
        {time.time}
      </TimeView>
      <DateView>
        {time.date}
      </DateView>
    </ClockWrapper>
  );
}

export default Clock;
