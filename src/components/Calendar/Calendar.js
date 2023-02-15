import React, { useState } from 'react';
import { format, addMonths, subMonths } from 'date-fns';
import { ReactComponent as LeftIcon } from './../icons/chevron-left.svg';
import { ReactComponent as RightIcon } from './../icons/chevron-right.svg';

import './Calendar.scss';
const RenderHeader = ({ currentMonth, prevMonth, nextMonth }) => {
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
};

function Calendar(props) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  // const [selectedDate, setSelectedDate] = useState(new Date());

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };
  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };
  return (
    <div className="Calendar">
      <RenderHeader currentMonth={currentMonth} prevMonth={prevMonth} nextMonth={nextMonth} />
    </div>
  );
}

export default Calendar;
