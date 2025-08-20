import { IconProp } from "@fortawesome/fontawesome-svg-core";
// import { SelectRenderer } from "react-dropdown-select";
export interface NavbarLinkProps {
  buttonIconClass: "iconButton";
  path: string;
  text: string;
  navicon: IconProp;
}
export interface ButtonPropsDto {
  color: "red" | "black" | "blackLogin";

  text: string;
  icon?: React.ReactNode;
  onClick: () => void;
}
export interface InputProps {
  label?: string;
  inputPlace?: "passwordClass" | "basicClasses";
  placeholder?: string;
  type: "text" | "number" | "password";
  value?: string | number;
  name: string;
  error: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isMandatory?: boolean;
}
export interface SelectInputProps {
  options: Array<{ label: string; value: number | string }>;
  //   keyFunc?: ({
  //     props,
  //     state,
  //     methods,
  //   }: SelectRenderer<{ label: string; value: string | number }>) => {
  //     label: string;
  //     value: string | number;
  //   }[];
  onChange: (value: { label: string; value: number | string }[]) => void;
  placeholder: string;
  multi: boolean;
  value?: { label: string; value: string | number }[];
}
export interface PaginationDto {
  currentPage: number;
  count: number;
  limit: number;
  handlePageChange(key: number): void;
  handleItemsPerPage: (limit: number) => void;
  itemsPerPage: number;
}
export interface SelectFieldProps {
  value?: string;
  name?: string;
  options: MarketList[];
  onChange: (e: { target: { value: string } }) => void;
  error: string;
  defaultOption?: string;
  optionAll: boolean;
  isMandatory?: boolean;
  label?: string;
}
export interface MarketList {
  label: string;
  value: string;
}
export interface CategoryList {
  label: string;
  value: string;
}
