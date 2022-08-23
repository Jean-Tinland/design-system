import * as React from "react";
import classnames from "classnames";
import DateItem from "./date-item";
import Button from "../button";
import * as Icons from "../icons";
import * as Data from "./data";
import * as Utils from "./utils";
import css from "./date-picker.module.css";
import Menu from "./menu";

type Props = {
  lang?: string;
  className?: string;
  min?: number | string;
  max?: number | string;
  value?: string | number | readonly string[];
  onChange: (value: string) => void;
  defaultMonth?: number;
  defaultYear?: number;
};

const DatePicker = React.forwardRef(
  (
    {
      lang = "fr",
      className,
      min,
      max,
      value,
      onChange,
      defaultMonth,
      defaultYear,
    }: Props,
    ref
  ) => {
    const locale =
      lang || (typeof navigator !== "undefined" && navigator.language) === "fr"
        ? "fr"
        : "en";
    const now = new Date();
    const date = value && new Date(value as string);
    const dateMonth = date && date.getMonth() + 1;
    const dateYear = date && date.getFullYear();

    const minDate = min && new Date(min);
    if (minDate) minDate.setHours(0, 0, 0, 0);
    const maxDate = max && new Date(max);
    if (maxDate) maxDate.setHours(0, 0, 0, 0);

    const currentMonth = now.getMonth() + 1;
    const currentYear = now.getFullYear();

    const [menuOpened, setMenuOpened] = React.useState(false);
    const [month, setMonth] = React.useState(
      defaultMonth || dateMonth || currentMonth
    );
    const [year, setYear] = React.useState(
      defaultYear || dateYear || currentYear
    );

    const pastMonthDisabled =
      (minDate &&
        month <= minDate.getMonth() + 1 &&
        year <= minDate.getFullYear()) ||
      (minDate && !maxDate && month <= currentMonth && year <= currentYear);

    const futureMonthDisabled =
      (maxDate &&
        month >= maxDate.getMonth() + 1 &&
        year >= maxDate.getFullYear()) ||
      (maxDate && !minDate && month >= currentMonth && year >= currentYear);

    const yearSelectLocked = pastMonthDisabled && futureMonthDisabled;

    const i18nMonths = Data.MONTHS[locale];
    const monthName = i18nMonths[Object.keys(i18nMonths)[month - 1]];
    const i18nWeekDays = Data.WEEK_DAYS[locale];
    const days = Object.keys(i18nWeekDays);
    const calendarDates = Data.calendar(month, year);

    const gotoPreviousMonth = () => {
      const { month: newMonth, year: newYear } = Utils.getPreviousMonth(
        month,
        year
      );
      setMonth(newMonth);
      setYear(newYear);
    };

    const gotoNextMonth = () => {
      const { month: newMonth, year: newYear } = Utils.getNextMonth(
        month,
        year
      );
      setMonth(newMonth);
      setYear(newYear);
    };

    const toggleMenu = () => {
      setMenuOpened(!menuOpened);
    };

    const classes = classnames(css.root, className);

    return (
      <div
        // @ts-ignore
        ref={ref}
        className={classes}
      >
        <div className={css.inner}>
          <div className={css.header}>
            <Button
              className={css.control}
              onClick={gotoPreviousMonth}
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
              onClick={gotoNextMonth}
              disabled={!!futureMonthDisabled}
            >
              <Icons.ChevronRight />
            </Button>
          </div>
          <div className={css.days}>
            {days.map((day, i) => (
              <div key={`${day}-${i}`} className={css.day}>
                {i18nWeekDays[day]}
              </div>
            ))}
          </div>
          <div className={css.dates}>
            {calendarDates.map((date, i) => (
              <DateItem
                key={i}
                date={date}
                month={month}
                year={year}
                value={value}
                onChange={onChange}
                minDate={minDate}
                maxDate={maxDate}
              />
            ))}
          </div>
          <Menu
            lang={locale}
            menuOpened={menuOpened}
            toggleMenu={toggleMenu}
            year={year}
            currentYear={currentYear}
            selectedMonth={month}
            minDate={minDate}
            maxDate={maxDate}
            setMonth={setMonth}
            setYear={setYear}
          />
        </div>
      </div>
    );
  }
);

DatePicker.displayName = "DatePicker";

export default DatePicker;
