// Import dependencies

    import {Link} from "react-router-dom"

// Import styles

    import styles from "./IndexContent.module.scss"

    import globalStyles from "../../globalStyles.module.scss"

const LostIndex = () => {

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
        
            <header className={`${styles.indexHeader} ${globalStyles.flexAllCenter}`}>
                        
                <img className={styles.indexImg} mode="header" src="/wordle-icon.svg" alt="Wordle Icon" />
                    
                <h2 className={styles.indexTitle} mode="header">Wordle</h2>

            </header>

            <section className={`${styles.welcomeSection} ${globalStyles.flexAllCenter}`} mode="header">

                <section className={styles.titleSection}>

                    <h1 className={styles.indexTitle}>{lang == "EN" ? "Hi Wordler" : "Hola Wordler"}</h1>

                    <h2 className={styles.indexSubtitle}>
                        
                        {lang == "EN" ? "Tomorrow’s a new day, with a new puzzle. See you then." : "Mañana es un nuevo día, con un nuevo rompecabezas. Hasta entonces."}
                        
                    </h2>

                </section>

                <section className={`${styles.indexMenu} ${globalStyles.flexHorizontalCenter}`}>

                    <Link to="/play?=stats" className={styles.indexBtn} btnevent="play">
                        
                        <p className={styles.btnText}>{lang == "EN" ? "See Stats" : "Ver Estadísticas"}</p>
                        
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

export default LostIndex;