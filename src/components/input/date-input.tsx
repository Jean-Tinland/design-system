import * as React from "react";
import DatePicker from "../date-picker";
import * as Icons from "../icons";
import css from "./input.module.css";
import DateInputWrapper from "./date-input-wrapper";
import Input from "./input";
import * as Utils from "./utils";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  fieldRef?: HTMLInputElement | null;
  min?: string;
  max?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onValueChange?: (value: string) => void;
};

const DateInput = ({
  fieldRef,
  value,
  min,
  max,
  placeholder = "JJ/MM/AAAA",
  onChange,
  onValueChange,
  ...props
}: Props) => {
  const datePickerRef = React.useRef<HTMLElement>(null);
  const [datePickerVisible, setDatePickerVisible] = React.useState(false);

  const _onChange = (value: string) => {
    if (fieldRef) {
      Utils.triggerInputChange(fieldRef, value);
    }
  };

  const closeOnOutsideClick: EventListener = React.useCallback(
    (e) => {
      if (datePickerVisible) {
        const target = e.target as Element;
        if (
          fieldRef?.contains(target) ||
          datePickerRef.current?.contains(target)
        ) {
          return;
        }
        setDatePickerVisible(false);
      }
    },
    [datePickerVisible, fieldRef]
  );

  const toggleDatePicker = () => {
    setDatePickerVisible(!datePickerVisible);
  };

  React.useEffect(() => {
    document.body.addEventListener("click", closeOnOutsideClick);
    return () =>
      document.body.removeEventListener("click", closeOnOutsideClick);
  }, [closeOnOutsideClick]);

  const formatedValue =
    value && value !== "undefined" && typeof value === "string"
      ? new Date(value).toLocaleDateString("fr-FR")
      : placeholder;

  return (
    <>
      <Input
        type="text"
        value={value}
        onChange={onChange}
        onValueChange={onValueChange}
        hidden
      />
      <Input
        type="text"
        className={css.dateField}
        onClick={toggleDatePicker}
        value={formatedValue}
        readOnly
        {...props}
      >
        <Icons.Calendar className={css.calendarIcon} />
      </Input>
      {datePickerVisible && (
        <DateInputWrapper container={fieldRef}>
          <DatePicker
            ref={datePickerRef}
            className={css.datePicker}
            min={min}
            max={max}
            value={value}
            onChange={_onChange}
          />
        </DateInputWrapper>
      )}
    </>
  );
};

export default DateInput;
