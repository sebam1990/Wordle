// Import dependencies

    import {useContext, useState, useEffect} from 'react'

// Import styles

    import styles from './Keyboard.module.scss'

// Import components

    import KeyboardRow from '../KeyboardRow/KeyboardRow.jsx'

// Import playContext

    import {PlayContext} from '../../context/CreateContext'

const Keyboard = () => {

    // Arrays for letters rows

        const letterRows = [

            ['Q','W','E','R','T','Y','U','I','O','P'],
            ['A','S','D','F','G','H','J','K','L','Ñ'],
            ['ENVIAR','Z','X','C','V','B','N','M','Backspace']

        ]

    // Keys state array

        const [keyState, setKeyState] = useState([

            ["idle","idle","idle","idle","idle","idle","idle","idle","idle","idle"],
            ["idle","idle","idle","idle","idle","idle","idle","idle","idle","idle"],
            [null,"idle","idle","idle","idle","idle","idle","idle",null]

        ])

    // useContext

        const [playContext, setPlayContext] = useContext(PlayContext)

        const copyKeyState = [...keyState]

    // Get vars from playContext

        const guess = playContext.guess

        const playerWord = playContext.playerWord[guess].split("")

    // Change key color function

    const keyColors = () => {

        // Get results from context

            const letterResults = playContext.letterResults[guess]

        // Check results and change key states

            letterRows.forEach((row, rIndex) => {

                playerWord.forEach((pwLetter, pwIndex) => {

                    if(row.includes(pwLetter)){

                        const stateIndex = row.indexOf(pwLetter)

                        copyKeyState[rIndex][stateIndex] = letterResults[pwIndex]

                        setKeyState(copyKeyState)

                    }

                })

            })

    }

    return(

        <section className={styles.homeKeyboard}>

            <KeyboardRow keysArray={letterRows[0]} keyState={keyState[0]}></KeyboardRow>

            <KeyboardRow keysArray={letterRows[1]} keyState={keyState[1]}></KeyboardRow>

            <KeyboardRow keysArray={letterRows[2]} keyState={keyState[2]} keyColors={keyColors}></KeyboardRow>

        </section>

    )

}

export default Keyboard