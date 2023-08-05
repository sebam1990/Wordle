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

    // Get play data from localStorage



    // Get vars from play context

        const [playContext, setPlayContext] = useContext(PlayContext)

        const copyPlayContext = {...playContext}

        const guess = playContext.guess

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

            // Get day word

                const dayWord = dbWord()

            // Get player word

                const playerWord = playContext.playerWord[guess]

            // Var for letter hits

                let hits = 0

            // Array of results

                const guessResults = ["", "", "", "", ""]

            // Compare loop

                for(let letter in dayWord){

                    if(dayWord[letter] == playerWord[letter]){

                        guessResults[letter] = "correct"

                        hits++
                        
                    }
                    else if(dayWord[letter] != playerWord[letter] && dayWord.includes(playerWord[letter])){

                        guessResults[letter] = "present"
                        
                    }
                    else{

                        guessResults[letter] = "absent"

                    }

                }

            // Save results in context

                copyPlayContext.letterResults[guess] = guessResults

                setPlayContext(copyPlayContext)

            // Game fiinal or continue

                if(hits == 5){

                    console.log("Ganaste");

                }
                else{

                    console.log("Proxima ronda");

                }

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