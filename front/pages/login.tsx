import React from 'react';
import classes from "./login.module.scss";

export const Login = () => {
  return(
    <div className={classes.loginPage}>
      <div className={classes.loginContainer}>
        <button>retour</button>
        <h4>CONNEXION</h4>
        <input/>
        <label>
          Identifiant
        </label>
        <input/>
        Mot de passe
        <button>Connexion</button>
      </div>
    </div>
  );
}
