import React, {useState} from 'react';
import classes from 'renderer/pages/sign-in/sign-in.module.scss'
import DropDown from "renderer/components/common/Dropdown/DropDown";
import Button from 'renderer/components/Button';
import TextInput from 'renderer/components/Inputs';
import bgimg from 'renderer/images/bgImg.png'
import { useNavigate } from 'react-router-dom';

export const SignIn = () => {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [nationality, setNationality] = useState("")

    // const onFormSubmit = () => {
    //     const requestOptions = {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({
    //             name: name,
    //             lastname: lastName,
    //             email: email,
    //             phone: phone,
    //             nationality: nationality
    //         })
    //     };
    //     fetch('http://localhost:8000/api/inscription', requestOptions)
    //         .then(response => response.json())
    //         .then(data => { console.log(data) })
    //         .then(() => navigate('signIn/ok'))
    // }

  const onFormSubmit = () => navigate('signIn/ok')

    return(
        <div className={classes.signInPage}>
            <div className={classes.descriptionContainer} style={{backgroundImage: `url(${bgimg})`}}>
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
                                <TextInput title={"Nom"} onChange={(e: any) => setLastName(e.currentTarget.value)}/>
                            </div>
                            <div className={classes.inputContainer}>
                                <TextInput title={"Prénom"} onChange={(e: any) => setName(e.currentTarget.value)}/>
                            </div>
                        </div>
                        <div className={classes.inputGroup}>
                            <div className={classes.inputContainer}>
                                <TextInput title={"Email"} onChange={(e: any) => setEmail(e.currentTarget.value)}/>
                            </div>
                            <div className={classes.inputContainer}>
                                <TextInput title={"Numéro de téléphone"} onChange={(e: any) => setPhone(e.currentTarget.value)}/>
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
