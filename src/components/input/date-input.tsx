import * as React from "react";
import DatePicker from "../date-picker";
import css from "./input.module.css";
import DateInputWrapper from "./date-input-wrapper";
import Input from "./input";
import * as Utils from "./utils";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  fieldRef: React.RefObject<HTMLInputElement>;
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

  const dateValue = value && value !== "undefined" && new Date(value as string);

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
          fieldRef.current?.contains(target) ||
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

  const formatedValue = dateValue
    ? dateValue.toLocaleDateString("fr-FR")
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
        icon="Calendar"
        className={css.dateField}
        onClick={toggleDatePicker}
        value={formatedValue}
        readOnly
        {...props}
      />
      {datePickerVisible && (
        <DateInputWrapper fieldRef={fieldRef}>
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
