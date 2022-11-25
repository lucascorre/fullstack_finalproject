import React from 'react';
import './SignInPage.scss';

export const SignInPage = () => {
    return(
        <div className="signInPage">
            <div className="descriptionContainer">
                <div>
                    <p><span>▷</span> Depuis 2008, RIDE, agence de location de voitures de luxe propose ses services partout en France (Paris, Monaco, Nice, Cannes, Saint-Tropez, Courchevel, Saint-Moritz...).
                        Notre expérience est à votre service pour répondre à toutes vos demandes</p>
                    <hr/>
                </div>
            </div>
            <div className="signInFormContainer">
                <div className="form">
                    <h2>INSCRIPTION</h2>
                    <form>
                        <fieldset>
                            <legend>Je suis:</legend>
                            <div>
                                <input type="radio" id="enterprise" name="iAm" value="enterprise" checked/>
                                <label htmlFor="enterprise">une entreprise</label>
                            </div>

                            <div>
                                <input type="radio" id="private" name="iAm" value="private"/>
                                <label htmlFor="private">un particulier</label>
                            </div>
                        </fieldset>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignInPage;