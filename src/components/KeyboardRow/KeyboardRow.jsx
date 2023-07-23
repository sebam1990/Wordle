// Import dependencies

    import {useContext} from 'react';
    import {ConfigContext} from '../../context/CreateContext';


// Import styles

    import globalStyles from '../../index.module.scss'
    import styles from './KeyboardRow.module.scss';

// Import icons

    import {MdOutlineBackspace} from 'react-icons/md'

const KeyboardRow = (props) => {

    const context = useContext(ConfigContext);

    const lang = context.lang;

    const keys = props.keysArray;

    return(

        <section className={`${globalStyles.flexCenter} ${styles.keyboardRow}`}>

            {

                keys.map((letter, index) => {

                    const btn = letter == "ENVIAR" ? <button key={index} className={`${styles.keyBtn} ${styles.enterKey}`} code={"Key"+letter}>{lang == "EN" ? "ENTER" : letter}</button> : 
                    
                    (letter == "Backspace" ? <button key={index} className={`${styles.keyBtn} ${styles.backKey}`} code={"Key"+letter}><MdOutlineBackspace size={20}/></button> : 
                    
                    (letter == "Ñ" && lang == "EN" ? undefined : <button key={index} className={styles.keyBtn} code={"Key"+letter}>{letter}</button>))
                    
                    return btn

                })

            }

        </section>

    )

}

export default KeyboardRow