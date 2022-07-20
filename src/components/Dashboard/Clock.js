import React, {useEffect, useState} from "react";
import {ClockWrapper, TimeView, DateView} from "../../styles/DashboardStyles";
import {HighlightText} from "../../styles/GlobalStyle";

const addZero = n => n < 10 ? "0" + n : n;

function Clock() {
  const [time, setTime] = useState({time: "00:00:00",dayOfWeek: "monday", date: "date"});

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
    time = hour + ":" + minute + ":" + second;

    dayOfWeek = date.getDay();
    dayOfMonth = addZero(date.getDate());
    month = addZero(date.getMonth() + 1);
    year = date.getFullYear();

    dayOfWeek = getDayOfWeekString(dayOfWeek)
    dateInfo = `${dayOfMonth}.${month}.${year}`
    //TODO fix string with html tags

    return {
      time: time,
      dayOfWeek: dayOfWeek,
      date: dateInfo
    };

  };

  const getDayOfWeekString = (dayOfWeek) => {
    switch(dayOfWeek){
    case 0:
      return "Monday"
    case 1:
      return "Tuesday"
    case 2:
      return "Wednesday"
    case 3:
      return "Thursday"
    case 4:
      return "Friday"
    case 5:
      return "Saturday"
    case 6:
      return "Sunday"
    }
  };

  useEffect(() => {
    startClock();
  });

  return (
    <ClockWrapper>
      <TimeView>
        {time.time}
      </TimeView>
      <DateView>
        <HighlightText>{time.dayOfWeek}</HighlightText>, {time.date}
      </DateView>
    </ClockWrapper>
  );
}

export default Clock;
