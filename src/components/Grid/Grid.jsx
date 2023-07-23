// Import dependencies

    import { useEffect, useState } from "react"

// Import styles

    import GridRow from "../GridRow/GridRow"
    import styles from "./Grid.module.scss"

const Grid = (props) => {

    // Number of actual chance

        const chance = props.activeRow

    // States for words inputs by player

        const [playerWord1, setPlayerWord1] = useState("")
        const [playerWord2, setPlayerWord2] = useState("")
        const [playerWord3, setPlayerWord3] = useState("")
        const [playerWord4, setPlayerWord4] = useState("")
        const [playerWord5, setPlayerWord5] = useState("")
        const [playerWord6, setPlayerWord6] = useState("")

    // State for letter number

        const [letter, setLetter] = useState(0)

    // Write word in grid function

        const writeWord = (e) => {

            const key = e.key
            const keyCode = e.code

            if(keyCode.includes("Key") && letter < 5){

                switch(chance){

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

                switch(chance){

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

    // useEffect

        useEffect(() => {

            // Set event at keyboard key press

                window.onkeydown = writeWord
        
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