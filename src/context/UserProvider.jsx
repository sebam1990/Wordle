import { useState } from 'react'
import { UserContext } from "./UserContext"
import Header from "../components/Header/Header.jsx"

const UserProvider = ({ children }) => {

    // Set default language

        const systemLang = window.navigator.languages[1]

        const localData = localStorage.getItem("wordle-config");

        localData == null ? localStorage.setItem("wordle-config", JSON.stringify({lang: systemLang.toUpperCase()})) : undefined

        const localLang = JSON.parse(localData).lang;

        const [lang, setLang] = useState(localData == null ? systemLang.toUpperCase() : localLang);

    // Change language function

        const changeLang = () => {

            // Update localstorage

                lang == "ES" ? localStorage.setItem("wordle-config", JSON.stringify({lang: "EN"})) : localStorage.setItem("wordle-config", JSON.stringify({lang: "ES"}))

            // Update context

                lang == "ES" ? setLang("EN") : setLang("ES")

                console.log(lang);

        }

    return(

        <UserContext.Provider value={{lang: lang, changeLang}}>

            <Header></Header>

            {children}
            
        </UserContext.Provider>

    )

}

export default UserProvider;