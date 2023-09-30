// Import dependencies

    import { useState } from 'react'

// Import styles

    import styles from "./EmailForm.module.scss"
    import globalStyles from "../../globalStyles.module.scss"

// Import icons

    import spinner from "../../assets/svg/spinner.svg"

const EmailForm = () => {

// Loading state

    const [loading, setLoading] = useState(false)

// Email state

    const [email, setEmail] = useState("")

// Error message state

    const [errorMsg, setErrorMsg] = useState("")

// Check email

    const checkEmail = (e) => {

        e.preventDefault()

        if(email == ""){

            setErrorMsg("Please enter your username or email address.")

        }
        else if(email.includes("@") == false){

            setErrorMsg("Please enter a valid email address.")

        }
        else{

            setLoading(true)

            setErrorMsg("")

            console.log("Email verificado");

        }

    }

// Disclaimer function

    const disclaimer = () => {

        alert("This feature is not available yet")
        
    }

    return(

        <section className={styles.loginSection}>

            <h1 className={styles.loginTitle}>Log in or create an account</h1>

            <form className={`${globalStyles.flex} ${styles.loginForm}`} onSubmit={checkEmail} noValidate>

                <label className={styles.formLabel}>Email Address</label>

                <input type="email" className={styles.formInput} onChange={(e) => setEmail(e.target.value)}/>

                <section className={`${styles.formError} ${globalStyles.flex}`}>

                    {errorMsg != "" ? 
                    
                        <>
                        
                            <img src="src\assets\icons\formError.svg" alt="Error icon"></img>

                            <p>{errorMsg}</p>
                        
                        </>
                
                        :undefined

                    }

                </section>

                <button className={styles.formBtn}>
                    
                    {

                        loading == true ? <img className={styles.spinner} src={spinner}></img> : "Continue"

                    }
                    
                </button>

            </form>

            <p className={`${styles.separator}`}>or</p>

            <section>

                <button className={`${styles.socialBtn} ${globalStyles.flexAllCenter}`} onClick={disclaimer}>

                    <img src="src\assets\icons\google.png" alt="Google icon" className={styles.socialIcon}></img>
                    
                    <p>Continue with Google</p>
                    
                </button>

            </section>



        </section>

    )

}

export default EmailForm;