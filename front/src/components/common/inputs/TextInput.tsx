import classes from "./TextInput.module.scss"

const TextInput = () => {
	return (
		<div style={{backgroundColor: "#BADA55", padding: `1rem`}}>
			<label className={classes.label} htmlFor="input">titre</label>
			<input id="input" title="coucou" className={classes.textInput} type={"text"}/>
		</div>
	)
}

export default TextInput