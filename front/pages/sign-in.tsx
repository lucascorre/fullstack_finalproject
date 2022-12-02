import React from 'react';
import classes from './sign-in.module.scss'
import TextInput from '../src/components/common/inputs/TextInput';
import DropDown from "../src/components/common/dropdown/DropDown";
import { Button } from "../.yalc/@spideai/my-lib/dist/cjs";

export const SignIn = () => {
    return(
        <div className={classes.signInPage}>
            <div className={classes.descriptionContainer}>
                <div>
                    <p><span>▷</span> Depuis 2008, RIDE, agence de location de voitures de luxe propose ses services partout en France (Paris, Monaco, Nice, Cannes, Saint-Tropez, Courchevel, Saint-Moritz...).
                        Notre expérience est à votre service pour répondre à toutes vos demandes</p>
                    <hr/>
                </div>
            </div>
            <div className={classes.signInFormContainer}>
                <div className={classes.form}>
                    <h2>INSCRIPTION</h2>
                    <form onChange={() => {}}>
                        <fieldset className={classes.fieldset}>
                            <legend>Je suis:</legend>
                            <div>
                                <input type="radio" id="enterprise" name="iAm" value="enterprise" defaultChecked/>
                                <label htmlFor="enterprise">une entreprise</label>
                            </div>
                            <div>
                                <input type="radio" id="private" name="iAm" value="private"/>
                                <label htmlFor="private">un particulier</label>
                            </div>
                        </fieldset>
                        <div className={classes.inputContainer}>
                            <TextInput title={"Nom"}/>
                            <TextInput title={"Prénom"}/>
                        </div>
                        <div className={classes.inputContainer}>
                            <TextInput title={"Email"}/>
                            <TextInput title={"Numéro de téléphone"}/>
                        </div>
                        <div className={classes.inputContainer}>
                            <DropDown id={"selectNationalite"} options={["pouette", "prout", "plouf"]} label={"Nationnalité"} placeholder={"Sélectionner une valeur"}/>
                        </div>
                        <div className={classes.iAttest}>
                            <input type="checkbox" id="attest" name="attest"/>
                            <label htmlFor="attest">j’atteste que je possède un permis de conduire valide.</label>
                        </div>
                        <div className={classes.submitButtonContainer}>
                            <Button   label="coucou"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignIn;