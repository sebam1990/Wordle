// Import dependencies

    import { useContext, useEffect, useState } from "react"

// Import context

    import { PlayContext } from "../../context/CreateContext"

// Import styles

    import GridRow from "../GridRow/GridRow"
    import styles from "./Grid.module.scss"

const Grid = () => {

    // useContext

        const [playContext, setPlayContext] = useContext(PlayContext)

        const copyPlayContext = {...playContext}

    // General vars

        // Actual guess

            const guess = playContext.guess

        // PlayerWord

            const playerWord = playContext.playerWord[guess]

        // State for letter number

            const [letter, setLetter] = useState(0)

        // Event vars

            let key = undefined
            let keyCode = undefined


    // Player input word function

        const writeWord = (e) => {

            e.type == "keydown" ? (key = e.key, keyCode = e.code) : (key = e.target.innerText, keyCode = e.target.id)

            if(keyCode.includes("Key") && letter < 5){

                switch(guess){

                    case 1:
                        addCase(guess)
                    break;
                    case 2:
                        addCase(guess)
                    break;
                    case 3:
                        addCase(guess)
                    break;
                    case 4:
                        addCase(guess)
                    break;
                    case 5:
                        addCase(guess)
                    break;
                    case 6:
                        addCase(guess)
                    break;
                    default: console.log("Error")

                }

                setLetter(letter + 1)

            }
            else if(keyCode.includes("Backspace") && letter > 0){

                switch(guess){

                    case 1:
                        removeCase(guess)
                    break;
                    case 2:
                        removeCase(guess)
                    break;
                    case 3:
                        removeCase(guess)
                    break;
                    case 4:
                        removeCase(guess)
                    break;
                    case 5:
                        removeCase(guess)
                    break;
                    case 6:
                        removeCase(guess)
                    break;
                    default: console.log("Error")

                }

                setLetter(letter - 1)

            }

        }

    // Function to run in any case of add switch

        const addCase = (guess) => {

            copyPlayContext.playerWord[guess] = copyPlayContext.playerWord[guess] + key.toUpperCase()

            copyPlayContext.letterResults[guess][letter] = "idle"

            setPlayContext(copyPlayContext)

        }

    // Function to run in any case of add switch

        const removeCase = (guess) => {

            copyPlayContext.playerWord[guess] = copyPlayContext.playerWord[guess].slice(0, -1)

            copyPlayContext.letterResults[guess][letter-1] = "empty"

            setPlayContext(copyPlayContext)

        }

    // useEffect

        useEffect(() => {

            // Run writeWord function when keydown or click on keyboard

                window.onkeydown = writeWord;

            // Update writeWord function in PlayerContext

                playContext.writeWord = writeWord

        })

    return(

        <section className={styles.homeGrid}>
            
            <GridRow rowWord={playContext.playerWord[1]} cellState={playContext.letterResults[1]}></GridRow>

            <GridRow rowWord={playContext.playerWord[2]} cellState={playContext.letterResults[2]}></GridRow>

            <GridRow rowWord={playContext.playerWord[3]} cellState={playContext.letterResults[3]}></GridRow>

            <GridRow rowWord={playContext.playerWord[4]} cellState={playContext.letterResults[4]}></GridRow>

            <GridRow rowWord={playContext.playerWord[5]} cellState={playContext.letterResults[5]}></GridRow>

            <GridRow rowWord={playContext.playerWord[6]} cellState={playContext.letterResults[6]}></GridRow>

        </section>

    )

}

export default Grid;