

// Import styles

    import styles from './Switch.module.scss';

    import globalStyles from "../../globalStyles.module.scss"

// 

    import {ConfigContext} from "../../context/CreateContext.jsx"


const Switch = (props) => {




    const event = props.changeEvent

    const checked = props.checked

    return(

        <button className={`${styles.switchTrack} ${globalStyles.flex}`} state={checked} onClick={event}>

            <span className={styles.switchHandler} state={checked}></span>

        </button>

    )

}

export default Switch;