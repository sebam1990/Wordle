// Import dependencies

    import {useContext, useEffect, useState} from 'react';

// Import styles

    import styles from './Game.module.scss';

// Import components

    import Grid from '../../components/Grid/Grid.jsx';
    import Keyboard from '../../components/Keyboard/Keyboard.jsx';

// Import contexts

    import { ConfigContext, PlayContext } from '../../context/CreateContext';

const Game = () => {

    // Get vars from config context

        const configContext = useContext(ConfigContext)

        const lang = configContext.lang

    // Get vars from play context

        const [playContext, setPlayContext] = useContext(PlayContext)

    // Get day word function from database

        const dbWord = () => {

            const dbWordEs = "CIEGO"

            const dbWordEn = "TASTY"

            let dbWord = ""

            lang == "ES" ? dbWord = dbWordEs : dbWord = dbWordEn

            return dbWord        

        }

    // Compare words function

        const compareWords = (e) => {

            const dayWord = dbWord()

            const playerWord = playContext.playerWord[0]

            console.log(dayWord)

            console.log(playerWord)
        }

        useEffect(() => {

            // Update compareWord function in PlayContext

                playContext.compareWords = compareWords

        })

    return(

        <main className={styles.gameMain}>

            <Grid></Grid>

            <Keyboard></Keyboard>

        </main>

    )

}

export default Game;