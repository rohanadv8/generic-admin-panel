// import { SelectInputProps } from "@/client/dto/component.dto";
// // import React, { useState } from "react";
// // ICON //
// import Select from "react-dropdown-select";

// const MutipleSelectInput: React.FC<SelectInputProps> = ({
//   options,

//   multi,
//   keyFunc,

//   onChange,
//   placeholder,
//   value = [],
// }) => {
//   // const [selectOptions] = useState<
//   //   Array<{ label: string; value: string | number }>
//   // >([]);
//   return (
//     <div>
//       <Select
//         className="placeholder:text-white text-white text-xs bg-gray-700 border border-gray-600 h-9"
//         placeholder={placeholder}
//         options={options?.map((option) => ({
//           label: option.label,
//           value: option.value,
//         }))}
//         // values={selectOptions}
//         values={value}
//         onChange={onChange}
//         multi={multi}
//         // searchFn={keyFunc}
//         searchFn={
//           keyFunc ||
//           (({ state }) =>
//             options.filter((option) =>
//               option.label.toLowerCase().includes(state.search.toLowerCase())
//             ))
//         }
//         itemRenderer={({ item, methods }) => (
//           <div
//             className="text-white bg-customGray text-xs h-9 border-b-2 hover:bg-blue-500 border-b-gray-500 py-2.5 px-2 cursor-pointer"
//             onClick={() => methods.addItem(item)}
//           >
//             {item.label}
//           </div>
//         )}
//       />
//     </div>
//   );
// };

// export default MutipleSelectInput;
