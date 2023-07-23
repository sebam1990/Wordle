// Import dependencies

    import { useContext, useEffect, useState } from "react"

// Import context

    import { PlayContext } from "../../context/CreateContext"

// Import styles

    import GridRow from "../GridRow/GridRow"
    import styles from "./Grid.module.scss"

const Grid = () => {

    // useContext

    const playContext = useContext(PlayContext)

    // Get input function

        const writeWord = playContext.writeWord;

    // useEffect

        useEffect(() => {

            // Set event at keyboard key press

                window.onkeydown = writeWord
        
        })

    return(

        <section className={styles.homeGrid}>
            
            <GridRow rowWord={playContext.playerWord1}></GridRow>

            <GridRow rowWord={playContext.playerWord2}></GridRow>

            <GridRow rowWord={playContext.playerWord3}></GridRow>

            <GridRow rowWord={playContext.playerWord4}></GridRow>

            <GridRow rowWord={playContext.playerWord5}></GridRow>

            <GridRow rowWord={playContext.playerWord6}></GridRow>

        </section>

    )

}

export default Grid;