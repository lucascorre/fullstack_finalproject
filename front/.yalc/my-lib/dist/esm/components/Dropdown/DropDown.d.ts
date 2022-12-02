/// <reference types="react" />
import "./DropDown.css";
type DropDownProps = {
    id: string;
    options: string[];
    label: string;
    placeholder: string;
};
declare const DropDown: (props: DropDownProps) => JSX.Element;
export default DropDown;
