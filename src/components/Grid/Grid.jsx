import GridRow from "../GridRow/GridRow"
import styles from "./Grid.module.scss"

import { useEffect, useState } from "react"

const Grid = (props) => {

    const [playerWord, setPlayerWord] = useState(["","","","","",""])

    /*const [playerWord, setPlayerWord] = useState({

        

    })*/

    const intent = props.activeRow

    let inputWord = ""

    const writeWord = (e) => {

        if(inputWord.length < 5){

            const key = e.key

            const playerWordState = playerWord
    
            inputWord = inputWord + key.toUpperCase()
    
            playerWordState[intent] = inputWord

            //let playerWordIndex = "intent" + intent

            //playerWordState[playerWordIndex] = inputWord

            setPlayerWord(playerWordState)

            console.log(playerWord);

        }

    }

    useEffect(() => {

        //window.onkeydown = writeWord

        window.onkeypress = writeWord
    
    })

    return(

        <section className={styles.homeGrid}>
            
            <GridRow activeRow={intent} rowWord={playerWord[0]}></GridRow>

            <GridRow rowWord={playerWord[1]}></GridRow>

            <GridRow rowWord={playerWord[2]}></GridRow>

            <GridRow rowWord={playerWord[3]}></GridRow>

            <GridRow rowWord={playerWord[4]}></GridRow>

            {

                
                

            }


            

        </section>

    )

}

export default Grid;