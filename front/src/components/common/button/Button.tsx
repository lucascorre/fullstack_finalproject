import React from "react";

import classes from "./button.module.scss"

type ButtonProps = {
	title: string
}



const Button = ({title}: ButtonProps) => {
  return(
		<button className={classes.button} type="button">{title}</button>
	)
}

export default Button