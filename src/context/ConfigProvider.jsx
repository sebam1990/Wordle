// Import dependencies

    import { useState } from 'react'

// Import context

    import {ConfigContext} from "./CreateContext.jsx"


const ConfigProvider = ({ children }) => {

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

        <ConfigContext.Provider value={{lang: lang, changeLang}}>

            {children}
            
        </ConfigContext.Provider>

    )

}

export default ConfigProvider;