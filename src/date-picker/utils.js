import * as Data from "./data";

export const zeroPad = (value, length) => `${value}`.padStart(length, "0");

export const getYearsRange = (start, end) => {
  return Array(end - start + 1)
    .fill()
    .map((_, i) => start + i);
};

export const getMonthDays = (
  month = Data.THIS_MONTH,
  year = Data.THIS_YEAR
) => {
  const months30 = [4, 6, 9, 11];
  const leapYear = year % 4 === 0;

  return month === 2
    ? leapYear
      ? 29
      : 28
    : months30.includes(month)
    ? 30
    : 31;
};

export const getMonthFirstDay = (
  month = Data.THIS_MONTH,
  year = Data.THIS_YEAR
) => new Date(`${year}-${zeroPad(month, 2)}-01`).getDay();

export const isDate = (date) => {
  const isDate = Object.prototype.toString.call(date) === "[object Date]";
  const isValidDate = date && !Number.isNaN(date.valueOf());

  return isDate && isValidDate;
};

export const isSameMonth = (date, basedate = new Date()) => {
  if (!(isDate(date) && isDate(basedate))) return false;

  const basedateMonth = basedate.getMonth() + 1;
  const basedateYear = basedate.getFullYear();

  const dateMonth = date.getMonth() + 1;
  const dateYear = date.getFullYear();

  return basedateMonth === dateMonth && basedateYear === dateYear;
};

export const isSameDay = (date, basedate = new Date()) => {
  if (!(isDate(date) && isDate(basedate))) return false;

  const basedateDate = basedate.getDate();
  const basedateMonth = basedate.getMonth() + 1;
  const basedateYear = basedate.getFullYear();

  const dateDate = date.getDate();
  const dateMonth = date.getMonth() + 1;
  const dateYear = date.getFullYear();

  return (
    basedateDate === dateDate &&
    basedateMonth === dateMonth &&
    basedateYear === dateYear
  );
};

export const getPreviousMonth = (month, year) => {
  const prevMonth = month > 1 ? month - 1 : 12;
  const prevMonthYear = month > 1 ? year : year - 1;

  return { month: prevMonth, year: prevMonthYear };
};

export const getNextMonth = (month, year) => {
  const nextMonth = month < 12 ? month + 1 : 1;
  const nextMonthYear = month < 12 ? year : year + 1;

  return { month: nextMonth, year: nextMonthYear };
};
