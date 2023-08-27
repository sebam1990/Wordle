// Import dependencies

    import {Link} from "react-router-dom"

// Import styles

    import styles from "./IndexContent.module.scss"

    import globalStyles from "../../globalStyles.module.scss"

const WelcomeIndex = () => {

    // Get language from wordleConfig

        const wordleConfig = JSON.parse(localStorage.getItem("wordle-config"))

        const lang = wordleConfig.lang

    // Create date

        const today = new Date()

        const monthES = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

        const monthEN = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

        const indexMonth = today.getMonth();

        const dateEN = `${monthEN[indexMonth]} ${today.getDate()}, ${today.getFullYear()}`

        const dateES = `${today.getDate()} de ${monthES[indexMonth]}, ${today.getFullYear()}`

    return(

        <>
        
            <section className={`${styles.welcomeSection} ${globalStyles.flexAllCenter}`}>

                <section className={styles.iconSection}>
                    
                    <img className={styles.indexImg} src="/wordle-icon.svg" alt="Wordle Icon" />
                    
                </section>

                <section className={styles.titleSection}>

                    <h1 className={styles.indexTitle}>Wordle</h1>

                    <h2 className={styles.indexSubtitle}>
                        
                        {lang == "EN" ? "Get 6 chances to guess a 5-letter word." : "Obtenga 6 oportunidades para adivinar una palabra de 5 letras."}
                        
                    </h2>

                </section>

                <section className={`${styles.indexMenu} ${globalStyles.flexHorizontalCenter}`}>

                    <Link to="/play/?=instructions" className={styles.indexBtn}>
                        
                        <p className={styles.btnText}>{lang == "EN" ? "How to play" : "¿Cómo jugar?"}</p>
                        
                    </Link>

                    <Link to="/play/?=login" className={styles.indexBtn}>
                        
                        <p className={styles.btnText}>{lang == "EN" ? "Log in" : "Iniciar sesión"}</p>
                        
                    </Link>

                    <Link to="/play" className={styles.indexBtn} btnevent="play">
                        
                        <p className={styles.btnText}>{lang == "EN" ? "Play" : "Jugar"}</p>
                        
                    </Link>

                </section>

                <section className={styles.indexInfo}>

                    <p className={styles.infoDate}>
                        
                        {lang == "EN" ? dateEN : dateES}
                        
                    </p>

                    <p>No. 1</p>

                </section>

            </section>
        
        </>

    )

}

export default WelcomeIndex;