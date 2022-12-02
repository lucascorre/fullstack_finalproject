import React from "react";
import "./textinput.css"

type TextInputProps = {
	title: string
}

const TextInput = (props: TextInputProps) => {
	const { title } = props;
	return (
		<div className={"textInputContainer"}>
			<label className={"label"} htmlFor="input">{ title }</label>
			<input id="input" className={"textInput"} type={"text"}/>
		</div>
	)
};

export default TextInput