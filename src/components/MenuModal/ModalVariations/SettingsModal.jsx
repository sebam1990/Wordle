// Import dependencies

    import {useContext, useState} from "react"

    import {Link} from "react-router-dom"

// Import styles

    import styles from "./SettingsModal.module.scss"

    import globalStyles from "../../../globalStyles.module.scss"

// Import configContext

    import {ConfigContext} from "../../../context/CreateContext"

// Import components

    import Switch from "../../Swtich/Switch.jsx"

// Import translates

    import languages from "../../../utils/languages.js"    

const SettingsModal = () => {

    // useContext

        const configContext = useContext(ConfigContext)

    // Import lang from context

        const {lang} = configContext

    // Import translates

        const globalTranslate = languages[lang]

        const {settingsModal} = globalTranslate

    // Get worldleConfig

        const wordleConfig = JSON.parse(localStorage.getItem("wordle-config"))

    // Context vars

        const hardMode = configContext.hardMode

        const theme = configContext.theme

        const highContrast = configContext.highContrast

    // Hard mode toggle

        const hardModeToggle = () => {

            configContext.hardMode == "false" ? configContext.setHardMode("true") : configContext.setHardMode("false")

            configContext.hardMode == "false" ? wordleConfig.hardMode = "true" : wordleConfig.hardMode = "false"

            localStorage.setItem("wordle-config", JSON.stringify(wordleConfig))

        }

    // Change theme

        const changeTheme = () => {

            configContext.theme == "light" ? configContext.setTheme("dark") : configContext.setTheme("light")

            configContext.theme == "light" ? wordleConfig.theme = "dark" : wordleConfig.theme = "light"

            localStorage.setItem("wordle-config", JSON.stringify(wordleConfig))

        }

    // Hard mode toggle

        const highContrastToggle = () => {

            configContext.highContrast == "false" ? configContext.setHighContrast("true") : configContext.setHighContrast("false")

            configContext.highContrast == "false" ? wordleConfig.highContrast = "true" : wordleConfig.highContrast = "false"

            localStorage.setItem("wordle-config", JSON.stringify(wordleConfig))

        }        

    return(

        <>

            <header>

                <h1 className={styles.title}>{settingsModal.settingsTitle}</h1>

            </header>
        
            <section className={`${styles.settingSection} ${globalStyles.flexAllCenter}`}>

                <section>

                    <p className={styles.settingTitle}>{settingsModal.hardModeTitle}</p>

                    <p className={styles.settingSubtitle}>{settingsModal.hardModeSubtitle}</p>

                </section>

                {hardMode == "true" ? <Switch changeEvent={hardModeToggle} checked={"true"}></Switch> : <Switch changeEvent={hardModeToggle} checked={"false"}></Switch>}

            </section>

            <section className={`${styles.settingSection} ${globalStyles.flexAllCenter}`}>

                <p className={styles.settingTitle}>{settingsModal.themeTitle}</p>

                {theme == "dark" ? <Switch changeEvent={changeTheme} checked={"true"}></Switch> : <Switch changeEvent={changeTheme} checked={"false"}></Switch>}

            </section>

            <section className={`${styles.settingSection} ${globalStyles.flexAllCenter}`}>

                <section>

                    <p className={styles.settingTitle}>{settingsModal.highContrastTitle}</p>

                    <p className={styles.settingSubtitle}>{settingsModal.highContrastSubtitle}</p>

                </section>

                {highContrast == "true" ? <Switch changeEvent={highContrastToggle} checked={"true"} highContrast={"true"}></Switch> : <Switch changeEvent={highContrastToggle} checked={"false"}></Switch>}

            </section>

            <section className={`${styles.settingSection} ${globalStyles.flexAllCenter}`}>

                <p className={styles.settingTitle}>{settingsModal.feedbackTitle}</p>

                <a href="mailto:marinio.sebastian@gmail.com" className={styles.settingEmail}>Email</a>

            </section>


            <section className={`${styles.settingSection} ${globalStyles.flexAllCenter}`}>

                <p className={styles.settingTitle}>{settingsModal.bugTitle}</p>

                <a href="mailto:marinio.sebastian@gmail.com" className={styles.settingEmail}>Email</a>

            </section>

            <section className={`${styles.settingSection} ${globalStyles.flexAllCenter}`}>

                <p className={styles.settingTitle}>{settingsModal.faqsTitle}</p>

                <Link to="/faq" className={styles.settingEmail}>FAQ</Link>

            </section>

            <footer className={`${styles.footer} ${globalStyles.flex}`}>
                
                <p className={styles.settingSubtitle}>&#169; 2023 Sebastián Mariño</p>

                <p className={styles.settingSubtitle}>#1</p>    
                
            </footer>                
        
        
        </>

    )

}

export default SettingsModal