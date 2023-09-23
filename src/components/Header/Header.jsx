// Import dependencies

    import { useContext, useState, useEffect } from 'react'
    import {Link, useLocation} from "react-router-dom"

// Import styles

    import globalStyles from '../../index.module.scss'
    import styles from './Header.module.scss'

// Import icons & images

    import {MdHelpOutline} from "react-icons/md"
    import {IoStatsChartOutline} from "react-icons/io5"
    import {BsFillGearFill} from "react-icons/bs"

// Import context

    import {ConfigContext} from "../../context/CreateContext.jsx"

// Import components

    import Modal from "../MenuModal/MenuModal.jsx"

    import LanguageMenu from "../LanguageMenu/LanguageMenu.jsx"

// Import translates

    import languages from "../../utils/languages.js"

const Header = () => {

    // useContext

        const configContext = useContext(ConfigContext)

    // Import lang from context

        const {lang} = configContext

    // Import translates

        const globalTranslate = languages[lang]

        const {header} = globalTranslate
    
    // URL vars

        //const url  = window.location.pathname

        const location = useLocation()

        const url = location.pathname;

        const urlFull = location.search

    // Open and close modal with buttons

        const [showModal, setShowModal] = useState(false)

        const [modalType, setModalType] = useState("")

        const modalToggle = (modalType) => {

            showModal == false ? setShowModal(true) : setShowModal(false)

            setModalType(modalType)

        }

    // useEffect

        useEffect(() => {

            const urlFilter = urlFull.slice(2)

            urlFull != "" && urlFilter != "continue" ? setModalType(urlFilter) : undefined

            urlFull != "" ? modalToggle(urlFilter) : undefined

        },[])
        

    return(

        <>

            {showModal == true ? <Modal modalToggle={modalToggle} type={modalType}/> : undefined}

            {

                url === "/" ? undefined :                     
                
                    <header className={`${globalStyles.flex} ${styles.header}`}>

                        <section className={`${globalStyles.flexHorizontalCenter} ${globalStyles.flex_30} ${styles.headerLang}`}>

                            <LanguageMenu></LanguageMenu>

                        </section>

                        <section className={`${globalStyles.flex} ${globalStyles.flex_30} ${styles.headerTitle}`}>

                            <h1 className={styles.headerH1}>Wordle</h1>

                        </section>

                        <nav className={`${globalStyles.flex} ${globalStyles.flex_30} ${styles.headerNav}`}>

                            <button className={styles.headerBtn} onClick={() => modalToggle("instructions")}> <MdHelpOutline size={28} />  </button>

                            <button className={styles.headerBtn} onClick={() => modalToggle("stats")}> <IoStatsChartOutline size={28}/>  </button>

                            <button className={styles.headerBtn} onClick={() => modalToggle("settings")}> <BsFillGearFill size={28}/> </button>

                            <Link className={styles.loginBtn} to="/login" target="_blank">

                                <p className={styles.btnText}>{header.loginBtn}</p>

                            </Link>

                        </nav>

                    </header>

            }

        </>

    )

}

export default Header;