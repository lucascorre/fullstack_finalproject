import React from "react";

import "./button.css"

type ButtonProps = {
	onClick?: any // trolololololololo
	type?: any // je suis un troll mais j'ai la flemme
	title?: any // la c'est juste pour troll
	disabled?: boolean
}

const Button = ({title, onClick, type="button", disabled}: ButtonProps) => {
	console.log(disabled);
	return(
		<button className={"button ripple"} type={type} onClick={onClick} disabled={disabled}>
			{title}
		</button>
	)
}

export default Button