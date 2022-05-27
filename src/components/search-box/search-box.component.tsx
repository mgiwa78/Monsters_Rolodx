import "./search-box.styles.css";

import { ChangeEventHandler } from "react";
import { ChangeEvent } from "react";

// typing object using interface
// offers extensibility
// and overloading

// interface IsearchProps extends IChangeHandlerProps {
//   className: string;
//   placeholder?: string;
// }
// interface IChangeHandlerProps {
//   onChangeHandler: (a: string) => void;
// }

// // typing object using type
// // offers union
type SearchBoxProps = {
  className: string;
  placeholder?: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};
// type CanadianAddress = {
//   street: string;
//   province: string;
// };
// type USAddress = {
//   street: string;
//   state: string;
// };

// type NorthAmericanAddress = CanadianAddress | USAddress;

// const Address: NorthAmericanAddress = {
//   street: "aaa",
//   province: "aaa",
// };
const SearchBox = ({
  className,
  placeholder,
  onChangeHandler,
}: SearchBoxProps) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={(e) => onChangeHandler(e)}
  />
);

export default SearchBox;
