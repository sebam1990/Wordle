// Import dependencies

    import { useContext, useState, useEffect } from 'react'
    import {Link} from "react-router-dom"

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

const Header = () => {

    // useContext

        const configContext = useContext(ConfigContext)

    // Context vars

        const lang = configContext.lang

    // Change language

        const changeLang = () => {

            lang == "ES" ? configContext.setLang("EN") : configContext.setLang("ES")

        }
    
    // URL vars

        const url = window.location.pathname

        const urlFull = window.location.search

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

            {url == "/" ? undefined :

                <header className={`${globalStyles.flex} ${styles.header}`}>

                    <section className={`${globalStyles.flex} ${globalStyles.flex_30} ${styles.headerLang}`}>

                        {lang == "ES" ? <button className={`${styles.headerSwitch} ${styles.switchEsp}`} onClick={changeLang}></button> : <button className={`${styles.headerSwitch} ${styles.switchEng}`} onClick={changeLang}></button>}

                    </section>

                    <section className={`${globalStyles.flex} ${globalStyles.flex_30} ${styles.headerTitle}`}>

                        <h1 className={styles.headerH1}>Wordle</h1>

                    </section>

                    <nav className={`${globalStyles.flex} ${globalStyles.flex_30} ${styles.headerNav}`}>

                        <button className={styles.headerBtn} onClick={() => modalToggle("instructions")}> <MdHelpOutline size={28} />  </button>

                        <button className={styles.headerBtn} onClick={() => modalToggle("stats")}> <IoStatsChartOutline size={28}/>  </button>

                        <button className={styles.headerBtn} onClick={() => modalToggle("settings")}> <BsFillGearFill size={28}/> </button>

                        <Link className={styles.loginBtn} to="/login" target="_blank">

                            <p className={styles.btnText}>{lang == "ES" ? "Iniciar Sesión" : "Login"}</p>

                        </Link>

                    </nav>

            </header>}

        </>

    )

}

export default Header;