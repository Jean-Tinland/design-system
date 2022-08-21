import * as Utils from "./utils";

export const MODES = {
  SATURDAY: 0,
  SUNDAY: 1,
  CUSTOM: 2,
};

export const DISPLAYS = {
  DESKTOP: 0,
  TABLET: 1,
  PHONE: 2,
};

export const BREAKPOINTS = {
  TABLET: 955,
  PHONE: 650,
};

export const THIS_YEAR = new Date().getFullYear();

export const THIS_MONTH = new Date().getMonth() + 1;

export const MONTHS = {
  fr: {
    january: "Janvier",
    february: "Février",
    march: "Mars",
    april: "Avril",
    may: "Mai",
    june: "Juin",
    july: "Juillet",
    august: "Aout",
    september: "Septembre",
    october: "Octobre",
    november: "Novembre",
    december: "Décembre",
  },
  en: {
    january: "January",
    february: "February",
    march: "March",
    april: "April",
    may: "May",
    june: "June",
    july: "July",
    august: "August",
    september: "September",
    october: "October",
    november: "November",
    december: "December",
  },
};

export const SHORT_MONTHS = {
  fr: {
    january: "Jan",
    february: "Fév",
    march: "Mar",
    april: "Avr",
    may: "Mai",
    june: "Juin",
    july: "Juil",
    august: "Aou",
    september: "Sept",
    october: "Oct",
    november: "Nov",
    december: "Déc",
  },
  en: {
    january: "Jan",
    february: "Feb",
    march: "Mar",
    april: "Apr",
    may: "May",
    june: "Jun",
    july: "Jul",
    august: "Aug",
    september: "Sept",
    october: "Oct",
    november: "Nov",
    december: "Dec",
  },
};

export const WEEK_DAYS = {
  fr: {
    monday: "L",
    tuesday: "M",
    wednesday: "M",
    thursday: "J",
    friday: "V",
    saturday: "S",
    sunday: "D",
  },
  en: {
    monday: "M",
    tuesday: "T",
    wednesday: "W",
    thursday: "T",
    friday: "F",
    saturday: "S",
    sunday: "S",
  },
};

export const CALENDAR_WEEKS = 6;

export const calendar = (month = THIS_MONTH, year = THIS_YEAR) => {
  const monthDays = Utils.getMonthDays(month, year);
  const monthFirstDay = Utils.getMonthFirstDay(month, year);

  const daysFromPrevMonth = monthFirstDay === 0 ? 6 : monthFirstDay - 1;
  const daysFromNextMonth =
    CALENDAR_WEEKS * 7 - (daysFromPrevMonth + monthDays);

  const { month: prevMonth, year: prevMonthYear } = Utils.getPreviousMonth(
    month,
    year
  );
  const { month: nextMonth, year: nextMonthYear } = Utils.getNextMonth(
    month,
    year
  );

  const prevMonthDays = Utils.getMonthDays(prevMonth, prevMonthYear);

  const prevMonthDates = [...new Array(daysFromPrevMonth)].map((_, i) => {
    const day = i + 1 + (prevMonthDays - daysFromPrevMonth);
    return [prevMonthYear, Utils.zeroPad(prevMonth, 2), Utils.zeroPad(day, 2)];
  });

  const thisMonthDates = [...new Array(monthDays)].map((_, i) => {
    const day = i + 1;
    return [year, Utils.zeroPad(month, 2), Utils.zeroPad(day, 2)];
  });

  const nextMonthDates = [...new Array(daysFromNextMonth)].map((_, i) => {
    const day = i + 1;
    return [nextMonthYear, Utils.zeroPad(nextMonth, 2), Utils.zeroPad(day, 2)];
  });
  return [...prevMonthDates, ...thisMonthDates, ...nextMonthDates];
};
