// Import dependencies

    import {Link} from "react-router-dom"

// Import styles

    import styles from "./MenuModal.module.scss"

    import globalStyles from "../../globalStyles.module.scss"

// Import components

    import GridRow from "../GridRow/GridRow.jsx"

const InstructionsModal = () => {

    // Get language from wordleConfig

        const wordleConfig = JSON.parse(localStorage.getItem("wordle-config"))

        const lang = wordleConfig.lang

    return(

        <>
        
            <header>

                <h1 className={styles.instructionsTitle}> {lang == "EN" ? "How To Play" : "¿Cómo Jugar?"} </h1>

                <h2 className={styles.instructionsSubtitle}> {lang == "EN" ? "Guess the Wordle in 6 tries." : "Adivina la palabra en 6 intentos."} </h2>

                <ul className={styles.instructionsList}>

                    <li> {lang == "EN" ? "Each guess must be a valid 5-letter word." : "Cada respuesta debe ser una palabra válida de 5 letras."} </li>

                    <li> {lang == "EN" ? "The color of the tiles will change to show how close your guess was to the word." : "El color de las celdas cambiará para mostrar qué tan cerca estuvo su suposición de la palabra."} </li>

                </ul>

            </header>

            <section className={styles.examplesSection}>

                <p className={styles.examplesTitle}> {lang == "EN" ? "Examples" : "Ejemplos"} </p>

                <article className={styles.examplesArticle}>

                    {/*<img src="/weary.jpg"></img>*/}

                    <GridRow rowWord="ACTOR" cellState={["correct","idle","idle","idle","idle"]} mode="modal"></GridRow>

                    {lang == "EN" ? <p className={styles.examplesText}><strong>A</strong>  is in the word and in the correct spot.</p> : <p className={styles.examplesText}><strong>A</strong> está en la palabra y en el lugar correcto.</p>}

                </article>

                <article className={styles.examplesArticle}>

                    <GridRow rowWord="HOTEL" cellState={["idle","present","idle","idle","idle"]} mode="modal"></GridRow>

                    {lang == "EN" ? <p className={styles.examplesText}><strong>O</strong>  is in the word but in the wrong spot.</p> : <p className={styles.examplesText}><strong>O</strong> está en la palabra pero en el lugar equivocado.</p>}

                </article>

                <article className={styles.examplesArticle}>

                    <GridRow rowWord="FINAL" cellState={["idle","idle","idle","absent","idle"]} mode="modal"></GridRow>

                    {lang == "EN" ? <p className={styles.examplesText}><strong>A</strong> is not in the word in any spot.</p> : <p className={styles.examplesText}><strong>A</strong> no está en la palabra en ningún lugar.</p>}

                </article>

            </section>

            <section className={`${styles.loginSection} ${globalStyles.flexVerticalCenter}`}>

                <img className={styles.loginImg} src="/modalLogin.jpg"></img>

                <p className={styles.loginText}>

                    <Link to="/login" target="_blank" className={styles.loginLink}> {lang == "EN" ? "Log in or create a free account" : "Accede o crea una cuenta gratis"} </Link> {lang == "EN" ? "to link your stats." : "para vincular tus estadísticas."}

                </p>

            </section>

            <section className={styles.reminderSection}>

                <p className={styles.loginText}>

                    {lang == "EN" ? "A new puzzle is released daily at midnight. If you haven’t already, you can " : "Cada medianoche se lanza un nuevo rompecabezas. Si aún no lo has hecho, puedes "}<Link to="/reminder" target="_blank" className={styles.loginLink}> {lang == "EN" ? "sign up" : "registrarte"} </Link> {lang == "EN" ? "for our daily reminder email." : "a nuestro email de recordatorio."}

                </p>

            </section>
        
        </>
        
    )
    
}

export default InstructionsModal;