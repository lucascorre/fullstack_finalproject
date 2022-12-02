
import classes from "./DropDown.module.scss"
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
        <div className={classes.textInputContainer}>
            <label className={classes.label} htmlFor={id}>{label}</label>
            <select
                id={id}
                className={`${classes.selectInput} ${value === placeholder ? classes.placeholder: classes.selected }`}
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