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

        const configContext = useContext(ConfigContext)

        const [playContext, setPlayContext] = useContext(PlayContext)

    // Get context language

        const lang = configContext.lang;
    
    // Set enter innter text

        let enterText = ""

        lang == "ES" ? enterText = "ENVIAR" : enterText = "ENTER"

    // Get props

        const keys = props.keysArray;
        
    return(

        <section className={`${globalStyles.flexCenter} ${styles.keyboardRow}`}>

            {

                keys.map((letter, index) => {

                    if(letter == "ENVIAR"){

                        return <button key={index} className={`${styles.keyBtn} ${styles.enterKey}`} id={"Key"+letter} onClick={(e) => {playContext.compareWords(e)}}>{enterText}</button>

                    }
                    else if(letter == "Backspace"){

                        return <button key={index} className={`${styles.keyBtn} ${styles.backKey}`} id={letter} onClick={(e) => {playContext.writeWord(e)}}> <MdOutlineBackspace size={20}/> </button>

                    }
                    else if(letter == "Ñ" && lang == "EN"){

                        return undefined

                    }
                    else{

                        return <button key={index} className={styles.keyBtn} id={"Key"+letter} onClick={(e) => {playContext.writeWord(e)}}>{letter}</button>

                    }

                })

            }

        </section>

    )

}

export default KeyboardRow