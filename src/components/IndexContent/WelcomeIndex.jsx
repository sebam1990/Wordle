// Import dependencies

    import {useContext} from "react"

    import {Link, useSearchParams, useHref} from "react-router-dom"

// Import styles

    import styles from "./IndexContent.module.scss"

    import globalStyles from "../../globalStyles.module.scss"

// Import context

    import {ConfigContext} from "../../context/CreateContext.jsx"

// Import translates

    import languages from "../../utils/languages.js"

// Import date

    import {dates} from "../../utils/dates.js"

const WelcomeIndex = () => {

    // Search params

        const [searchParams, setSearchParams] = useSearchParams()

        console.log(searchParams);

    // useContext

        const configContext = useContext(ConfigContext)

    // Import lang from context

        const {lang} = configContext

    // Import translates

        const globalTranslate = languages[lang]

        const {welcomeIndex} = globalTranslate

    // Get date

        const date = dates[lang]

    return(

        <>
        
            <section className={`${styles.welcomeSection} ${globalStyles.flexAllCenter}`}>

                <section className={styles.iconSection}>
                    
                    <img className={styles.indexImg} src="/wordle-icon.svg" alt="Wordle Icon" />
                    
                </section>

                <section className={styles.titleSection}>

                    <h1 className={styles.indexTitle}>Wordle</h1>

                    <h2 className={styles.indexSubtitle}>
                        
                        {welcomeIndex.indexSubtitle}
                        
                    </h2>

                </section>

                <section className={`${styles.indexMenu} ${globalStyles.flexHorizontalCenter}`}>

                    <Link to="/play/" className={styles.indexBtn}>
                        
                        <p className={styles.btnText}>{welcomeIndex.instructionsBtn}</p>
                        
                    </Link>

                    <Link to="/play/?=login" className={styles.indexBtn}>
                        
                        <p className={styles.btnText}>{welcomeIndex.loginBtn}</p>
                        
                    </Link>

                    <Link to="/play" className={styles.indexBtn} btnevent="play">
                        
                        <p className={styles.btnText}>{welcomeIndex.playBtn}</p>
                        
                    </Link>

                </section>

                <section className={styles.indexInfo}>

                    <p className={styles.infoDate}>
                        
                        {date()}
                        
                    </p>

                    <p>No. 1</p>

                </section>

            </section>
        
        </>

    )

}

export default WelcomeIndex;