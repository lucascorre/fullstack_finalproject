import React from "react";
import "./textinput.css"

type TextInputProps = {
	title: string
	onChange: (e: React.FormEvent<HTMLInputElement>) => void
}

const TextInput = (props: TextInputProps) => {
	const { title, onChange } = props;
	return (
		<div className={"textInputContainer"}>
			<label className={"label"} htmlFor="input">{ title }</label>
			<input id="input" className={"textInput"} type={"text"} onChange={onChange}/>
		</div>
	)
};

export default TextInput