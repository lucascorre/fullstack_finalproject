import React from "react";

import "./button.css"

type ButtonProps = {
	title: string
}

const Button = ({title}: ButtonProps) => {
  return(
		<button className={"button"} type="button">{title}</button>
	)
}

export default Button