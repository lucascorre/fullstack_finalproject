import React from "react";
import "./textinput.css";
type TextInputProps = {
    title: string;
    onChange: (e: React.FormEvent<HTMLInputElement>) => void;
};
declare const TextInput: (props: TextInputProps) => JSX.Element;
export default TextInput;
