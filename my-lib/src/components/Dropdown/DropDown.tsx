
import "./DropDown.css"
import {useState} from "react";
import React from "react";

type DropDownProps = {
    id: string
    options: string[],
    label: string,
    placeholder: string
}

const DropDown = (props: DropDownProps) => {
    const { id, options, label, placeholder } = props;
    const [value, setValue] = useState(placeholder);
    const onSelectChange = (event: any) => {
        setValue(event.currentTarget.value);
    }
    return (
        <div className={"textInputContainer"}>
            <label className={"label"} htmlFor={id}>{label}</label>
            <select
                id={id}
                className={`${"selectInput"} ${value === placeholder ? "placeholder": "selected" }`}
                onChange={onSelectChange}
                value={value}
            >
                <option hidden>{placeholder}</option>
                { options.map((option, key) => (
                    <option key={key} value={option}>{option}</option>
                ))}
            </select>
        </div>
    )
};

export default DropDown