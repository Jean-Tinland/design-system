import * as React from "react";
import Button from "../button";
import * as Icons from "../icons";
import css from "./calendar-header.module.css";

const CalendarHeader = ({
  goToPreviousMonth,
  goToNextMonth,
  toggleMenu,
  monthName,
  year,
  pastMonthDisabled,
  futureMonthDisabled,
  yearSelectLocked,
}) => {
  return (
    <div className={css.header}>
      <Button
        className={css.control}
        onClick={goToPreviousMonth}
        disabled={!!pastMonthDisabled}
      >
        <Icons.ChevronLeft />
      </Button>
      <Button
        className={css.title}
        onClick={toggleMenu}
        disabled={!!yearSelectLocked}
      >
        {monthName} {year} <Icons.ChevronDown />
      </Button>
      <Button
        className={css.control}
        onClick={goToNextMonth}
        disabled={!!futureMonthDisabled}
      >
        <Icons.ChevronRight />
      </Button>
    </div>
  );
};

export default CalendarHeader;
