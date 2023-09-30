// Import dependencies

    import { useState } from 'react'

// Import styles

    import styles from "./UserForm.module.scss"
    import globalStyles from "../../globalStyles.module.scss"
    import loginStyles from "../EmailForm/EmailForm.module.scss"

const UserForm = () => {

// Email state

    const [email, setEmail] = useState("user@wordle.com");

// Edit email function

    const editEmail = (e) => {

        e.preventDefault()

        console.log("Editar email");

    }

// Show password state

    const [inputType, setInputType] = useState("password");

// Password button text

    const [passBtnText, setPassBtnText] = useState("Show")

// Show password function

    const showPassword = (e) => {

        e.preventDefault()

        passBtnText == "Show" ? setPassBtnText("Hide") : setPassBtnText("Show")

        inputType == "password" ? setInputType("text") : setInputType("password")

    }

    return(

        <section className={`${loginStyles.loginSection} ${styles.loginSection}`}>

            <h1 className={`${loginStyles.loginTitle} ${styles.loginTitle}`}>Create your free account</h1>

            <form className={`${globalStyles.flex} ${loginStyles.loginForm} ${styles.loginForm}`}>

                <label className={loginStyles.formLabel}>Email Address</label>

                <section className={styles.inputRow}>

                    <input type="email" className={styles.formInput} defaultValue={email} disabled/>

                    <button className={styles.inputBtn} state="disabled" onClick={(e) => editEmail(e)}>Edit</button>

                </section>

                <label className={loginStyles.formLabel}>Password</label>

                <section className={styles.inputRow}>

                    <input type={inputType} className={styles.formInput}/>

                    <button className={styles.inputBtn} label="pass" onClick={(e) => showPassword(e)}>{passBtnText}</button>

                </section>

                <section className={`${globalStyles.flex} ${styles.checkboxSection}`}>

                    <input type="checkbox" className={styles.checkboxInput}/>

                    <p className={styles.checkboxText}>You agree to receive updates and offers from Wordle. You may opt out or contact us anytime.</p>

                </section>

                <button className={loginStyles.formBtn}>Create Account</button>

            </form>

        </section>

    )

}

export default UserForm;