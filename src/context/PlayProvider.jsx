// Import dependencies

    import {useState} from 'react'
    import { PlayContext } from "./CreateContext.jsx";

// Import components

    import Header from '../components/Header/Header.jsx'

const PlayProvider = ({children}) => {

// Player input word function

    // Number of actual chance

    const chance = 1

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

            let key = undefined
            let keyCode = undefined

            e.type == "keydown" ? key = e.key : key = e.target.innerText

            e.type == "keydown" ? keyCode = e.code : keyCode = e.target.id

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

    return(

        <PlayContext.Provider value={{chance, playerWord1, playerWord2, playerWord3, playerWord4, playerWord5, playerWord6, writeWord}}>

            <Header></Header>

            {children}

        </PlayContext.Provider>

    )

}

export default PlayProvider;