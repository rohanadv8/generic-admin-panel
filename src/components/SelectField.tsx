import { SelectFieldProps } from "@/client/dto/component.dto";

const SelectField: React.FC<SelectFieldProps> = ({
  optionAll,
  onChange,
  options,
  error,
  name,
  value,
  defaultOption,
  isMandatory,
  label,
}) => {
  return (
    <div>
      {label && (
        <label className="block  mb-1 text-secondary-900 text-sm">
          {label}
          {isMandatory && <span className=" pl-1 text-red-500">*</span>}
        </label>
      )}
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full text-sm  bg-primary-300 border border-secondary-800 h-9  rounded-md py-2 px-2.5 ${
          value === "" ? "text-secondary-900" : "text-secondary-900"
        }  `}
      >
        <option value="" disabled>
          {defaultOption}
        </option>
        <option value="All" hidden={!optionAll}>
          ALL
        </option>
        {options?.map((option, index) => (
          <option key={index + 1 + "" + option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
};

export default SelectField;
