import React, { useState } from 'react';

import './Calendar.scss';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek } from 'date-fns';
import axios from 'axios';
import { ReactComponent as LeftIcon } from '../icons/chevron-left.svg';
import { ReactComponent as RightIcon } from '../icons/chevron-right.svg';

function RenderHeader({ currentMonth, prevMonth, nextMonth }) {
  axios.get('/api/hello').then((res) => console.log(res));
  return (
    <div className="header">
      <div>
        <span className="text year">{format(currentMonth, 'yyyy')}년</span>
        <span className="text month">{format(currentMonth, 'M')}월</span>
      </div>
      <div>
        <LeftIcon className="arrow" onClick={prevMonth} />
        <RightIcon className="arrow" onClick={nextMonth} />
      </div>
      {/* <div>주/월 선텍 - 화면 비율 일정 이하로 줄어들면 나타남</div> */}
    </div>
  );
}

function RenderDays({ currentMonth, selectedDate, onDateClick }) {
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const endDay = format(monthEnd, 'd');
  // 시작요일, 마지막 요일 -> 월(1) ~ 일(7)
  const startWeekDay = format(monthStart, 'i');

  let i = 1;
  let k = startWeekDay - 1;
  const days = [];

  while (i <= endDay) {
    if (k !== 0) {
      k -= 1;
      days.push('');
    } else {
      days.push(i);
      i += 1;
    }
  }
  // days
  // function getDays(days2) {
  //   let count = 0;
  //   const weeks = Math.ceil(days2.length / 7);
  //   let weekCount = 0;
  //   for (let i = 0; i < weekCount; i += 1) {
  //     weekCount += 1;
  //   }
  // }

  console.log(days);

  // return <table>{getDays(days)}</table>;
}

function Calendar(props) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const week = ['월', '화', '수', '목', '금', '토', '일'];
  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };
  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };
  return (
    <div className="Calendar">
      <RenderHeader currentMonth={currentMonth} prevMonth={prevMonth} nextMonth={nextMonth} />
      <div className="week flex-around">
        {week.map((a) => (
          <span className="flex-center">{a}</span>
        ))}
      </div>
      {/* <div className="days" >g</div> */}
      <RenderDays currentMonth={currentMonth} />
    </div>
  );
}

export default Calendar;
