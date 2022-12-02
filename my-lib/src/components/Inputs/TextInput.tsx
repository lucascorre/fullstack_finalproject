import React from "react";
import "./TextInput.css"

type TextInputProps = {
	title: string
}

const TextInput = (props: TextInputProps) => {
	const { title } = props;
	return (
		<div className={"textInputContainer"}>
			<label className={"label"} htmlFor="input">{ title }</label>
			<input id="input" title="nom" className={"textInput"} type={"text"}/>
		</div>
	)
};

export default TextInput