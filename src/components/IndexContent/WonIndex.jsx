// Import dependencies

    import {useContext} from "react"

    import {Link} from "react-router-dom"

// Import styles

    import styles from "./IndexContent.module.scss"

    import globalStyles from "../../globalStyles.module.scss"

// Import context

    import {ConfigContext} from "../../context/CreateContext.jsx"

// Import translates

    import languages from "../../utils/languages.js"

// Import date

    import {dates} from "../../utils/dates.js"

const WonIndex = () => {

    // useContext

    const configContext = useContext(ConfigContext)

    // Import lang from context

        const {lang} = configContext

    // Import translates

        const globalTranslate = languages[lang]

        const {wonIndex} = globalTranslate

    // Get date

        const date = dates[lang]

    return(

        <>
        
            <header className={`${styles.indexHeader} ${globalStyles.flexAllCenter}`}>
                        
                <img className={styles.indexImg} mode="header" src="/wordle-icon.svg" alt="Wordle Icon" />
                    
                <h2 className={styles.indexTitle} mode="header">Wordle</h2>

            </header>

            <section className={`${styles.welcomeSection} ${globalStyles.flexAllCenter}`} mode="header">

                <section className={styles.titleSection}>

                    <h1 className={styles.indexTitle}>{wonIndex.indexTitle}</h1>

                    <h2 className={styles.indexSubtitle}>{wonIndex.indexSubtitle}</h2>

                </section>

                <section className={`${styles.indexMenu} ${globalStyles.flexHorizontalCenter}`}>

                    <Link to="/play?=stats" className={styles.indexBtn} btnevent="play">
                        
                        <p className={styles.btnText}>{wonIndex.statsBtn}</p>
                        
                    </Link>

                </section>

                <section className={styles.indexInfo}>

                    <p className={styles.infoDate}>{date()}</p>

                    <p>No. 1</p>

                </section>

            </section>

        </>

    )

}

export default WonIndex;