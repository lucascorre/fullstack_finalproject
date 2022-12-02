import React from 'react';
import classes from "./login.module.scss";

export const Login = () => {
  return(
    <div className={classes.loginPage}>
      <div className={classes.loginContainer}>
        <h2>CONNEXION</h2>
          <form>

          </form>
      </div>
    </div>
  );
}

export default Login


// <div className={classes.loginContainer}>
//     <Button>retour</Button>
// <h4>CONNEXION</h4>
// <input/>Identifiant
// <input/>Mot de passe
// <Button>Connexion</Button>
// </div>
