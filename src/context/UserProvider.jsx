import { UserContext } from "./UserContext"
import Header from "../components/Header/Header.jsx"

const UserProvider = ({ children }) => {

    return(

        <UserContext.Provider value={{}}>

            <Header></Header>

            {children}
            
        </UserContext.Provider>

    )

}

export default UserProvider;