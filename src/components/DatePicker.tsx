import React from "react";
interface DateTimeRangePickerPropsDto {
  label?: string;
  date?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const DateTimeRangePicker: React.FC<DateTimeRangePickerPropsDto> = ({
  date,
  label,
  onChange,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    const target = e.target as HTMLInputElement;
    target.showPicker();
  };
  return (
    <div>
      {label && (
        <label className="block  mb-1 text-secondary-900 text-sm">
          {label}
        </label>
      )}
      <input
        type="datetime-local"
        id="date"
        value={date}
        onChange={onChange}
        onClick={handleClick}
        style={{ colorScheme: "dark" }}
        className="bg-primary-300 block w-full  px-2 py-1 h-9 text-secondary-900  border border-secondary-800 rounded text-sm placeholder:text-secondary-900 "
        placeholder="Search Date and Time by typing"
      />
    </div>
  );
};

export default DateTimeRangePicker;
