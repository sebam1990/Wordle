// Import dependencies

    import {useContext} from "react"

    import {Link} from "react-router-dom"

// Import styles

    import styles from "./InstructionsModal.module.scss"

    import globalStyles from "../../../globalStyles.module.scss"

// Import components

    import GridRow from "../../GridRow/GridRow.jsx"

// Import context

    import {ConfigContext} from "../../../context/CreateContext.jsx"

// Import translates

    import languages from "../../../utils/languages.js"

const InstructionsModal = () => {

    // useContext

    const configContext = useContext(ConfigContext)

    // Import lang from context

        const {lang} = configContext

    // Import translates

        const globalTranslate = languages[lang]

        const {instructionsModal} = globalTranslate

    return(

        <>
        
            <header>

                <h1 className={styles.instructionsTitle}> {instructionsModal.instructionsTitle} </h1>

                <h2 className={styles.instructionsSubtitle}> {instructionsModal.instructionsSubtitle} </h2>

                <ul className={styles.instructionsList}>

                    <li> {instructionsModal.instructionsList[0]} </li>

                    <li> {instructionsModal.instructionsList[1]} </li>

                </ul>

            </header>

            <section className={styles.examplesSection}>

                <p className={styles.examplesTitle}> {instructionsModal.examplesTitle} </p>

                <article className={styles.examplesArticle}>

                    <GridRow rowWord="ACTOR" cellState={["correct","idle","idle","idle","idle"]} mode="modal"></GridRow>

                    <p className={styles.examplesText}>

                        <strong>{instructionsModal.examplesArticle1[0]}</strong>{instructionsModal.examplesArticle1[1]}

                    </p>

                </article>

                <article className={styles.examplesArticle}>

                    <GridRow rowWord="HOTEL" cellState={["idle","present","idle","idle","idle"]} mode="modal"></GridRow>

                    <p className={styles.examplesText}>

                        <strong>{instructionsModal.examplesArticle2[0]}</strong>{instructionsModal.examplesArticle2[1]}

                    </p>
                    
                </article>

                <article className={styles.examplesArticle}>

                    <GridRow rowWord="FINAL" cellState={["idle","idle","idle","absent","idle"]} mode="modal"></GridRow>

                    <p className={styles.examplesText}>

                        <strong>{instructionsModal.examplesArticle3[0]}</strong>{instructionsModal.examplesArticle3[1]}

                    </p>

                </article>

            </section>

            <section className={`${styles.loginSection} ${globalStyles.flexVerticalCenter}`}>

                <img className={styles.loginImg} src="/modalLogin.jpg"></img>

                <p className={styles.loginText}>

                    <Link to="/login" target="_blank" className={styles.loginLink}> {instructionsModal.loginSectionText[0]} </Link> {instructionsModal.loginSectionText[1]}

                </p>

            </section>

            <section className={styles.reminderSection}>

                <p className={styles.loginText}>

                    {instructionsModal.reminderSectionText[0]} <Link to="/reminder" target="_blank" className={styles.loginLink}> {instructionsModal.reminderSectionText[1]} </Link> {instructionsModal.reminderSectionText[2]}

                </p>

            </section>
        
        </>
        
    )
    
}

export default InstructionsModal;