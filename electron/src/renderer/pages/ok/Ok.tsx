import React from 'react';
import classes from '../sign-in/sign-in.module.scss'
import classses from "./ok.module.scss"
import Image from './image.svg'
import bgimg from 'renderer/images/bgImg.png';

export const Ok = () => {
	return(
		<div className={classes.signInPage}>
      <div className={classes.descriptionContainer} style={{backgroundImage: `url(${bgimg})`}}>
				<div>
					<p><span>▷</span> Depuis 2008, RIDE, agence de location de voitures de luxe propose ses services partout en France (Paris, Monaco, Nice, Cannes, Saint-Tropez, Courchevel, Saint-Moritz...).
						Notre expérience est à votre service pour répondre à toutes vos demandes</p>
					<hr/>
				</div>
			</div>
			<div className={classses.signInFormContainer}>
				<div className={classes.form}>
					<h2 className={classes.title}>INSCRIPTION</h2>
					<div>
						<img src={Image} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Ok;
