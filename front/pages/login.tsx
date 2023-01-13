import React, {useContext, useEffect, useState} from 'react';
import classes from "./login.module.scss";
import {Button, TextInput} from "@spideai/my-lib/dist/cjs";
import {useRouter} from "next/router";
import {AuthenticationContext} from "../src/context/AuthenticationContext";

export const Login = () => {
    const router = useRouter()
    const {onLogin} = useContext(AuthenticationContext)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [disabledButton, setDisabledButton] = useState(false)
    const [state, setState] = useState("no token")



    const onFormSubmit = () => {
        setDisabledButton(true)
        onLogin({username: email, password: password}, setState)
    }

    return (
        <div className={classes.loginPage}>
            <div className={classes.loginContainer}>
                <div onClick={() => router.push("sign-in")} className={`${classes.backContainer} ${classes.ripple}`}>
                    <svg width="62" height="12" viewBox="0 0 62 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.56 7.64C2.22933 7.24533 1.88267 6.904 1.52 6.616C1.168 6.31733 0.794667 6.072 0.4 5.88V5.192C1.18933 4.78667 1.90933 4.19467 2.56 3.416H3.792C3.67467 3.72533 3.536 4.01867 3.376 4.296C3.22667 4.56267 3.06667 4.81867 2.896 5.064V6.008C3.06667 6.232 3.22667 6.48267 3.376 6.76C3.536 7.02667 3.67467 7.32 3.792 7.64H2.56ZM2.8 6.184L2.816 4.872H11.6V6.184H2.8Z" fill="#C00000"/>
                        <path d="M21.1094 4.39062V11H18.8594V2.54688H20.9766L21.1094 4.39062ZM23.6562 2.49219L23.6172 4.57812C23.5078 4.5625 23.375 4.54948 23.2188 4.53906C23.0677 4.52344 22.9297 4.51562 22.8047 4.51562C22.487 4.51562 22.2109 4.55729 21.9766 4.64062C21.7474 4.71875 21.5547 4.83594 21.3984 4.99219C21.2474 5.14844 21.1328 5.33854 21.0547 5.5625C20.9818 5.78646 20.9401 6.04167 20.9297 6.32812L20.4766 6.1875C20.4766 5.64062 20.5312 5.13802 20.6406 4.67969C20.75 4.21615 20.9089 3.8125 21.1172 3.46875C21.3307 3.125 21.5911 2.85938 21.8984 2.67188C22.2057 2.48438 22.5573 2.39062 22.9531 2.39062C23.0781 2.39062 23.2057 2.40104 23.3359 2.42188C23.4661 2.4375 23.5729 2.46094 23.6562 2.49219ZM28.4531 11.1562C27.7969 11.1562 27.2083 11.0521 26.6875 10.8438C26.1667 10.6302 25.724 10.3359 25.3594 9.96094C25 9.58594 24.724 9.15104 24.5312 8.65625C24.3385 8.15625 24.2422 7.625 24.2422 7.0625V6.75C24.2422 6.10938 24.3333 5.52344 24.5156 4.99219C24.6979 4.46094 24.9583 4 25.2969 3.60938C25.6406 3.21875 26.0573 2.91927 26.5469 2.71094C27.0365 2.4974 27.5885 2.39062 28.2031 2.39062C28.8021 2.39062 29.3333 2.48958 29.7969 2.6875C30.2604 2.88542 30.6484 3.16667 30.9609 3.53125C31.2786 3.89583 31.5182 4.33333 31.6797 4.84375C31.8411 5.34896 31.9219 5.91146 31.9219 6.53125V7.46875H25.2031V5.96875H29.7109V5.79688C29.7109 5.48438 29.6536 5.20573 29.5391 4.96094C29.4297 4.71094 29.263 4.51302 29.0391 4.36719C28.8151 4.22135 28.5286 4.14844 28.1797 4.14844C27.8828 4.14844 27.6276 4.21354 27.4141 4.34375C27.2005 4.47396 27.026 4.65625 26.8906 4.89062C26.7604 5.125 26.6615 5.40104 26.5938 5.71875C26.5312 6.03125 26.5 6.375 26.5 6.75V7.0625C26.5 7.40104 26.5469 7.71354 26.6406 8C26.7396 8.28646 26.8776 8.53385 27.0547 8.74219C27.237 8.95052 27.4557 9.11198 27.7109 9.22656C27.9714 9.34115 28.2656 9.39844 28.5938 9.39844C29 9.39844 29.3776 9.32031 29.7266 9.16406C30.0807 9.0026 30.3854 8.76042 30.6406 8.4375L31.7344 9.625C31.5573 9.88021 31.3151 10.125 31.0078 10.3594C30.7057 10.5938 30.3411 10.7865 29.9141 10.9375C29.487 11.0833 29 11.1562 28.4531 11.1562ZM37.3438 2.54688V4.14062H32.4219V2.54688H37.3438ZM33.6406 0.460938H35.8906V8.45312C35.8906 8.69792 35.9219 8.88542 35.9844 9.01562C36.0521 9.14583 36.151 9.23698 36.2812 9.28906C36.4115 9.33594 36.5755 9.35938 36.7734 9.35938C36.9141 9.35938 37.0391 9.35417 37.1484 9.34375C37.263 9.32812 37.3594 9.3125 37.4375 9.29688L37.4453 10.9531C37.2526 11.0156 37.0443 11.0651 36.8203 11.1016C36.5964 11.138 36.349 11.1562 36.0781 11.1562C35.5833 11.1562 35.151 11.0755 34.7812 10.9141C34.4167 10.7474 34.1354 10.4818 33.9375 10.1172C33.7396 9.7526 33.6406 9.27344 33.6406 8.67969V0.460938ZM38.0625 6.85938V6.69531C38.0625 6.07552 38.151 5.50521 38.3281 4.98438C38.5052 4.45833 38.763 4.0026 39.1016 3.61719C39.4401 3.23177 39.8568 2.93229 40.3516 2.71875C40.8464 2.5 41.4141 2.39062 42.0547 2.39062C42.6953 2.39062 43.2656 2.5 43.7656 2.71875C44.2656 2.93229 44.6849 3.23177 45.0234 3.61719C45.3672 4.0026 45.6276 4.45833 45.8047 4.98438C45.9818 5.50521 46.0703 6.07552 46.0703 6.69531V6.85938C46.0703 7.47396 45.9818 8.04427 45.8047 8.57031C45.6276 9.09115 45.3672 9.54688 45.0234 9.9375C44.6849 10.3229 44.2682 10.6224 43.7734 10.8359C43.2786 11.0495 42.7109 11.1562 42.0703 11.1562C41.4297 11.1562 40.8594 11.0495 40.3594 10.8359C39.8646 10.6224 39.4453 10.3229 39.1016 9.9375C38.763 9.54688 38.5052 9.09115 38.3281 8.57031C38.151 8.04427 38.0625 7.47396 38.0625 6.85938ZM40.3125 6.69531V6.85938C40.3125 7.21354 40.3438 7.54427 40.4062 7.85156C40.4688 8.15885 40.5677 8.42969 40.7031 8.66406C40.8438 8.89323 41.026 9.07292 41.25 9.20312C41.474 9.33333 41.7474 9.39844 42.0703 9.39844C42.3828 9.39844 42.651 9.33333 42.875 9.20312C43.099 9.07292 43.2786 8.89323 43.4141 8.66406C43.5495 8.42969 43.6484 8.15885 43.7109 7.85156C43.7786 7.54427 43.8125 7.21354 43.8125 6.85938V6.69531C43.8125 6.35156 43.7786 6.02865 43.7109 5.72656C43.6484 5.41927 43.5469 5.14844 43.4062 4.91406C43.2708 4.67448 43.0911 4.48698 42.8672 4.35156C42.6432 4.21615 42.3724 4.14844 42.0547 4.14844C41.737 4.14844 41.4661 4.21615 41.2422 4.35156C41.0234 4.48698 40.8438 4.67448 40.7031 4.91406C40.5677 5.14844 40.4688 5.41927 40.4062 5.72656C40.3438 6.02865 40.3125 6.35156 40.3125 6.69531ZM52.4531 8.97656V2.54688H54.7031V11H52.5859L52.4531 8.97656ZM52.7031 7.24219L53.3672 7.22656C53.3672 7.78906 53.3021 8.3125 53.1719 8.79688C53.0417 9.27604 52.8464 9.69271 52.5859 10.0469C52.3255 10.3958 51.9974 10.6693 51.6016 10.8672C51.2057 11.0599 50.7396 11.1562 50.2031 11.1562C49.7917 11.1562 49.4115 11.099 49.0625 10.9844C48.7188 10.8646 48.4219 10.6797 48.1719 10.4297C47.9271 10.1745 47.7344 9.84896 47.5938 9.45312C47.4583 9.05208 47.3906 8.57031 47.3906 8.00781V2.54688H49.6406V8.02344C49.6406 8.27344 49.6693 8.48438 49.7266 8.65625C49.7891 8.82812 49.875 8.96875 49.9844 9.07812C50.0938 9.1875 50.2214 9.26562 50.3672 9.3125C50.5182 9.35938 50.6849 9.38281 50.8672 9.38281C51.3307 9.38281 51.6953 9.28906 51.9609 9.10156C52.2318 8.91406 52.4219 8.65885 52.5312 8.33594C52.6458 8.00781 52.7031 7.64323 52.7031 7.24219ZM58.6719 4.39062V11H56.4219V2.54688H58.5391L58.6719 4.39062ZM61.2188 2.49219L61.1797 4.57812C61.0703 4.5625 60.9375 4.54948 60.7812 4.53906C60.6302 4.52344 60.4922 4.51562 60.3672 4.51562C60.0495 4.51562 59.7734 4.55729 59.5391 4.64062C59.3099 4.71875 59.1172 4.83594 58.9609 4.99219C58.8099 5.14844 58.6953 5.33854 58.6172 5.5625C58.5443 5.78646 58.5026 6.04167 58.4922 6.32812L58.0391 6.1875C58.0391 5.64062 58.0938 5.13802 58.2031 4.67969C58.3125 4.21615 58.4714 3.8125 58.6797 3.46875C58.8932 3.125 59.1536 2.85938 59.4609 2.67188C59.7682 2.48438 60.1198 2.39062 60.5156 2.39062C60.6406 2.39062 60.7682 2.40104 60.8984 2.42188C61.0286 2.4375 61.1354 2.46094 61.2188 2.49219Z" fill="black"/>
                    </svg>
                </div>
                <h2>CONNEXION</h2>
                <div className={classes.form}>
                    <h4>{state}</h4>
                    <form>
                        <TextInput title={"Identifiant"} onChange={(e) => {setEmail(e.currentTarget.value)}}/>
                        <TextInput title={"Mot de passe"} onChange={(e) => {setPassword(e.currentTarget.value)}}/>
                        <Button title={"Connexion"} onClick={onFormSubmit} disabled={disabledButton}/>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login