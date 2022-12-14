import * as React from "react";
import classnames from "classnames";
import Button from "../button";
import * as Icons from "../icons";
import * as Utils from "./utils";
import * as Data from "./data";
import css from "./calendar-menu.module.css";

const Menu = ({
  lang,
  menuOpened,
  toggleMenu,
  year,
  currentYear,
  selectedMonth,
  minDate,
  maxDate,
  setMonth,
  setYear,
}) => {
  const ref = React.useRef<HTMLElement>(null);
  const minYear = minDate?.getFullYear() || currentYear - 122;
  const maxYear = maxDate?.getFullYear() || currentYear + 122;
  const yearRange = Utils.getYearsRange(minYear, maxYear);
  const [selectedYear, setSelectedYear] = React.useState(year);
  const [scrollBehavior, setScrollBehavior] =
    React.useState<ScrollBehavior>("auto");

  const months = Data.SHORT_MONTHS[lang];

  const updateSelected = (year: number) => {
    setSelectedYear(year);
    setScrollBehavior("smooth");
  };

  const selectPreviousYear = () => {
    const target = selectedYear - 1;
    if (target === minYear) {
      updateSelected(maxYear);
    } else {
      updateSelected(target);
    }
  };

  const selectNextYear = () => {
    const target = selectedYear + 1;
    if (target === maxYear) {
      updateSelected(minYear);
    } else {
      updateSelected(target);
    }
  };

  React.useEffect(() => {
    if (menuOpened) {
      const target = ref.current?.querySelector(
        `[data-year="${selectedYear}"]`
      );
      target?.scrollIntoView({
        behavior: scrollBehavior,
        block: "nearest",
        inline: "start",
      });
    }
  }, [menuOpened, scrollBehavior, selectedYear]);

  const classes = classnames(css.root, {
    [css.rootOpened]: menuOpened,
  });

  return (
    <div className={classes}>
      <div className={css.controls}>
        <Button className={css.control} onClick={selectPreviousYear}>
          <Icons.ChevronUp />
        </Button>
        <Button className={css.control} onClick={selectNextYear}>
          <Icons.ChevronDown />
        </Button>
        <Button className={css.close} onClick={toggleMenu}>
          <Icons.Cross />
        </Button>
      </div>
      <div className={css.bottom}>
        <div className={css.years}>
          <div
            // @ts-ignore
            ref={ref}
            className={css.yearsInner}
          >
            {yearRange.map((year: number) => {
              const classes = classnames(css.year, {
                [css.yearSelected]: year === selectedYear,
              });
              return (
                <Button
                  key={year}
                  data-year={year}
                  className={classes}
                  onClick={() => updateSelected(year)}
                >
                  {year}
                </Button>
              );
            })}
          </div>
        </div>
        <div className={css.months}>
          {Object.keys(months).map((key, i) => {
            const month = months[key];
            const index = i + 1;

            const updateSelectedYearAndMonth = () => {
              setYear(selectedYear);
              setMonth(index);
              toggleMenu();
            };

            const isInCurrentYear = year === selectedYear;

            const isDisabled =
              (isInCurrentYear && minDate && index < minDate.getMonth() + 1) ||
              (maxDate && index > maxDate.getMonth() + 1);

            const classes = classnames(css.month, {
              [css.monthSelected]: index === selectedMonth && isInCurrentYear,
            });

            return (
              <Button
                key={month}
                className={classes}
                onClick={updateSelectedYearAndMonth}
                disabled={isDisabled}
              >
                {month}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Menu;
