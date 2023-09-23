// Import dependencies

    import { useState, useContext, useEffect } from 'react'

// Import styles

    import styles from "./LanguageMenu.module.scss"

    import headerStyles from "../Header/Header.module.scss"

    import globalStyles from "../../globalStyles.module.scss"

// Import icons

    import {MdArrowDropDown} from "react-icons/md"

// Import context

    import {ConfigContext} from "../../context/CreateContext.jsx"

// Import translates    

    import languages from "../../utils/languages.js"

const LanguageMenu = () => {

    // useContext

        const configContext = useContext(ConfigContext)

    // Get wordle-config

        const wordleConfig = JSON.parse(localStorage.getItem("wordle-config"))

    // Import data from context

        const {lang, setLang} = configContext

    // Import languages list

        const {langList} = languages

    // Active lang flag url

        const activeFlagUrl = "src/assets/flags/" + lang + ".png"

    // Open menu state

        const [openMenu, setOpenMenu] = useState("false");

    // Menu toggle function

        const listToggle = () => {

            openMenu == "false" ? setOpenMenu("true") : setOpenMenu("false");

        }

    // Change language function

        const changeLang = (newLang) => {

            setLang(newLang)

            wordleConfig.lang = newLang

            localStorage.setItem("wordle-config", JSON.stringify(wordleConfig))

            setOpenMenu("false")

        }

    return(

        <>

            <section className={styles.activeLang}>

                <button className={`${headerStyles.loginBtn} ${globalStyles.flexAllCenter} ${styles.langBtn}`} onClick={listToggle} clicked={openMenu}>

                    <img className={styles.langImg} src={activeFlagUrl} alt={lang + " language"} clicked={openMenu}></img>

                    <p className={styles.langText}>{langList[lang]} <MdArrowDropDown></MdArrowDropDown></p>

                </button>

            </section>

            {

                openMenu == "true" ?             
                
                    <section className={styles.langList} onMouseLeave={listToggle}>

                        {

                            Object.keys(langList).map((key, index) => {

                                const itemFlagUrl = "src/assets/flags/" + key + ".png"

                                return(

                                    <button key={index} className={`${headerStyles.loginBtn} ${globalStyles.flexAllCenter} ${styles.langBtn}`} onClick={() => changeLang(key)}>

                                        <img className={styles.langImg} src={itemFlagUrl} alt={key + " language"}></img>

                                        <p className={styles.langText}>{langList[key]}</p>

                                    </button>			

                                )

                            })

                        }
                        
                    </section> : 
            
                undefined

            }

        </>

    )

}

export default LanguageMenu;