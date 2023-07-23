// Import dependencies

    import { PlayContext } from "./CreateContext.jsx";

// Import components

    import Header from '../components/Header/Header.jsx'

const PlayProvider = ({children}) => {

    return(

        <PlayContext.Provider value={{}}>

            <Header></Header>

            {children}

        </PlayContext.Provider>

    )

}

export default PlayProvider;