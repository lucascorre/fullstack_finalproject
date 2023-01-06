import React, {useState} from 'react';
import classes from './sign-in.module.scss'
import {Button, TextInput} from "@spideai/my-lib/dist/cjs";
import DropDown from "../src/components/common/Dropdown/DropDown";
import {useRouter} from "next/router";

export const SignIn = () => {
    const router = useRouter()

    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [nationality, setNationality] = useState("")

    const onFormSubmit = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: name,
                lastname: lastName,
                email: email,
                phone: phone,
                nationality: nationality
            })
        };
        fetch('http://localhost:8000/api/inscription', requestOptions)
            .then(response => response.json())
            .then(data => { console.log(data) })
            .then(() => router.push('sign-in/ok'))
    }

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
                    <h2 className={classes.title}>INSCRIPTION</h2>
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
                        <div className={classes.inputGroup}>
                            <div className={classes.inputContainer}>
                                <TextInput title={"Nom"} onChange={(e) => setLastName(e.currentTarget.value)}/>
                            </div>
                            <div className={classes.inputContainer}>
                                <TextInput title={"Prénom"} onChange={(e) => setName(e.currentTarget.value)}/>
                            </div>
                        </div>
                        <div className={classes.inputGroup}>
                            <div className={classes.inputContainer}>
                                <TextInput title={"Email"} onChange={(e) => setEmail(e.currentTarget.value)}/>
                            </div>
                            <div className={classes.inputContainer}>
                                <TextInput title={"Numéro de téléphone"} onChange={(e) => setPhone(e.currentTarget.value)}/>
                            </div>
                        </div>
                        <div className={classes.inputContainer}>
                            <DropDown
                                id={"selectNationalite"}
                                options={["pouette", "prout", "plouf"]}
                                label={"Nationalité"}
                                placeholder={"Sélectionner une valeur"}
                                changeNationality={setNationality}
                            />
                        </div>
                        <div className={classes.iAttest}>
                            <input type="checkbox" id="attest" name="attest"/>
                            <label htmlFor="attest">j’atteste que je possède un permis de conduire valide.</label>
                        </div>
                        <div className={classes.submitButtonContainer}>
                            <Button title="Demander mon inscription" onClick={onFormSubmit} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignIn;