// Import dependencies

import {Link} from "react-router-dom"

// Import styles

    import styles from "./StatsModal.module.scss"

    import globalStyles from "../../../globalStyles.module.scss"

    //  Import icons

    import {MdOutlineShare} from "react-icons/md"

// Get language from wordle-config

    const wordleConfig = JSON.parse(localStorage.getItem("wordle-config"))

    let lang
    
    wordleConfig != null ? wordleConfig.lang : undefined

// Get stats from wordle-user

    const wordleUser = JSON.parse(localStorage.getItem("wordle-user"))

    let userStats

    wordleUser != null ? userStats = wordleUser.userStats : undefined

// Win percentage

    const winPercentage = (userStats.wins) * 100 / userStats.games

// Get guess distribution from wordle-user

    const guessDistribution = wordleUser.userStats.guessDistribution

const StatsModal = () => {

    return(

        <>

            <h2 className={styles.statsTitle}>{lang == "EN" ? "STATISTICS" : "ESTADÍSTICAS"}</h2>

            <section className={`${styles.statsMarkers} ${globalStyles.flex}`}>

                <article className={styles.statsArticle}>

                    <p className={styles.markerNumber}>{userStats.games}</p>

                    <p className={styles.markerText}> {lang == "EN" ? "Played" : "Jugados"} </p>

                </article>

                <article className={styles.statsArticle}>

                    <p className={styles.markerNumber}>{winPercentage}</p>

                    <p className={styles.markerText}> {lang == "EN" ? "Win%" : "%Victorias"} </p>

                </article>

                <article className={styles.statsArticle}>

                    <p className={styles.markerNumber}>{userStats.currentStreak}</p>

                    <p className={styles.markerText}> {lang == "EN" ? "Current Streak" : "Racha actual"} </p>

                </article>

                <article className={styles.statsArticle}>

                    <p className={styles.markerNumber}>{userStats.maxStreak}</p>

                    <p className={styles.markerText}> {lang == "EN" ? "Max Streak" : "Mejor Racha"} </p>

                </article>

            </section>

            <section className={styles.distributionSection}>

                <h2 className={styles.distributionTitle}>{lang == "EN" ? "GUESS DISTRIBUTION" : "INTENTOS"}</h2>

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

                        <Link to="/login" target="_blank" className={styles.loginLink}> {lang == "EN" ? "Log in or create a free account to link your stats." : "Accede o crea una cuenta gratis para vincular tus estadísticas."} </Link>

                    </p>

                </section>

            <section className={styles.shareSection}>

                <button className={`${styles.shareBtn} ${globalStyles.flexAllCenter}`}>
                    
                    <span className={styles.shareBtnText}> {lang == "EN" ? "Share" : "Compartir"} </span> <MdOutlineShare size={20} color={"#fff"}/>
                    
                </button>

            </section>
        
        </>

    )

}

export default StatsModal;