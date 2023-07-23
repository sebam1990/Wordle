// Import dependencies

    import { useContext } from 'react'
    import { UserContext } from '../../context/UserContext'

// Import styles

    import globalStyles from '../../index.module.scss'
    import styles from './Header.module.scss'

// Import icons & images

    import {MdHelpOutline} from "react-icons/md"
    import {IoStatsChartOutline} from "react-icons/io5"
    import {BsFillGearFill} from "react-icons/bs"

const Header = () => {

    // useContext for language change

        const context = useContext(UserContext)

        const changeLang = context.changeLang;

        const lang = context.lang
    
    // Get url for show or hidden header

        const url = window.location.pathname

    return(

            url == "/" ? undefined :

                <header className={`${globalStyles.flex} ${styles.header}`}>

                    <section className={`${globalStyles.flex} ${globalStyles.flex_30} ${styles.headerLang}`}>

                        {lang == "ES" ? <button className={`${styles.headerSwitch} ${styles.switchEsp}`} onClick={changeLang}></button> : <button className={`${styles.headerSwitch} ${styles.switchEng}`} onClick={changeLang}></button>}

                    </section>

                    <section className={`${globalStyles.flex} ${globalStyles.flex_30} ${styles.headerTitle}`}>

                        <h1 className={styles.headerH1}>Wordle</h1>

                    </section>

                    <nav className={`${globalStyles.flex} ${globalStyles.flex_30} ${styles.headerNav}`}>

                        <button className={styles.headerBtn}> <MdHelpOutline size={28} />  </button>

                        <button className={styles.headerBtn}> <IoStatsChartOutline size={28}/>  </button>

                        <button className={styles.headerBtn}> <BsFillGearFill size={28}/> </button>

                        <button className={styles.loginBtn}>{lang == "ES" ? "Iniciar Sesión" : "Login"}</button>

                    </nav>

                </header>

    )

}

export default Header;