// Import dependencies

    import {useState} from 'react'
    import { PlayContext } from "./CreateContext.jsx";

// Import components

    import Header from '../components/Header/Header.jsx'

const PlayProvider = ({children}) => {

    const guess = 1
    
    // playerWord object

        const playerWord = {
            
            1 : "",
            2 : "",
            3 : "",
            4 : "",
            5 : "",
            6 : ""

        }

    // Results object

        const letterResults = {
                
            1 : ["", "", "", "", ""],
            2 : ["", "", "", "", ""],
            3 : ["", "", "", "", ""],
            4 : ["", "", "", "", ""],
            5 : ["", "", "", "", ""],
            6 : ["", "", "", "", ""]

        }

    // Default context functions

        const compareWords = () => {

            return"Default compareWords function from PlayProvider"

        }

        const writeWord = () => {
            
            return "Default writeWord function from PlayProvider"
        
        }

    // Context state

        const [playProvider, setPlayProvider] = useState({guess: guess, playerWord: playerWord, letterResults: letterResults, writeWord: writeWord, compareWords: compareWords}) 

    return(

        <PlayContext.Provider value={[playProvider, setPlayProvider]}>

            <Header></Header>

            {children}

        </PlayContext.Provider>

    )

}

export default PlayProvider;