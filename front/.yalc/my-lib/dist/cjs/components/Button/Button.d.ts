/// <reference types="react" />
import "./button.css";
type ButtonProps = {
    onClick?: any;
    type?: any;
    title?: any;
};
declare const Button: ({ title, onClick, type }: ButtonProps) => JSX.Element;
export default Button;
