import globalStyles from '../../index.module.scss'
import styles from './Header.module.scss'

// Import icons

import {MdHelpOutline} from "react-icons/md"
import {IoStatsChartOutline} from "react-icons/io5"
import {BsFillGearFill} from "react-icons/bs"

// Import external components

import { Switch, Space } from 'antd'

const Header = () => {

    return(

            <header className={`${globalStyles.flex} ${styles.header}`}>

                <section className={`${globalStyles.flex} ${globalStyles.flex_30} ${styles.headerLang}`}>

                    <Space direction="vertical" size={40}>

                        <Switch checkedChildren="ES" unCheckedChildren="EN" defaultChecked={true} className={styles.headerSwitch}/>

                    </Space>

                </section>

                <section className={`${globalStyles.flex} ${globalStyles.flex_30} ${styles.headerTitle}`}>

                    <h1 className={styles.headerH1}>Wordle</h1>

                </section>

                <nav className={`${globalStyles.flex} ${globalStyles.flex_30} ${styles.headerNav}`}>

                    <button className={styles.headerBtn}> <MdHelpOutline size={28} />  </button>

                    <button className={styles.headerBtn}> <IoStatsChartOutline size={28}/>  </button>

                    <button className={styles.headerBtn}> <BsFillGearFill size={28}/> </button>

                    <button className={styles.loginBtn}>Iniciar sesión</button>

                </nav>

            </header>

    )

}

export default Header;