import classes from "./TextInput.module.scss"

type TextInputProps = {
	title: string
}

const TextInput = (props: TextInputProps) => {
	const { title } = props;
	return (
		<div className={classes.textInputContainer}>
			<label className={classes.label} htmlFor="input">{ title }</label>
			<input id="input" title="nom" className={classes.textInput} type={"text"}/>
		</div>
	)
};

export default TextInput