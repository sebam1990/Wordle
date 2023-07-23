import styles from './Keyboard.module.scss'

import KeyboardRow from '../KeyboardRow/KeyboardRow.jsx'


const Keyboard = () => {

    const row1 = ['Q','W','E','R','T','Y','U','I','O','P']
    const row2 = ['A','S','D','F','G','H','J','K','L','Ñ']
    const row3 = ['ENVIAR','Z','X','C','V','B','N','M','Backspace']

    return(

        <section className={styles.homeKeyboard}>

            <KeyboardRow keysArray={row1}></KeyboardRow>

            <KeyboardRow keysArray={row2}></KeyboardRow>

            <KeyboardRow keysArray={row3}></KeyboardRow>

        </section>


    )

}

export default Keyboard