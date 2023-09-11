// Import dependencies

    import {useContext} from "react"

    import {Link} from "react-router-dom"

// Import styles

    import styles from "./StatsModal.module.scss"

    import globalStyles from "../../../globalStyles.module.scss"

//  Import icons

    import {MdOutlineShare} from "react-icons/md"

// Import context

    import {ConfigContext} from "../../../context/CreateContext.jsx"

// Import translates

    import languages from "../../../utils/languages.js"



// Get stats from wordle-user

    const wordleUser = JSON.parse(localStorage.getItem("wordle-user"))

    let userStats

    wordleUser != null ? userStats = wordleUser.userStats : undefined

// Win percentage

    const winPercentage = (userStats.wins) * 100 / userStats.games

// Get guess distribution from wordle-user

    const guessDistribution = wordleUser.userStats.guessDistribution

const StatsModal = () => {

    // useContext

        const configContext = useContext(ConfigContext)

    // Import lang from context

        const {lang} = configContext
    
    // Import translates
    
        const globalTranslate = languages[lang]

        const {statsModal} = globalTranslate

    return(

        <>

            <h2 className={styles.statsTitle}>{statsModal.statsTitle}</h2>

            <section className={`${styles.statsMarkers} ${globalStyles.flex}`}>

                <article className={styles.statsArticle}>

                    <p className={styles.markerNumber}>{userStats.games}</p>

                    <p className={styles.markerText}> {statsModal.markerText[0]} </p>

                </article>

                <article className={styles.statsArticle}>

                    <p className={styles.markerNumber}>{winPercentage}</p>

                    <p className={styles.markerText}> {statsModal.markerText[1]} </p>

                </article>

                <article className={styles.statsArticle}>

                    <p className={styles.markerNumber}>{userStats.currentStreak}</p>

                    <p className={styles.markerText}> {statsModal.markerText[2]} </p>

                </article>

                <article className={styles.statsArticle}>

                    <p className={styles.markerNumber}>{userStats.maxStreak}</p>

                    <p className={styles.markerText}> {statsModal.markerText[3]} </p>

                </article>

            </section>

            <section className={styles.distributionSection}>

                <h2 className={styles.distributionTitle}>{statsModal.distributionTitle}</h2>

                {

                    guessDistribution.map((score, index) => {

                        const barWidth = score > 0 ? score * 100 / userStats.games : 0

                        const barStyle = {width:barWidth + "%"}

                        return(

                            <article className={`${styles.graphLine} ${globalStyles.flexVerticalCenter}`} key={index}>

                                <p className={styles.graphIndex}>{index+1}</p>
        
                                <section className={styles.graphBar}>

                                    {score > 0 ? <p className={styles.graphCounter} style={barStyle} extended="true">{score}</p> : <p className={styles.graphCounter}>{score}</p>}

                                </section>

                            </article>

                        )

                    })

                }

            </section>

                <section className={`${styles.loginSection} ${globalStyles.flexVerticalCenter}`}>

                    <img className={styles.loginImg} src="/modalLogin.jpg"></img>

                    <p>

                        <Link to="/login" target="_blank" className={styles.loginLink}> {statsModal.loginLink} </Link>

                    </p>

                </section>

            <section className={styles.shareSection}>

                <button className={`${styles.shareBtn} ${globalStyles.flexAllCenter}`}>
                    
                    <span className={styles.shareBtnText}> {statsModal.shareBtnText} </span> <MdOutlineShare size={20} color={"#fff"}/>
                    
                </button>

            </section>
        
        </>

    )

}

export default StatsModal;