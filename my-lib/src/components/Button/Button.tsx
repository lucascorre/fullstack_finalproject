import React from "react";

import "./button.css"

type ButtonProps = {
	onClick?: any // trolololololololo
	type?: any // je suis un troll mais j'ai la flemme
	title?: any // la c'est juste pour troll
}

const Button = ({title, onClick, type="button"}: ButtonProps) => {
  return(
		<button className={"button ripple"} type={type} onClick={onClick}>
			{title}
		</button>
	)
}

export default Button