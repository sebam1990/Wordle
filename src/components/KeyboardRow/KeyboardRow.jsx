import globalStyles from '../../index.module.scss'
import styles from './KeyboardRow.module.scss';

import {MdOutlineBackspace} from 'react-icons/md'

const KeyboardRow = (props) => {

    const keys = props.keysArray;

    console.log(keys);

    return(

        <section className={`${globalStyles.flexCenter} ${styles.keyboardRow}`}>

            {

                keys.map((letter, index) => {

                    const btn = letter == "ENVIAR" ? <button key={index} className={`${styles.keyBtn} ${styles.enterKey}`} code={"Key"+letter}>{letter}</button> : 
                    
                    (letter == "Backspace" ? <button key={index} className={`${styles.keyBtn} ${styles.backKey}`} code={"Key"+letter}><MdOutlineBackspace size={20}/></button> : <button key={index} className={styles.keyBtn} code={"Key"+letter}>{letter}</button>)
                    
                    return btn

                })

            }

        </section>

    )

}

export default KeyboardRow