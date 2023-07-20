import GridRow from "../GridRow/GridRow"
import styles from "./Grid.module.scss"

import { useEffect, useState } from "react"

const Grid = (props) => {

    const intent = props.activeRow

    const [playerWord1, setPlayerWord1] = useState("")
    const [playerWord2, setPlayerWord2] = useState("")
    const [playerWord3, setPlayerWord3] = useState("")
    const [playerWord4, setPlayerWord4] = useState("")
    const [playerWord5, setPlayerWord5] = useState("")
    const [playerWord6, setPlayerWord6] = useState("")

    const [letter, setLetter] = useState(0)

    const writeWord = (e) => {

        const key = e.key
        const keyCode = e.code

        //console.log("key",e);

        if(keyCode.includes("Key") && letter < 5){

            switch(intent){

                case 1:
                    setPlayerWord1(playerWord1 + key.toUpperCase())
                break;
                case 2:
                    setPlayerWord2(playerWord2 + key.toUpperCase())
                break;
                case 3:
                    setPlayerWord3(playerWord3 + key.toUpperCase())
                break;
                case 4:
                    setPlayerWord4(playerWord4 + key.toUpperCase())
                break;
                case 5:
                    setPlayerWord5(playerWord5 + key.toUpperCase())
                break;
                case 6:
                    setPlayerWord6(playerWord6 + key.toUpperCase())
                break;
                default: console.log("Error")

            }

            setLetter(letter + 1)

        }
        else if(keyCode.includes("Backspace")){

            switch(intent){

                case 1:
                    setPlayerWord1(playerWord1.slice(0, -1))
                break;
                case 2:
                    setPlayerWord2(playerWord2.slice(0, -1))
                break;
                case 3:
                    setPlayerWord3(playerWord3.slice(0, -1))
                break;
                case 4:
                    setPlayerWord4(playerWord4.slice(0, -1))
                break;
                case 5:
                    setPlayerWord5(playerWord5.slice(0, -1))
                break;
                case 6:
                    setPlayerWord6(playerWord6.slice(0, -1))
                break;
                default: console.log("Error")

            }

            setLetter(letter - 1)

        }

    }

    useEffect(() => {

        window.onkeydown = writeWord

        //window.onkeypress = writeWord
    
    })

    return(

        <section className={styles.homeGrid}>
            
            <GridRow rowWord={playerWord1}></GridRow>

            <GridRow rowWord={playerWord2}></GridRow>

            <GridRow rowWord={playerWord3}></GridRow>

            <GridRow rowWord={playerWord4}></GridRow>

            <GridRow rowWord={playerWord5}></GridRow>

            <GridRow rowWord={playerWord6}></GridRow>

        </section>

    )

}

export default Grid;