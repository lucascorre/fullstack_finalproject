/// <reference types="react" />
import "./button.css";
type ButtonProps = {
    onClick?: any;
    type?: any;
    title?: any;
    disabled?: boolean;
};
declare const Button: ({ title, onClick, type, disabled }: ButtonProps) => JSX.Element;
export default Button;
