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

        // Actual chance

            const chance = playContext.chance

        // PlayerWord

            const playerWord = playContext.playerWord[chance]

        // State for letter number

            const [letter, setLetter] = useState(0)

        // Event vars

            let key = undefined
            let keyCode = undefined


    // Player input word function

        const writeWord = (e) => {

            e.type == "keydown" ? (key = e.key, keyCode = e.code) : (key = e.target.innerText, keyCode = e.target.id)

            if(keyCode.includes("Key") && letter < 5){

                switch(chance){

                    case 1:
                        addCase(chance)
                    break;
                    case 2:
                        addCase(chance)
                    break;
                    case 3:
                        addCase(chance)
                    break;
                    case 4:
                        addCase(chance)
                    break;
                    case 5:
                        addCase(chance)
                    break;
                    case 6:
                        addCase(chance)
                    break;
                    default: console.log("Error")

                }

                setLetter(letter + 1)

            }
            else if(keyCode.includes("Backspace") && letter > 0){

                switch(chance){

                    case 1:
                        removeCase(chance)
                    break;
                    case 2:
                        removeCase(chance)
                    break;
                    case 3:
                        removeCase(chance)
                    break;
                    case 4:
                        removeCase(chance)
                    break;
                    case 5:
                        removeCase(chance)
                    break;
                    case 6:
                        removeCase(chance)
                    break;
                    default: console.log("Error")

                }

                setLetter(letter - 1)

            }

        }

    // Function to run in any case of add switch

        const addCase = (chance) => {

            copyPlayContext.playerWord[chance] = copyPlayContext.playerWord[chance] + key.toUpperCase()

            setPlayContext(copyPlayContext)

        }

    // Function to run in any case of add switch

        const removeCase = (chance) => {

            copyPlayContext.playerWord[chance] = copyPlayContext.playerWord[chance].slice(0, -1)

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
            
            <GridRow rowWord={playContext.playerWord[1]}></GridRow>

            <GridRow rowWord={playContext.playerWord[2]}></GridRow>

            <GridRow rowWord={playContext.playerWord[3]}></GridRow>

            <GridRow rowWord={playContext.playerWord[4]}></GridRow>

            <GridRow rowWord={playContext.playerWord[5]}></GridRow>

            <GridRow rowWord={playContext.playerWord[6]}></GridRow>

        </section>

    )

}

export default Grid;