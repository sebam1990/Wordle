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

        let copyContext = {...playContext}

    // General vars

        // Number of actual chance

            const chance = 1

        // States for words inputs by player

            const [playerWord1, setPlayerWord1] = useState([])
            const [playerWord2, setPlayerWord2] = useState([])
            const [playerWord3, setPlayerWord3] = useState([])
            const [playerWord4, setPlayerWord4] = useState([])
            const [playerWord5, setPlayerWord5] = useState([])
            const [playerWord6, setPlayerWord6] = useState([])

            const [state, setState] = useState(["", "", "", "", "", ""])

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
                        addCase(playerWord1, chance)
                    break;
                    case 2:
                        addCase(playerWord2, chance)
                    break;
                    case 3:
                        addCase(playerWord3, chance)
                    break;
                    case 4:
                        addCase(playerWord4, chance)
                    break;
                    case 5:
                        addCase(playerWord5, chance)
                    break;
                    case 6:
                        addCase(playerWord6, chance)
                    break;
                    default: console.log("Error")

                }

                setLetter(letter + 1)

            }
            else if(keyCode.includes("Backspace")){

                switch(chance){

                    case 1:
                        removeCase(playerWord1, chance)
                    break;
                    case 2:
                        removeCase(playerWord2, chance)
                    break;
                    case 3:
                        removeCase(playerWord3, chance)
                    break;
                    case 4:
                        removeCase(playerWord4, chance)
                    break;
                    case 5:
                        removeCase(playerWord5, chance)
                    break;
                    case 6:
                        removeCase(playerWord6, chance)
                    break;
                    default: console.log("Error")

                }

                setLetter(letter - 1)

            }

        }

    // Function to run in any case of add switch

        const addCase = (word, chance) => {

            word.push(key.toUpperCase())

            copyContext.playWord[chance] = word.join("")

            setPlayContext(copyContext)

            console.log("add",playContext);

        }

    // Function to run in any case of add switch

        const removeCase = (word, chance) => {

            word.pop()

            copyContext.playWord[chance] = word.join("")

            setPlayContext(copyContext)

            console.log("remove",playContext)

        }
const cs = {...state}
    const estado = () => {

        //console.log(state);
        cs[0] = cs[0] + "A"
        console.log("cs",cs)
        setState(cs)
        console.log(state);

    }

    // useEffect

        useEffect(() => {

            // Set event at keyboard key press

                window.onkeydown = writeWord
        
        })

    return(

        <section className={styles.homeGrid}>
            
            <GridRow></GridRow>

            <GridRow></GridRow>

            <GridRow></GridRow>

            <GridRow></GridRow>

            <GridRow></GridRow>

            <GridRow></GridRow>

            <button onClick={estado}>Estado</button>

        </section>

    )

}

export default Grid;