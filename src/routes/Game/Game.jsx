// Import dependencies

    import {useContext, useEffect, useState} from 'react';
    import CryptoJS from 'crypto-js';

// Import styles

    import styles from './Game.module.scss';

// Import components

    import Grid from '../../components/Grid/Grid.jsx';
    import Keyboard from '../../components/Keyboard/Keyboard.jsx';
    import ResultModal from "../../components/ResultModal/ResultModal.jsx"


// Import contexts

    import { ConfigContext, PlayContext } from '../../context/CreateContext';

// Modal function

const Game = () => {

    // Get vars from config context

        const configContext = useContext(ConfigContext)

        const lang = configContext.lang

    // Get vars from play context

        const [playContext, setPlayContext] = useContext(PlayContext)

        const copyPlayContext = {...playContext}

        let guess = copyPlayContext.guess

    // Get vars from localStorage

        const worldePlay = JSON.parse(localStorage.getItem("wordle-play"))

        const worldeUser = JSON.parse(localStorage.getItem("wordle-user"))

    // Modal vars

        const [showModal, setShowModal] = useState(false)

        const [modalMsg , setModalMsg] = useState("")

    // Get day word function from database

        const dbWord = () => {

            const dbWordEs = "CIEGO"

            const dbWordEn = "TASTY"

            let dbWord = ""

            lang == "ES" ? dbWord = dbWordEs : dbWord = dbWordEn

            return dbWord        

        }

    // Compare words function

        const compareWords = () => {

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

            // Game final or continue

                if(hits == 5){

                    result("victory")

                }
                else if(hits !=5 && guess < 6){

                    // Amount current guess and hit

                        copyPlayContext.guess += 1

                        hits++

                    // Save data in localStorage if play continue

                        const encryptPass = "wordle2023"

                        const playData = {

                            guess: copyPlayContext.guess,
                            dayWord: CryptoJS.AES.encrypt(dayWord, encryptPass).toString(),
                            playerWord: copyPlayContext.playerWord,
                            completePlay: false,
                            lastUpdate: window.Date.now(),
                    
                        }

                        localStorage.setItem("wordle-play", JSON.stringify(playData))

                }
                else{

                    result("lost", dayWord)

                }

                setPlayContext(copyPlayContext)

        }

    // Function for result game

        const result = (result, dayWord) => {

            if(result == "victory"){

                setShowModal(true)

                const msgEn = ["Great","Genius","Excelent"]

                const msgEs = ["Genial","Genio","Excelente"]

                const msgIndex = Math.floor(Math.random() * 3)

                lang == "ES" ? setModalMsg(msgEs[msgIndex]) : setModalMsg(msgEn[msgIndex])

            }
            else if(result == "lost"){

                setShowModal(true)

                setModalMsg(dayWord)

            }

        }

    // useEffect

        useEffect(() => {

            // Update compareWord function in PlayContext

                playContext.compareWords = compareWords

        })

    return(

        <main className={styles.gameMain}>

            <section className={styles.modal}>

                {showModal == true ? <ResultModal msg={modalMsg}></ResultModal> : undefined}

            </section>

            <section>

                <Grid></Grid>

                <Keyboard></Keyboard>

            </section>

        </main>

    )

}

export default Game;