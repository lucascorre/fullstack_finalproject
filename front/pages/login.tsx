import React from 'react';
import classes from "./login.module.scss";
import TextInput from "../src/components/common/inputs/TextInput";
import Button from "../src/components/common/button/Button";

export const Login = () => {
    return (
        <div className={classes.loginPage}>
            <div className={classes.loginContainer}>
                <h2>CONNEXION</h2>
                <div className={classes.form}>
                    <form>
                        <TextInput title={"Identifiant"}/>
                        <TextInput title={"Mot de passe"}/>
                        <Button title={"Connexion"}/>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login


// <div className={classes.loginContainer}>
//     <button>retour</button>
// <h4>CONNEXION</h4>
// <input/>Identifiant
// <input/>Mot de passe
// <button>Connexion</button>
// </div>
