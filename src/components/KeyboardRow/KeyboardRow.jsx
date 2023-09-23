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

    // Get props

        const keys = props.keysArray

        const keyState = props.keyState

        const enterKey = props.enter

    // Get error colors codes fo

        const keyColors = props.keyColors

        const enterEvent = () => {
            
            playContext.compareWords()

            setTimeout(() => {

                keyColors()

            },500)

        }

    //
        
    return(

        <section className={`${globalStyles.flexAllCenter} ${styles.keyboardRow}`}>

            {

                keys.map((letter, index) => {

                    if(letter == enterKey){

                        return <button key={index} className={`${styles.keyBtn} ${styles.enterKey}`} id={"Key"+letter} onClick={enterEvent}>{letter}</button>

                    }
                    else if(letter == "Backspace"){

                        return <button key={index} className={`${styles.keyBtn} ${styles.backKey}`} id={letter} onClick={(e) => {playContext.writeWord(e)}}> <MdOutlineBackspace size={20}/> </button>

                    }
                    else{

                        return <button key={index} className={styles.keyBtn} id={"Key"+letter} key-state={keyState[index]} onClick={(e) => {playContext.writeWord(e)}}>{letter}</button>

                    }

                })

            }

        </section>

    )

}

export default KeyboardRow