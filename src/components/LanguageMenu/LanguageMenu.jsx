// Import dependencies

    import { useState, useContext, useEffect } from 'react'

// Import styles

    import styles from "./LanguageMenu.module.scss"

    import headerStyles from "../Header/Header.module.scss"

    import globalStyles from "../../globalStyles.module.scss"

// Import icons

    import {MdArrowDropDown} from "react-icons/md"

// Import externals components

    import {DownOutlined} from "@ant-design/icons"

    import { Dropdown, Button, Space } from 'antd'

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

    // Change language function

        const changeLang = (e) => {

            const newLang = e.key

            setLang(newLang)

            wordleConfig.lang = newLang

            localStorage.setItem("wordle-config", JSON.stringify(wordleConfig))

        }
    
    // Menu items

        const items = []

        Object.keys(langList).map((key, index) => {

            const itemFlagUrl = "src/assets/flags/" + key + ".png"

            const newItem = {

                label: <p className={styles.itemText}>{langList[key]}</p>,
                key: key,
                icon: <img className={styles.langImg} src={itemFlagUrl} alt={key + " language"}></img>

            }

            items.push(newItem)

        })

        const menuProps = {items, onClick: changeLang}

    return(

        <section>

            <Space wrap>

                <Dropdown menu={menuProps} className={`${headerStyles.loginBtn} ${globalStyles.flexAllCenter} ${styles.langMenu}`} overlayClassName={styles.langList}>

                    <Button className={`${globalStyles.flex} ${styles.langBtn}`}>

                        <img className={styles.langImg} src={activeFlagUrl} alt={lang + " language"}></img>

                        <Space className={styles.langText}>{langList[lang]}</Space>

                        <DownOutlined />

                    </Button>

                </Dropdown>

            </Space>


        </section>

    )

}

export default LanguageMenu;