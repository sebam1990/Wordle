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

        // Event default vars

            let key = undefined
            let keyCode = undefined

    // Player input word function

        const writeWord = (e) => {

            // playerWord length

                let pwLength = copyPlayContext.playerWord[guess].length

            // Event type

                e.type == "keydown" ? (key = e.key, keyCode = e.code) : (key = e.target.innerText, keyCode = e.target.id)

            // Add an remove letters

            if(keyCode.includes("Key") && pwLength < 5){

                copyPlayContext.playerWord[guess] += key.toUpperCase()

                copyPlayContext.letterResults[guess][pwLength] = "idle"

            }
            else if(keyCode == "Backspace" && pwLength> 0){

                copyPlayContext.playerWord[guess] = copyPlayContext.playerWord[guess].slice(0,-1)

                copyPlayContext.letterResults[guess][pwLength-1] = "empty"

            }

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