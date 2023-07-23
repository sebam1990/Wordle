// Import dependencies

    import {useContext} from 'react';
    import {ConfigContext, PlayContext} from '../../context/CreateContext';

// Import styles

    import globalStyles from '../../index.module.scss'
    import styles from './KeyboardRow.module.scss';

// Import icons

    import {MdOutlineBackspace} from 'react-icons/md'

const KeyboardRow = (props) => {

    // useContext

        const configcontext = useContext(ConfigContext)

        const playContext = useContext(PlayContext)

    // Get context language

        const lang = configcontext.lang;

    // Get props

        const keys = props.keysArray;

    // Get input function

        const writeWord = playContext.writeWord;

    return(

        <section className={`${globalStyles.flexCenter} ${styles.keyboardRow}`}>

            {

                keys.map((letter, index) => {

                    const btn = letter == "ENVIAR" ? <button key={index} className={`${styles.keyBtn} ${styles.enterKey}`} id={"Key"+letter}>{lang == "EN" ? "ENTER" : letter}</button> : 
                    
                    (letter == "Backspace" ? <button key={index} className={`${styles.keyBtn} ${styles.backKey}`} id={letter} onClick={writeWord}><MdOutlineBackspace size={20}/></button> : 
                    
                    (letter == "Ñ" && lang == "EN" ? undefined : <button key={index} className={styles.keyBtn} id={"Key"+letter} onClick={writeWord}>{letter}</button>))
                    
                    return btn

                })

            }

        </section>

    )

}

export default KeyboardRow