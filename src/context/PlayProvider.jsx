// Import dependencies

    import {useState} from 'react'
    import { PlayContext } from "./CreateContext.jsx";

// Import components

    import Header from '../components/Header/Header.jsx'

const PlayProvider = ({children}) => {
    
    // playWord object

        const playWord = {
            
            1 : "",
            2 : "",
            3 : "",
            4 : "",
            5 : "",
            6 : ""

        }

    // Context state

        const [playProvider, setPlayProvider] = useState({playWord}) 

    return(

        <PlayContext.Provider value={[playProvider, setPlayProvider]}>

            <Header></Header>

            {children}

        </PlayContext.Provider>

    )

}

export default PlayProvider;